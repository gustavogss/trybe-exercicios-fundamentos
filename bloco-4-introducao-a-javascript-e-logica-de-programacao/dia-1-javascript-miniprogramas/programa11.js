/**
 * SALARIO LÍQUIDO
 */
// EXERCICIO A CORRIGIR

let salario_bruto = 3000.0;
let desconto_INSS;
let desconto_IR;
let total_descontado;
let salario_deduzido_INSS = salario_bruto - desconto_INSS;
let salario_liquido = salario_bruto - desconto_IR;

switch (salario_bruto) {
  case salario_bruto < 1556.94:
    desconto_INSS = (salario_bruto * 8) / 100;

    console.log(
      "Salário a receber com desconto do INSS: " + salario_deduzido_INSS
    );
    break;
  case salario_bruto >= 1556.95 && salario_bruto < 2594.92:
    desconto_INSS = (salario_bruto * 9) / 100;

    console.log(
      "Salário a receber com desconto do INSS: " + salario_deduzido_INSS
    );
    break;
  case salario_bruto >= 2594.93 && salario_bruto < 5189.82:
    desconto_INSS = (salario_bruto * 11) / 100;
    console.log(
      "Salário a receber com desconto do INSS: " + salario_deduzido_INSS
    );
    break;
  default:
    desconto_INSS = 570.88;
    console.log(
      "Salário a receber com desconto do INSS: " + salario_deduzido_INSS
    );
}

switch (salario_deduzido_INSS) {
  case salario_deduzido_INSS < 1903.98:
    desconto_IR = 0;
    console.log("Isento de Imposto de Renda");
    break;
  case salario_deduzido_INSS >= 1903.99 && salario_deduzido_INSS < 2826.65:
    desconto_IR = (salario_bruto * 9) / 100 - 142.8;
    console.log("Salário Líquido a receber: " + salario_liquido);
    break;
  case salario_deduzido_INSS >= 2826.66 && salario_deduzido_INSS < 3751.05:
    desconto_IR = (salario_bruto * 15) / 100 + 354.8;

    console.log("Salário Líquido a receber: " + salario_liquido);
    break;
  case salario_deduzido_INSS >= 3751.06 && salario_deduzido_INSS < 4664.68:
    desconto_INSS = (salario_bruto * 225) / 100;
    console.log("Salário Líquido a receber: " + salario_liquido);
    break;
  default:
    desconto_INSS = 570.88;
    console.log("Salário Líquido a receber: " + salario_liquido);
}
