console.log(sessionStorage.length) // não possui nada salvo, retorno 0
sessionStorage.setItem("firstname", "Adam") //salva uma entrada "firstname"  = "Adam"
sessionStorage.setItem("lastname", "Smith") //salva uma entrada com "lastname" = "Smith"
console.log(sessionStorage.getItem("lastname")) // retorna o valor "Smith"
console.log(sessionStorage.length) // possui duas entradas: 2
sessionStorage.removeItem("lastname") // remove a entrada  = "lastname"
console.log(sessionStorage.length) // possui uma entrada: 1
sessionStorage.clear() // limpa todas as entradas salvas em sessionStorage
console.log(sessionStorage.length) // não possui nada salvo, retorna: 0

storage.setItem("trybe", JSON.stringify(organization))
let org = JSON.parse(storage.getItem("trybe"))
console.log(org) // { name: "trybe", since: 2019 }

let classes = ["2019/set", "2019/oct"]
storage.setItem("classes", JSON.stringify(classes))
let cls = JSON.parse(storage.getItem("classes"))
console.log(cls) // ["2019/set", "2019/oct"]