let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (array[index] < array[secondIndex]) {
//         let position = array[index];
//         array[index] = array[secondIndex];
//         array[secondIndex] = position;
//       }
//     }
//   }

// Ordem crescente

for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] < numbers[j]) {
      let position = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
console.log(numbers);

// Ordem decrescente

for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j]) {
      let position = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
console.log(numbers);

// Cada valor do novo array deverá ser igual ao valor correspondente
//no array numbers multiplicado pelo seguinte.

//CORRIGIR

let array = [];

for (let i = 0; i < numbers.length - 1; i++) {
  array.push(numbers[i] * numbers[i + 1]);
}
array.push(numbers[numbers.length - 1] * 2);

console.log(array);
