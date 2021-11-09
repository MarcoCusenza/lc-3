const nome = prompt("Inserisci il nome");
const sesso = prompt("Inserisci il tuo genere: F o M");

const ciao = document.getElementById("ciao");

if(sesso != "F" && sesso !="M"){
    alert("Non hai inserito un gender corretto");
}else if(sesso=="F"){
    ciao.classList.add("pink");
}else{
    ciao.classList.add("lightblue");
}

ciao.innerHTML = "ciao " + nome;