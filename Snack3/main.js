// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

let numeri=[]
let somma=0
let i=0
while (i<5) {
    let num=parseInt(prompt("inserisci un numero"))
    numeri.push(num)
    somma+=num
    i++
}
document.getElementById("contArray").innerHTML=`i numeri sono: ${numeri}`
document.getElementById("contSomma").innerHTML=`la somma è: ${somma}`