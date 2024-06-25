function verificaMaiorNumero(){
    let arrayNumeros = [1,15,140,16,19];
    let maiorNumero = arrayNumeros[0];

    for(let i = 0; i < arrayNumeros.length; i++){
        if(arrayNumeros[i] > maiorNumero){
            maiorNumero = arrayNumeros[i];
        }
    }
    console.log(`O maior número do array [${arrayNumeros}] é: ${maiorNumero}`);
}
verificaMaiorNumero();