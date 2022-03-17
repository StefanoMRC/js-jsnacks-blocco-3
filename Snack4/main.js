let nomi=["giorgio", "pino", "simone","marco", "pippo", "pluto", "gianni", "girolamo"]
let i=0
nomeTrovato=false

nomeCercato=prompt("dimmi il tuo nome")

while (i<nomi.length) {  
    if(nomeCercato==nomi[i]){
        nomeTrovato=true
    }
    i++
}
if(nomeTrovato==true){
    document.getElementById("cont").innerHTML=`Sei stato invitato`
}else{
    document.getElementById("cont").innerHTML=`Non ti vuole manco tua madre`
}