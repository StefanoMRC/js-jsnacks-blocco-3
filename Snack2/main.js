// Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.



let i=0
let N=parseInt(prompt("quanti array vuoi creare?")) 

 while (i<N){
     let array=[]
    for(y=0; y<10; y++){
        array.push(Math.floor(Math.random() * 100 +1))
        console.log(array)
    }
    document.getElementById("cont").innerHTML+=`<div>${array}</div>`
    i++
};