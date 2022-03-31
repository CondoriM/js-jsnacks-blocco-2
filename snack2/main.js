const pari = [];

let ind = Number(prompt('inserisci un numero'))

if((ind % 2)== 0){
    pari.push(ind);
    ind = 0;
}else{
    alert('il numero non è pari')
}
console.log(pari);
