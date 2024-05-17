import {adicionarItemAoCarrinho , removerItemDoCarrinho, carregarCarrinhoDoLocalStorage ,carrinho,mostrarToastAdicionado, mostrarToastRetirado, itemEstaNoCarrinho } from "./Functions/cartFunctions.js";

setTimeout(function () {
    const botoes = document.querySelectorAll(".adicionar-carrinho");
    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const elemento = botao.parentNode.parentNode;
            const id = elemento.dataset.id;
            if (!carrinho.includes(id)) {
                adicionarItemAoCarrinho(id);
                botao.textContent = "Adicionado ao carrinho";
                botao.classList.add("adicionado-carrinho");
                mostrarToastAdicionado();
            } else {
                removerItemDoCarrinho(id);
                botao.innerHTML = `Adicionar ao carrinho <i class="bi bi-bag"></i>`;
                botao.classList.remove("adicionado-carrinho");
                mostrarToastRetirado();
            }
        });
    });
}, 1100);



document.addEventListener("DOMContentLoaded", () => {
    carregarCarrinhoDoLocalStorage();
    
    setTimeout(() => {
        const botoes = document.querySelectorAll(".adicionar-carrinho");

        botoes.forEach(botao => {
            const elemento = botao.parentNode.parentNode;
    
            if (itemEstaNoCarrinho(elemento.dataset.id)) {
                botao.textContent = "Adicionado ao carrinho";
                botao.classList.add("adicionado-carrinho");
            }
        });
    },1300);
});
    

