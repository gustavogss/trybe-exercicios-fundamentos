/**
 * calcule e imprima a média aritmética do array;
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
for (let i = 0; i < numbers.length; i += 1) {
media += numbers[i]/numbers.length;
}
console.log(media.toFixed(2));