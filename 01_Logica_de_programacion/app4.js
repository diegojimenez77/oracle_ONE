let respuesta = prompt('Dime el dia de la semana');

if (respuesta == 'sabado' || respuesta == 'domingo'){
alert('Buen fin de semana');
} else {alert('Buena semana')}

let numeroIngresado = prompt('Dame un numero ya sea positivio o negativo');
if(numeroIngresado > 0 ){
    alert('El numero que ingresaste es positivo')
} if(numeroIngresado < 0 ){
    alert('El numero que ingresaste es negativo')
} if(numeroIngresado == 0){
    alert('En numero que ingresaste no es positivo ni negativo')
}

let puntuacion = prompt('Ingresa tu puntaje del juego');
if (puntuacion == 100){
    alert('Felicidades, has ganado!');
} else alert('Intenta nuevamente para ganar');

let saldoCuenta = 10008000;
alert(`El saldo de tu cuenta es ${saldoCuenta}`);

let nombreIngresado = prompt('Ingresa tu numbre pro favor...')
alert(`Gracias por jugar este juego ${nombreIngresado}`);