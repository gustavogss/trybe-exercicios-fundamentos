const wakeUp = () => console.log('Acordando!!');

const eat = () => console.log('Bora tomar café!!');

const sleep =() => console.log('Partiu dormir!!');

const doingThings = (callback) =>{
    const result = callback();   
}

// Ao chamar a função doingThings:
doingThings(wakeUp);
doingThings(eat);
doingThings(sleep);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!