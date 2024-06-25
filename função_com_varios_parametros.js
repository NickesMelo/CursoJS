//Função de somar

function soma(a, b){
    return a + b;
}
console.log(soma(2, 2));

//função de subtrair

function subtrair(a, b){
    return a - b;
}
console.log(subtrair(2, 5)); //leva em consideração o maior número sendo negativo o resultado
console.log(subtrair(5, 2));

//Função de multiplicar

function multiplicacao(a, b){
    return a * b;
}
//console.log(multiplicacao(2,3));
//console.log(multiplicacao(4, 12));
console.log("----------");

function criarMultiplicador(fator){
    return function(numero){
        return numero * fator;
    };
}
const dobrar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);
const quintriplicar = criarMultiplicador(5);

console.log(dobrar(5));
console.log(triplicar(5));
console.log(quintriplicar(5));

console.log("----------");


//Função de dividir

function dividir(a, b){
    return a / b;
}
console.log(dividir(3, 5));
console.log(dividir(4, 2));
console.log(dividir(10, 100));
