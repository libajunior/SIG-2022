const moment = require('moment');
const random = require('random-number');

const cidades = [
    { nome: "Francisco Beltrão", populacao: 91093 },
    { nome: "Pato Branco", populacao: 82881 },
    { nome: "Dois Vizinhos", populacao: 40641 },
    { nome: "Coronel Vivida", populacao: 20932 },
    { nome: "Santo Antônio do Sudoeste", populacao: 20031 },
    { nome: "Chopinzinho", populacao: 19327 },
    { nome: "Capanema", populacao: 19152 },
    { nome: "Ampére", populacao: 19049 },
    { nome: "Realeza", populacao: 16922 },
    { nome: "Mangueirinha", populacao: 16868 },
    { nome: "Clevelândia", populacao: 16789 },
    { nome: "Salto do Lontra", populacao: 14797 },
    { nome: "Santa Izabel do Oeste", populacao: 14659 },
    { nome: "Marmeleiro", populacao: 14320 },
    { nome: "Planalto", populacao: 13620 },
    { nome: "Itapejara d'Oeste", populacao: 11964 },
    { nome: "Nova Prata do Iguaçu", populacao: 10548 },
    { nome: "São João", populacao: 10241 },
    { nome: "Barracão", populacao: 10219 },
    { nome: "São Jorge d'Oeste", populacao: 9050 },
    { nome: "Verê", populacao: 7340 },
    { nome: "Renascença", populacao: 6838 },
    { nome: "Vitorino", populacao: 6827 },
    { nome: "Mariópolis", populacao: 6581 },
    { nome: "Enéas Marques", populacao: 5996 },
    { nome: "Saudade do Iguaçu", populacao: 5427 },
    { nome: "Pranchita", populacao: 5157 },
    { nome: "Nova Esperança do Sudoeste", populacao: 5046 },
    { nome: "Flor da Serra do Sul", populacao: 4624 },
    { nome: "Cruzeiro do Iguaçu", populacao: 4263 },
    { nome: "Salgado Filho", populacao: 3580 },
    { nome: "Bom Jesus do Sul", populacao: 3541 },
    { nome: "Bom Sucesso do Sul", populacao: 3237 },
    { nome: "Sulina", populacao: 2981 },
    { nome: "Manfrinópolis", populacao: 2605 },
    { nome: "Boa Esperança do Iguaçu", populacao: 2503 },
]

//Imprime o cabeçalho
console.log('data_registro;cidade;confirmados;suspeitos;obitos')

//Percorre as cidades
cidades.forEach(cidade => {

    var hoje = new Date()
    var data = moment(new Date('2020/01/20'))
    

    while (data <= hoje) {

        //Confirmados: de 0,5% até 2% da população (sortear)
        var confirmados = Math.round(cidade.populacao * (random({min: 0.05, max: 0.2})/100))

        //Suspeitos: de 20% a 70% acima dos confirmados (sortear)
        multi = random({min: 1.2, max: 1.7})
        var suspeitos = Math.round(confirmados * random({min: 1.2, max: 1.7}))

        //Mortos: de 1% a 3% dos casos confirmados (sortear)
        var obitos = Math.round(confirmados * random({min: 0.01, max: 0.03}))

        console.log(`${data.format('DD-MM-YYYY')};${cidade.nome};${confirmados};${suspeitos};${obitos}`)

        data = moment(data).add(1, 'day')
    }
});