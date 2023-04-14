    ////////////////Potência////////////////////
    function quadrado (valor) {
        return valor * valor 
    }

    const quadradoDeDez = quadrado(10);
        console.log(quadradoDeDez);


//////////////////////////////Juros e Acrescimos////////////////////////////////////////

    function incrementarJuros(valor,percentualJuros) { 
        const valordeAcrescimo = (percentualJuros/100 ) * valor;  //Retorna o juros 
        return valor + valordeAcrescimo
    }

    console.log(incrementarJuros(100,15))
    console.log(incrementarJuros(300,30))
