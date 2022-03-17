// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
let array=[]
let somma=0

while (somma<50){
    let num=parseInt(prompt("inserisci un numero"))
    array.push(num)
    somma+=num
    
};
document.getElementById("contArray").innerHTML=array
document.getElementById("contSomma").innerHTML=somma



