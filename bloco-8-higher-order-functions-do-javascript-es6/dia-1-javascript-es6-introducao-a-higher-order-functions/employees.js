const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Gerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const createPerson = (name) => {
    return {
        fullName: name,
        email: `${name}@betrybe.com`
  }
};
const employes = newEmployees(createPerson);
console.log(employes);

