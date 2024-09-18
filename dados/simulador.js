const fs = require('fs');
const csv = require('csv-parser');

// Carregar dados do CSV
function carregarCSV(nomeArquivo, callback) {
    const resultados = [];
    fs.createReadStream(nomeArquivo)
        .pipe(csv({ separator: ';' }))  // Especificando o separador como ';'
        .on('data', (data) => resultados.push(data))
        .on('end', () => {
            callback(resultados);
        });
}

// Filtrar dados e remover colunas de pesos
function filtrarDados(dados, valorCorte) {
    return dados
        .filter(linha => parseFloat(linha['NOTA_CORTE']) >= valorCorte)
        .map(linha => {
            const { PESO_L, PESO_CH, PESO_CN, PESO_M, PESO_R, ...resto } = linha;
            return resto;
        });
}

// Main
function main() {
    const nomeArquivoEntrada = 'output.csv';  // Nome do arquivo de entrada
    const valorCorte = 750;  // Valor fixo de corte

    carregarCSV(nomeArquivoEntrada, (dados) => {
        // Filtrar os dados e remover os pesos
        const dadosFiltrados = filtrarDados(dados, valorCorte);

        // Converter os dados filtrados para JSON
        const jsonSaida = JSON.stringify(dadosFiltrados, null, 2);

        // Exibir o JSON resultante
        console.log(jsonSaida);
    });
}

main();
