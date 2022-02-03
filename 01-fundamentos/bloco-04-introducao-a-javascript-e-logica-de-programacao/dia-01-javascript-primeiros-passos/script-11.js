const salarioBruto = 3000;
let aliquotaINSS = 0;
let aliquotaIR = 0;
let impostoIR = 0;
let salarioAposINSS = 0;
let salarioLiquido = 0;

// Cálculo do Salário líquido (descontando INSS e IR)

// Avaliando INSS
if (salarioBruto <= 1556.94){
    aliquotaINSS = 8;
}
else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    aliquotaINSS = 9;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    aliquotaINSS = 11;
}
else{
    aliquotaINSS = 570.88;
}


// Cálculo do desconto do INSS sobre o Salário
if (salarioBruto > 5189.82){
    console.log("Alíquota máxima = R$", aliquotaINSS, "reais");
    
    salarioAposINSS = salarioBruto - aliquotaINSS;
    console.log("Salário após descontro do INSS = R$", salarioAposINSS, "reais");

}
else{
    console.log("Alíquota do INSS =", aliquotaINSS, "%");
    salarioAposINSS = salarioBruto - salarioBruto*(aliquotaINSS/100);
    console.log("Salário após descontro do INSS = R$", salarioAposINSS, "reais");
}


// Avaliando IR
if (salarioAposINSS <= 1903.98){
    salarioLiquido = salarioAposINSS;
}
else if(salarioAposINSS >= 1903.99 && salarioAposINSS <= 2826.65){
    aliquotaIR = 7.5;
    impostoIR = 142.80;
}
else if(salarioAposINSS >= 2826.66 && salarioAposINSS <= 3751.05){
    aliquotaIR = 15;
    impostoIR = 354.80;
}
else if(salarioAposINSS >= 3751.06 && salarioAposINSS <= 4664.68){
    aliquotaIR = 22.5;
    impostoIR = 636.13;
}
else{
    aliquotaIR = 27.5;
    impostoIR = 869.36;
}

console.log("Alíquota do IR =", aliquotaIR, "%");
console.log("Valor do Imposto a deduzir = R$", impostoIR, "reais");


// Cálculo do Salário Líquido
if (salarioAposINSS <= 1903.98){
    console.log("Salário Líquido = R$", salarioLiquido, "reais");
}
else{
    salarioLiquido = salarioAposINSS - (salarioAposINSS*(aliquotaIR/100) - impostoIR);
    console.log("Salário Líquido = R$", salarioLiquido, "reais");
}

