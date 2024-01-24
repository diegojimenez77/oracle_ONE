function muestraHolaMundo(){
    console.log('Hola Mundo');
}

function saludaNombre(){
    let nombre = document.getElementById('nombreUsuario').value;
    console.log(`Hola ${nombre}`);
}

function regresaDoble(){
    let numero = parseInt(document.getElementById('numeroUsuario').value);
    console.log(numero * 2);
}

function calculaPromedio(){
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    let numero3 = parseInt(document.getElementById('numero3').value);

    console.log((numero1 + numero2 + numero3)/3);
}

function calculaMayor(){
    let primero = parseInt(document.getElementById('numeroPrimero').value);
    let segundo = parseInt(document.getElementById('numeroSegundo').value);

    if(primero > segundo){
        console.log(primero);
    } else(console.log(segundo));
}

function regresaCuadrado(){
    let numeroCuadrado = parseInt(document.getElementById('numeroUsuario2').value);
    console.log(numeroCuadrado*numeroCuadrado);
}