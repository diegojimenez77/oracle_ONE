let numeroSecreto = 0;
let contador = 0;

function asignarTextoElemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto === numeroDeUsuario){
        // alert('feliciades adivinaste el numero secreto')
        asignarTextoElemento('p', `Felicidades, adivinaste en ${contador} ${(contador === 1)? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es menor');
        contador++;
        limpiarCaja();
    } else if(numeroDeUsuario < numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es mayor');
        contador++;
        limpiarCaja();
    };
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    contador = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

