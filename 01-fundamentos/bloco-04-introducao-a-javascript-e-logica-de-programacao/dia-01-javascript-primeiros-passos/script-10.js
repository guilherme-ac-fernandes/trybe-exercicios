const custoProduto = 30;
const valorVenda = 50;
let numeroProdutosVendidos = 1000;
const imposto = 20;

// Calculo do Lucro de uma empresa (foma bem simplificada)


if (custoProduto < 0) {
    console.log("ERRO - Custo do produto inválido")
}
else if (valorVenda < 0){
    console.log("ERRO - Valor de vanda inválido")
}
else if (numeroProdutosVendidos < 0){
    console.log("ERRO - Número de produtos vendidos inválido")
}
else if (imposto < 0){
    console.log("ERRO - Percentual de imposto inválido")
}
else{
    console.log("Observação: Valor são válidos")

    let impostoSobreOCusto = 30 * imposto/100;
    console.log("Imposto sobre o produto = R$", impostoSobreOCusto, "reais")

    let valorCustoTotal = custoProduto + impostoSobreOCusto;
    console.log("Valor total do produto = R$", valorCustoTotal, "reais")

    let lucro = valorVenda - valorCustoTotal;
    console.log("Lucro obtido por unidade = R$", lucro, "reais")

    let lucroTotal = lucro * numeroProdutosVendidos;
    console.log("Lucro total obtido = R$", lucroTotal, "reais")
}