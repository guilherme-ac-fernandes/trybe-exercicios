let nota = 99;

// Conversão da nota da avaliação de números para letras

if (nota > 100){
    console.log("ERRO - Essa nota excede a faixa de avaliação");
}
else if (nota >= 90){
    console.log("Sua nota foi A. Parabéns");
}
else if (nota >= 80 && nota <90){
    console.log("Sua nota foi B. Parabéns, mas esforce mais um pouco");
}
else if (nota >= 70 && nota <80){
    console.log("Sua nota foi C. Muito Bom, mas estudar vai ajudar nessa nota");
}
else if (nota >= 60 && nota <70){
    console.log("Sua nota foi D. Bom, está acima da média");
}
else if (nota >= 50 && nota <60){
    console.log("Sua nota foi E. Regular, necessita de monitorias e muito estudo");
}
else if (nota >= 0 && nota <50){
    console.log("Sua nota foi F. Insuficiente, favor entrar em contato com o professor e buscar ajuda para melhorar");
}
else{
    console.log("ERRO - Essa nota está negativa");
}