let sum = 0;
let valore = 0;
/*
for(let i = 0; i < 5;i++){
    const user = Number(prompt('inserisci il tuo numero'));
    console.log(user);

    sum = sum + user;
}

console.log(sum);
*/

while(valore < 5){
    const user = Number(prompt('inserisci il tuo numero'));
    console.log(user);

    sum = sum + user;

    valore++
}

console.log(sum);