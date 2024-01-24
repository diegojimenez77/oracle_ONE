let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto === numeroDeUsuario){
        alert('feliciades adivinaste el numero secreto')
    } else (alert('lo siento no adivinaste el numero secreto, vuelve a intentar'))
}
function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Indica un numero del 1 al 10')