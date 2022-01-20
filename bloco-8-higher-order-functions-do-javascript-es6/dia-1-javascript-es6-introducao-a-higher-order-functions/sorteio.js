const numberSort = (myNumber, number) => myNumber === number;

const checkSort = (myNumber, callback) =>{
const number = Math.floor(Math.random() * 5 ) + 1;
if(callback(myNumber, number)){
    return `O número sorteado é: ${number}. Parabéns você ganhou`;
} return `O número sorteado é: ${number}. Tente novamente`;
    
}; console.log(checkSort(4, numberSort));
