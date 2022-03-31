const num = [2,3,6,10,9,3,2];
let disp = 0;
console.log(`valore iniziale ${disp}`);

function sumN(){
    disp = 0;

    for(let i = 0; i < num.length; i++){
        if((num[i] % 2) != 0){
            unit = num[i];
            disp = disp + unit;
        } 
    }
    console.log(disp);
}