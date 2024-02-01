/*try {
    //console.log(a); // erro
    console.log('Manipulei o aquivo e gerou erro');
    console.log('Fechei o arquivo');

    try {
        console.log(b);
    } catch (e) {
        console.log('Deu erro no segundo try');
    } finally {
        console.log('Também sou FINALLY e sou sempre executado')
    }

} catch (e) {
    console.log('Tratando o erro');
} finally{
    console.log('FiNALLY: Eu sempre sou executado');
}*/

function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false   
    });
}
try {
    data = new Date('01-01-1970 12:58:15');
    const hora = retornaHora(date);
    console.log(hora);
} catch (e) {
    // tratar erro
} finally {
    console.log('Finally sendo executado sempre');
}

