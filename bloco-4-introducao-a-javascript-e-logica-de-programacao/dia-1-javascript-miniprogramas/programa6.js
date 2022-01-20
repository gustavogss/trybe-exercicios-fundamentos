/**
 * PEÇA DE XADREZ
 */
let pecaXadrez = "Bispo";
switch (pecaXadrez) {
  case "Rei":
    console.log(
      "Pode mover-se em qualquer direção, porém apenas uma casa por vez"
    );
    break;
  case "Dama":
    console.log(
      "Pode mover-se em qualquer direção - vertical, horizontal e diagonal - quantas casas quiser, desde que estejam livres."
    );
    break;
  case "Torre":
    console.log(
      "Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser"
    );
    break;
  case "Bispo":
    console.log("Move-se na diagonal, quantas casas quiser");
    break;
  case "Cavalo":
    console.log("Se move em L");
    break;
  case "Peão":
    console.log(
      "Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas"
    );
    break;
  default:
    console.log("Essa peça não existe no Jogo Xadrez");
}
