/*

OBJETIVO 1 -QUANDO O USUÁRIO CLICAR NA SETA AVANÇAR, IR PARA PRÓXIMA CARTA

    Passo 1 - pegar o elemento HTML da seta avançar

    Passo 2 - dar um jeito de identificar quando o usuário clicar nele 

    Passo 3 - mudar para a próxima carta da lista 

    Passo 4 - esconder a carta que estava selecionada

OBEJETIVO 2- QUANDO O USUÁRIO CLICAR NA SETA VOLTAR, IR PARA CARTA ANTERIOR  

    Passo 1 - pegar o elemento HTML da seta voltar

    Passo 2 - dar um jeito de identificar quando o usuário clicar nele 

    Passo 3 - mudar para a carta anterior da lista 

    Passo 4 - esconder a carta que estava selecionada
*/

// Passo 1 - pegar o elemento HTML da seta avançar

const btnAvancar = document.getElementById("seta-avancar");
const btnVoltar = document.getElementById("seta-voltar")
const cartao = document.querySelectorAll(".cartao");
const cartaoSelecionado = document.querySelector(".selecionado");
let cartaoAtual = 0;

function mostrarCartaoSelecionado(){
  cartao[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado(){
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");

}



btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartao.length - 1) {
    return;
  }
  esconderCartaoSelecionado();
  cartaoAtual++;

  cartao[cartaoAtual].classList.add("selecionado");
});


btnVoltar.addEventListener("click", function () {
    if (cartaoAtual <= 0) {
      return;
    }
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
    cartaoAtual--;
    mostrarCartaoSelecionado();
    
  });