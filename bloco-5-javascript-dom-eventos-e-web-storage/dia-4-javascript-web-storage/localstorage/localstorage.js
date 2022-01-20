console.log(localStorage.length) // não possui nada retorna: 0
localStorage.setItem("firstname", "Adam") //salva uma entrada "firstname" de valor = "Adam"
localStorage.setItem("lastname", "Smith") //salva uma entrada = "lastname" de valor = "Smith"
console.log(localStorage.getItem("lastname")) // retorna o valor "Smith"
console.log(localStorage.length) // retorna o número de entradas 2
localStorage.removeItem("lastname") // remove a entrada de valor = "lastname"
console.log(localStorage.length) // retorna o tamanho atual da entrada : 1
localStorage.clear() // limpa todas as entradas salvas em localStorage
console.log(localStorage.length) // não possui nada salvo, então o tamanho de entradas: 0

