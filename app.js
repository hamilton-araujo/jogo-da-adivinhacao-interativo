let listaNumerosSecretos = [];
let tentativas = 0;
let numeroSecreto = gerarNumeroAleatorio();
let numeroLimite = 10;
mensagemInicial();

function mudarTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute(){
    let chute = document.querySelector("input").value;
        // if (chute == numeroSecreto){
        //     mudarTexto("h1", "Acertou!");
        //     let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        //     let mensagemTentativas = `Parabéns! Você descobriu o número secreto com ${tentativas} ${palavraTentativa}! `;
        //     mudarTexto("p", mensagemTentativas);
        // } else {
        //     if(chute > numeroSecreto){
        //         mudarTexto("h1", "Você errou! Tente novamente.");
        //         mudarTexto("p", `O número secreto é menor que ${chute}.`);
        //     } else {
        //         mudarTexto("h1", "Você errou! Tente novamente.");
        //         mudarTexto("p", `O número secreto é maior que ${chute}.`);
        //     }
        //     tentativas++;
        // }
        if (chute != numeroSecreto){
            mudarTexto("h1", "Você errou! Tente novamente.");

            if(chute > numeroSecreto){
                mudarTexto("p", `O número secreto é menor que ${chute}.`);
            } else {
                mudarTexto("p", `O número secreto é maior que ${chute}.`);
            }

            tentativas++;
            limparCampo();
        } else {
            document.getElementById("reiniciar").removeAttribute("disabled");
            mudarTexto("h1", "Acertou!");

            tentativas++;

            let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
            let mensagemTentativas = `Parabéns! Você descobriu o número secreto com ${tentativas} ${palavraTentativa}! `;
            mudarTexto("p", mensagemTentativas);
            
        }
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSecretos.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaNumerosSecretos = [];
    }

    if (listaNumerosSecretos.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSecretos.push(numeroEscolhido);
        console.log(listaNumerosSecretos);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    limparCampo();
    tentativas = 0;
    numeroSecreto = gerarNumeroAleatorio();
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function mensagemInicial() {
    mudarTexto("h1", "Jogo do número secreto.");
    mudarTexto("p", "Escolha um número entre 1 e 10");    
}