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

function indiceMasaCorporal(){
    let peso = parseInt(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let imc = peso/(altura * altura);
    console.log(`Tu IMC es ${imc}`);
}

function calculaFactorial(){
    let factorial = parseInt(document.getElementById('factorial').value);
    let resultadoFactorial = 1;
    for( i=1; i<=factorial; i++){
        resultadoFactorial = resultadoFactorial * i;
    };
    console.log(resultadoFactorial);
}

function convierteDolares(){
    let pesos = parseFloat(document.getElementById('pesos').value);
    let dolares = pesos / 17.19;
    console.log(dolares);
}

function calculaAreaPerimetro(){
    let altura = parseFloat(document.getElementById('alto').value);
    let ancho = parseFloat(document.getElementById('ancho').value);

    let area = altura * ancho;
    let perimetro = altura + ancho + altura + ancho;

    console.log(`El area es ${area} y el perimetro es ${perimetro}`);
}

function calculaAreaPerimetroCircular(){
    let radio = parseFloat(document.getElementById('radio').value);
    let areaCircular = 3.14 * (radio * radio);
    let perimetroCircular = 3.14 * (radio + radio);

    console.log(`El area ciruclar es ${areaCircular} y el perimetro es ${perimetroCircular}`);
}

function tablaMultiplicar(){
    let numeroDado = parseInt(document.getElementById('numeroDado').value);
    for ( i = 1; i <= 10 ; i++){
        console.log(` ${numeroDado} x ${i} = ${numeroDado*i}`);
    }
}
