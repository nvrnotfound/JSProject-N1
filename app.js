let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroRandom();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}
function exibirTitulo(){
exibirTexto("h1", "Jogo do número secreto");
exibirTexto("p", "Digite um número entre 1 e 10");
}

exibirTitulo();

function verificarChute() {
    let chute = document.querySelector("input").value;
    
    if(chute == numeroSecreto){
        exibirTexto("h1", "Parabéns!");
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTexto("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(chute > numeroSecreto){
            exibirTexto("h1", "Errou!");
            exibirTexto("p", `O número é menor que ${chute}`);
        } else{
            exibirTexto("h1", "Errou!");
            exibirTexto("p", `O número é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}

//return faz com que o número gerado nessa linha volte para ser armazenado na variável do inicio

function gerarNumeroRandom() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroMaximo){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroRandom();
    }   else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroRandom();
    limparCampo();
    tentativas = 1;
    exibirTitulo();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}