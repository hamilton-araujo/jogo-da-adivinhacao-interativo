function mudarTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

let tentativas = 0;

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
            mudarTexto("h1", "Acertou!");

            tentativas++;

            let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
            let mensagemTentativas = `Parabéns! Você descobriu o número secreto com ${tentativas} ${palavraTentativa}! `;
            mudarTexto("p", mensagemTentativas);
            
        }
}


function gerarNumeroAleatorio() {
    return parseInt(Math.random()*10 + 1);
}

let numeroSecreto = gerarNumeroAleatorio();
mudarTexto("h1", "Jogo do número secreto.");
mudarTexto("p", "Escolha um número entre 1 e 10.");

function limparCampo() {
        chute = document.querySelector("input");
        chute.value = "";
}