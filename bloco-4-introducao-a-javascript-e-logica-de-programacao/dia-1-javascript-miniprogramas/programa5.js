/**
 * ÂNGULOS INTERNOS DE UM TRIÂNGULO
 */
// EXERCICIO A CORRIGIR

let angulo1 = 0;
let angulo2 = 100;
let angulo3 = 30;
let triangulo = angulo1 + angulo2 + angulo3;
let anguloValido = angulo1 < 0 || angulo2 < 0 || angulo3 < 0;

if (triangulo === 180) {
    console.log(true);
} else if (anguloValido = true){
    console.log("ERROR: Ângulo Inválido");
        
    } else{
        console.log(false);}
