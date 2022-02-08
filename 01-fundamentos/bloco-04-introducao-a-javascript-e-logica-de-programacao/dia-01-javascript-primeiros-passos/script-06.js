let pecaXadrex = "Bispo";
let pecaXadrezPadronizacao = pecaXadrex.toLowerCase(pecaXadrex);
let pecaXadrezUniforme = pecaXadrezPadronizacao[0].toUpperCase()+pecaXadrezPadronizacao.substring(1);

// Informa os movimentos da peça proveniente do jogo de Xadrez

switch (pecaXadrezUniforme){
    case "Rei":
        console.log(pecaXadrezUniforme, "= Move em qualquer direção (vertical, horizontal e diagonal), uma casa por vez");
        break;
    case "Rainha":
        console.log(pecaXadrezUniforme, "= Move em qualquer direção (vertical, horizontal e diagonal), porém quantas casa quiser");
        break;
    case "Torre":
        console.log(pecaXadrezUniforme, "= Move linha reta (vertical e horizontal), quantas casas quiser");
        break;
    case "Bispo":
        console.log(pecaXadrezUniforme, "= Move na diagnoal, quantas casas quiser");
        break;
    case "Cavalo":
        console.log(pecaXadrezUniforme, "= Única peça que pode saltar sobre as demais, movimenta em formato de L");
        break;
    case "Peão":
        console.log(pecaXadrezUniforme, "= Move sempre uma casa a frente, exceto no primeiro movimento que pode mover-se duas casas. Não pode retroceder e ataca na diagonal");
        break;
    case "Peao":
        console.log("Peão = Move sempre uma casa a frente, exceto no primeiro movimento que pode mover-se duas casas. Não pode retroceder e ataca na diagonal");
        break;  
    default:
        console.log(pecaXadrezUniforme, "= Essa peça não faz parte do jogo de Xadrez");
}