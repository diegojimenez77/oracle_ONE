let maximoNumero = prompt('Por favor ingresa el numero maximo entre 1 y tu maximo para el juego');
let numeroSecreto = Math.floor(Math.random()*maximoNumero)+1;
let numeroUsuario = 0;
let intentos = 1;
// let palabraIntento = 'intento';
let maximoIntentos = 3;
console.log(numeroSecreto);

while( numeroUsuario != numeroSecreto){   
    // alert('Hola Mundo'); 
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${maximoNumero} por favor:`));
    // variables, const, let y var
    // por ahora usaremos let
    // camel case - camelCase
    // cuando trabajamos con declaracion de variables se declara del lado izquierdo
    // del lado derecho se coloca le valor que se va a atribuir, puede venir de un metodo u otra variable.
    // el uso de variables es donde se almacenan lod valorer
    // son variables porque van a variar dentro de la operacion del programa.
    // utilizar nomenclaturas que sean explicativas para la delcaracion de variables.

    console.log(typeof(numeroUsuario)); 
    // al no usar las comillas, JavaScript sabe que se esta llamando a una variable.
    // al usar las comillas, JavaScript sabe que se quiere imprimir texto.
    // Es como si le dijea traeme el valor de la siguiente variable.

    // como llegar a la consola, con los 3 puntos del navegador, mas herramientas, herramienas para desarrolladores.
    // o con F12, Ctrl+Shift+I
    // Este codigo realiza la comparacion
    if(numeroUsuario == numeroSecreto){
    //Acertamos, fue verdadera la condicion
        alert(`Felicidades, Acertaste el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
    } else {
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        // intentos = intentos + 1;
        // intentos+=1;
        intentos++;
        // palabraIntento = 'intentos'
        if(intentos > maximoIntentos){
            alert(`Llegaste al numero maximo de ${maximoIntentos} intentos`)
            break;
        }
    //Fallamos, la condicion NO fue verdadera.
        alert('Lo siento, no acertaste el numero');
    }
    // el = es el operador de asignacion.
    // el == hace una comparacion = loose equality, cambia los tipos de las variables para poderlas comparar.
    // el === hace una comparacion estricta = strict equality, no cambia los tipos de las variables. 
    // las palabras reservadas de JavaScript estan en rojo

    // las llaves {} es para los bloques de codigo

    // Template literals o template strings
}
