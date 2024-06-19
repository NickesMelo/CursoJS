function saudacao(nome, cumprimento = 'Olá'){
    return `${cumprimento}, ${nome}!`;
}
console.log(saudacao('Maria'));
console.log(saudacao("Pedro", "Bom dia"));
console.log(saudacao("Tudo Bem" ));