/**
 * Pirâmide de asteriscos
 */
 let n = 5;

    for (let countLines = 1; countLines  <= n; countLines += 1) { 
        let space = "";
       
        for (let countColum = 1; countColum <= (2 * n - 1); countColum += 1) {

            if (countColum >= n + 1 - countLines && countColum <= n - 1 + countLines )
            {
                space += "*";
            } else{
                space += " "; 
            }
                    
        }
        console.log(space);
    }


//   *
//  ***
// *****

