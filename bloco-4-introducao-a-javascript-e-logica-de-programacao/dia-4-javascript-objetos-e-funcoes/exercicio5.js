let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  let info2 = {
    personagem: ' e Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for(keys in info){
    if(keys != 'recorrente'){
        console.log(info[keys] + info2[keys]);
    }else{
        console.log('Ambos recorrentes');
    }
}