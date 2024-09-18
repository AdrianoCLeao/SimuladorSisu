const fs = require('fs');
const csv = require('csv-parser');
const csvWriter = require('csv-writer').createObjectCsvWriter;
const axios = require('axios');

// Substitua pela sua chave de API do OpenCage
const API_KEY = '1f151787818e4bf389e5ebc580acf040';
const API_URL = `https://api.opencagedata.com/geocode/v1/json?key=${API_KEY}&q=`;

// Função para obter coordenadas de um município
async function obterCoordenadas(municipio) {
    try {
        const response = await axios.get(`${API_URL}${encodeURIComponent(municipio)}`);
        const resultado = response.data.results[0];
        if (resultado) {
            return {
                municipio: municipio,
                latitude: resultado.geometry.lat,
                longitude: resultado.geometry.lng
            };
        } else {
            return {
                municipio: municipio,
                latitude: 0,  // Substitui valores nulos por 0
                longitude: 0  // Substitui valores nulos por 0
            };
        }
    } catch (error) {
        console.error(`Erro ao obter coordenadas para ${municipio}:`, error);
        return {
            municipio: municipio,
            latitude: 0,  // Substitui valores nulos por 0
            longitude: 0  // Substitui valores nulos por 0
        };
    }
}

// Função para ler o CSV e obter coordenadas
async function processarCSV(nomeArquivo) {
    const municipios = new Set();
    const dados = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(nomeArquivo)
            .pipe(csv({ separator: ';' }))  // Especificando o separador como ';'
            .on('data', (data) => {
                if (data['MUNICIPIOCAMPUS']) {
                    municipios.add(data['MUNICIPIOCAMPUS']);
                    dados.push(data);
                }
            })
            .on('end', async () => {
                const municipiosArray = Array.from(municipios);
                const coordenadas = await Promise.all(municipiosArray.map(obterCoordenadas));
                const coordenadasMap = new Map(coordenadas.map(coord => [coord.municipio, coord]));

                // Adicionando coordenadas aos dados
                const dadosComCoordenadas = dados.map(row => {
                    const coordenada = coordenadasMap.get(row['MUNICIPIOCAMPUS']) || {};
                    return {
                        ...row,
                        latitude: coordenada.latitude || 0,  // Substitui valores nulos por 0
                        longitude: coordenada.longitude || 0  // Substitui valores nulos por 0
                    };
                });

                resolve(dadosComCoordenadas);
            })
            .on('error', reject);
    });
}

// Main
async function main() {
    const nomeArquivoEntrada = 'output.csv';  // Nome do arquivo de entrada
    const nomeArquivoSaida = 'output_with_coordinates.csv';  // Nome do arquivo de saída

    const dadosComCoordenadas = await processarCSV(nomeArquivoEntrada);

    // Criando o CSV Writer com novas colunas para latitude e longitude
    const writer = csvWriter({
        path: nomeArquivoSaida,
        header: [
            ...Object.keys(dadosComCoordenadas[0]),
            { id: 'latitude', title: 'Latitude' },
            { id: 'longitude', title: 'Longitude' }
        ]
    });

    // Gravando o novo CSV com as coordenadas
    writer.writeRecords(dadosComCoordenadas)
        .then(() => console.log(`Arquivo de saída gerado: ${nomeArquivoSaida}`))
        .catch(err => console.error('Erro ao escrever o arquivo CSV:', err));
}

main();
