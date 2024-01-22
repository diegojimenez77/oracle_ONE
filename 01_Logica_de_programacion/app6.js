let contador = 1 

while ( contador < 10){
    alert(`El contador va en ${contador}`);
    contador ++;
}

let contador2 = contador;
while( contador2 >= 0){
    alert(`El contador va en ${contador2}`);
    contador2 --;
}

let regresiva = prompt(`Dame un numero para cuenta regresiva`);

while (regresiva >= 0){
    alert(`Cuenta regresiva en ${regresiva}`);
    console.log(regresiva);
    regresiva --;
}

let progresiva = prompt(`Dame un numero para cuenta progresiva`);
let contador3 = 0;
while ( contador3 <= progresiva ){
    alert(`Cuenta progresiva en ${contador3}`);
    console.log(contador3);
    contador3 ++;
}
