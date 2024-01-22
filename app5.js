let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let soma = 0;
let contador = 0;

while(contador < qtdNumeros){
    let numero = parseInt(prompt('Digite el numero:'));
    soma += numero;
    contador = contador + 1;
}

let promedio = soma / qtdNumeros;

alert(`El promedio de tus numeros es ${promedio.toFixed(2)}`)
console.log(promedio);
