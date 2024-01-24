let header = document.querySelector('h1');
header.innerHTML = 'Hora del desafio'

function consoledisplay () {
    console.log('El boton fue clicado')
}

function promptfunction(){
    let ciudad = prompt('Dime una ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acorde de ti`)
}

function alertfunction(){
    alert('Yo amo JavaScript');
}

function suma(){
    let numero1 = parseInt(prompt('Dame el primer numero de una suma'));
    let numero2 = parseInt(prompt('Dame el segundo numero de una suma'));
    alert(`El resultado de la suma de ${numero1} + ${numero2} es igual a ${numero1 + numero2}`);
}