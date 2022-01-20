/**
 * pirâmide com n asteriscos de base que seja vazia no meio
 */



/**
 * número definido numa variável é primo ou não.
 */
let numero = 12;

for (let i = 1; i < 2; i += 1) {
  let ehPrimo = true;
  for (let divisor = 2; divisor < numero; divisor += 1) {
    if (numero % divisor === 0) {
      ehPrimo = false;
      break;
    }
  }
  if (ehPrimo) {
    console.log("O número " + numero + " é primo");
  } else {
    console.log("O número " + numero + " não é primo");
  }
}
