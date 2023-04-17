    class Carro { 
        marca;
        cor;
        autonomia; //Km por Litro 
            
        constructor (marca,cor,autonomia) {
            this.marca = marca;
            this.cor = cor;
            this.autonomia = autonomia;
        }
                //Função Utilizada para calcular a autonomia e o preço do combustível
        calcularGastoPercurso(distanciaKm, precoCombustivel) {
            return (distanciaKm/this.autonomia) * precoCombustivel;
        }
    }

                        //Declaração de Novos Carros, com parametros de marca,cor e autonomia 
        const fordKa = new Carro ('ford','branco',10);
        const Uno = new Carro ('Fiat','Preto',15);

                            //Gasto de Combustível, como parametros de Distância e Preço do Combustível 
    console.log("O valor total de gasolina gasto nesse percurso foid de " + "R$" + fordKa.calcularGastoPercurso(700,5));
    console.log("O valor total de gasolina gasto nesse percurso foid de " + "R$" + Uno.calcularGastoPercurso(100,2));