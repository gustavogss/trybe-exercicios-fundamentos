/**
 * Triangulo de asteriscos
 */
 let space='';
 let n = 5;

 for(let countLines=1; countLines<=n; countLines+=1){   
    for(var countColum=0; countColum<countLines; countColum+=1){
        space += '*';
    }
    console.log(space) }

    // *
    // ***
    // ******
    // **********
    // ***************