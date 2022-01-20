// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Laranja', 'Mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Uva', 'Maça', 'Melância'];

const fruitSalad = (fruit, additional) =>  [...specialFruit, ...additionalItens];

console.log(fruitSalad(specialFruit, additionalItens));