const precoEt = 3.5
const precoGasolina = 4.5
const kmPorLitros = 10 
const distanciaEmKm = 300
const tipoCombustivel = 'Gasolina'

const litrosConsumidos = (distanciaEmKm/kmPorLitros);

if (tipoCombustivel === 'Etanol') {
    const GastoTotal = litrosConsumidos * precoEt
    console.log(GastoTotal.toFixed(2));
}

else {
    const GastolTotal = litrosConsumidos * precoGasolina
    console.log(GastolTotal.toFixed(2));
}



