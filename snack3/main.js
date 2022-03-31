const name_list = ['paolo','marco','luigi','matteo','chiara','luisa']
const surname_list = ['cari','totti','carro','verdi','aouane','berna']

function myFun(){
    randomN = name_list[Math.floor(Math.random() * name_list.length)];
    randomS = surname_list[Math.floor(Math.random() * surname_list.length)];
    console.log(`nome falso = ${randomN} ${randomS}`);
}