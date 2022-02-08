const anguloA = 90;
const anguloB = 30;
const anguloC = 60;

/* Verificando triângulos válidos,
onde soma dos ângulos deve ser igual a 180 graus */

let triangulo = anguloA + anguloB + anguloC;
if (anguloA > 0 && anguloB > 0 && anguloC > 0){
    if(triangulo === 180){
        console.log("É um triângulo válido");
    }
    else{
        console.log("Não é um triângulo válido");
    }
}
else{
    console.log("ERRO - Ângulos inválidos");
}
