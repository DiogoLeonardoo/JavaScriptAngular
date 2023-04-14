function aplicarDesconto(valor,desconto) {
    return aplicarDesconto = valor - (valor * (desconto/100));
}

function aplicarTaxa(valor,taxa) {
    return aplicarTaxa = valor + (valor *(taxa/100));
}

const precoEtiqueta = 100;
const formaDePagamento = 13;

if (formaDePagamento === 1) {
 console.log( " O seu pagamento foi em PIX, por isso recebeu 10% de desconto e ficou em R$" + aplicarDesconto(precoEtiqueta,10));
} else if (formaDePagamento === 2) {
    console.log(" O seu pagamento foi no dinheiro, por isso recebeu 15% de desconto e ficou em R$" + aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log("O seu pagamento foi no cartão, por isso a compra recebeu um acrescimo de 5% e ficou em R$" + aplicarTaxa(precoEtiqueta,5));
} else {
    console.log("Você utilizou outro meio de pagamento portanto sua compra foi de R$ " + precoEtiqueta);
}


