let porcentajeDescuento = 0;
let cantidadMillas = prompt('Dame la cantidad de millas');

if(cantidadMillas > 30000) {
    porcentajeDescuento = 20;
    alert(`tienes undescuento del ${porcentajeDescuento}`)
} else if (cantidadMillas > 5000) {
    porcentajeDescuento = 10;
    alert(`tienes undescuento del ${porcentajeDescuento}`)
} else {
    porcentajeDescuento = 0;
    alert(`tienes undescuento del ${porcentajeDescuento}`)
}

