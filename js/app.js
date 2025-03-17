let listaAmigos = [];


function adicionarAmigo() {

    let nomeQueTaSendoDigitadoNaTela = document.querySelector('input').value;
    if (nomeQueTaSendoDigitadoNaTela === "") {
        alert('Insira um nome para inciarmos.');

    } else if (listaAmigos.includes(nomeQueTaSendoDigitadoNaTela)) {
        alert('O nome inserido já foi utilizado! Por favor, coloque um nome diferente ou acrescente um sobrenome.');
    } else {
        listaAmigos.push(nomeQueTaSendoDigitadoNaTela);
        document.querySelector('input').value = "";
        exibirAmigos();
    }
}

function exibirAmigos() {

    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = "";

    listaAmigos.forEach(nomeAmigo => {
        let item = document.createElement('li');
        item.textContent = nomeAmigo;
        listaHTML.appendChild(item);
    });
}

exibirAmigos();

function sortearAmigo() {
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let resultadoHTML = document.querySelector('#resultado');
    resultadoHTML.innerHTML = "";

    let item = document.createElement('li');
    item.textContent = "O seu amigo secreto, é: " + listaAmigos[indiceSorteado];
    resultadoHTML.appendChild(item);

}

