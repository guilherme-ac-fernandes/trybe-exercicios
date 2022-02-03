let pecaXadrex = "Cavalo";

// Informa os movimentos da peça proveniente do jogo de Xadrez

switch(pecaXadrex){
    case "Rei":
        console.log(pecaXadrex, "= Move em qualquer direção (vertical, horizontal e diagonal), uma casa por vez");
        break;
    case "Rainha":
        console.log(pecaXadrex, "= Move em qualquer direção (vertical, horizontal e diagonal), porém quantas casa quiser");
        break;
    case "Torre":
        console.log(pecaXadrex, "= Move linha reta (vertical e horizontal), quantas casas quiser");
        break;
    case "Bispo":
        console.log(pecaXadrex, "= Move na diagnoal, quantas casas quiser");
        break;
    case "Cavalo":
        console.log(pecaXadrex, "= Única peça que pode saltar sobre as demais, movimenta em formato de L");
        break;
    case "Peão":
        console.log(pecaXadrex, "= Move sempre uma casa a frente, exceto no primeiro movimento que pode mover-se duas casas. Não pode retroceder e ataca na diagonal");
        break;
    default:
        console.log(pecaXadrex, "= Essa peça não faz parte do jogo de Xadrez");
}