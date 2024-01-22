console.log('Bienvenido');

let nombre = 'Diego';
console.log(`Hola ${nombre}`);
alert(`Hola, ${nombre}`);
let respuesta = prompt('Cual es el lenguaje de programacion que mas te gusta?');
console.log(respuesta);
let valor1 = 1 
let valor2 = 2
let resultado = valor1 + valor2;
console.log(` La suma de ${valor1} y ${valor2} es igual a ${resultado}`);
console.log(` La diferencia entre ${valor1} y ${valor2} es igual a ${valor1 - valor2}`);

let edad = prompt('Por favor ingresa tu edad');
if(edad >= 18){
    console.log('La persona es mayor de edad');
} else console.log('La persona es menor de edad');

let numero = prompt('Por favor ingresa un numero')
if(numero > 0){
    console.log('El numero es positivi');
} else if(numero < 0){
    console.log('El numero es negativo');
} else console.log('El numero es neutro');

let incremental = 1;
while(incremental <= 10){
    console.log(incremental);
    incremental ++;
}

let nota = 10;
if(nota >= 7){
    console.log('aprobado');
} else console.log('reprobado')

let random = Math.random();
console.log(random);

let random2 = Math.floor(Math.random()*10)+1;
console.log(random2);

let random3 = Math.floor(Math.random()*1000)+1;
console.log(random3);