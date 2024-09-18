const fs = require('fs');
const readline = require('readline');

const inputFile = 'chamada_regular_sisu_2022_1.csv';
const outputFile = 'output.json';

const uniqueColumns = ['SIGLA_IES', 'NOME_CAMPUS', 'NOME_CURSO', 'GRAU', 'TURNO', 'MOD_CONCORRENCIA'];
const columnsToRemove = [
    'ANO', 'EDICAO', 'ETAPA', 'DS_ETAPA', 'CODIGO_IES', 'UF_IES', 'CODIGO_CAMPUS', 'CODIGO_CURSO',
    'DS_PERIODICIDADE', 'TP_COTA', 'QT_VAGAS_CONCORRENCIA', 'TIPO_MOD_CONCORRENCIA', 'PERCENTUAL_BONUS',
    'NOTA_MINIMA_L', 'NOTA_MINIMA_CH', 'NOTA_MINIMA_CN', 'NOTA_MINIMA_M', 'NOTA_MINIMA_R',
    'MEDIA_MINIMA', 'CPF', 'INSCRICAO_ENEM', 'INSCRITO', 'SEXO', 'DATA_NASCIMENTO',
    'UF_CANDIDATO', 'MUNICIPIO_CANDIDATO', 'OPCAO', 'NOTA_L', 'NOTA_CH', 'NOTA_CN',
    'NOTA_M', 'NOTA_R', 'NOTA_L_COM_PESO', 'NOTA_CH_COM_PESO', 'NOTA_CN_COM_PESO',
    'NOTA_M_COM_PESO', 'NOTA_R_COM_PESO', 'NOTA_CANDIDATO', 'CLASSIFICACAO',
    'APROVADO', 'MATRICULA'
];

const readStream = fs.createReadStream(inputFile, { encoding: 'utf8' });
const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity
});

let headers;
const dataRows = [];
const seenValues = new Set();

const removerAcentosESimbolos = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const processValue = (value) => {
    if (value === null || value === undefined) return '';
    // Remove accents and special characters
    return removerAcentosESimbolos(value.trim());
};

rl.on('line', (line) => {
    if (!headers) {
        headers = line.split('|');
        headers = headers.filter(header => !columnsToRemove.includes(header));
    } else {
        const data = line.split('|');
        const uniqueKey = uniqueColumns.map(col => processValue(data[headers.indexOf(col)])).join('|');

        if (!seenValues.has(uniqueKey)) {
            seenValues.add(uniqueKey);
            const filteredData = headers.reduce((acc, header, index) => {
                if (!columnsToRemove.includes(header)) {
                    // Convert specific fields to numbers
                    if (['PESO_L', 'PESO_CH', 'PESO_CN', 'PESO_M', 'PESO_R', 'NOTA_CORTE'].includes(header)) {
                        acc[header] = parseFloat(processValue(data[index]).replace(',', '.')) || 0;
                    } else {
                        acc[header] = processValue(data[index]);
                    }
                }
                return acc;
            }, {});

            dataRows.push(filteredData);
        }
    }
});

rl.on('close', () => {
    if (headers.includes('NOTA_CORTE')) {
        dataRows.sort((a, b) => a['NOTA_CORTE'] - b['NOTA_CORTE']);
    }
    
    fs.writeFileSync(outputFile, JSON.stringify(dataRows, null, 2), 'utf8');
    console.log(`Processamento concluído. Arquivo de saída gerado: ${outputFile}`);
});
