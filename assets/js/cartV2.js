let carrinho = [];
let badge = document.querySelector(".badge-cart");

// Função para adicionar um item ao carrinho
function adicionarItemAoCarrinho(id) {
    if (!carrinho.includes(id)) {
        carrinho.push(id);
        localStorage.setItem(`produto_${id}`, JSON.stringify({ id: id }));
        atualizarInterfaceDoCarrinho();
    }
}

// Função para remover um item do carrinho
function removerItemDoCarrinho(id) {
    const index = carrinho.indexOf(id);
    if (index !== -1) {
        carrinho.splice(index, 1);
        localStorage.removeItem(`produto_${id}`);
        atualizarInterfaceDoCarrinho();
    }
}

// Função para carregar o carrinho do localStorage
function carregarCarrinhoDoLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('produto_')) {
            const id = key.replace('produto_', '');
            carrinho.push(id);
        }
    }
    atualizarInterfaceDoCarrinho();
}

// Função para atualizar a interface do carrinho
function atualizarInterfaceDoCarrinho() {
    if (carrinho.length === 0) {
        badge.classList.add("badge-cart-none");
    } else {
        badge.classList.remove("badge-cart-none");
        badge.textContent = carrinho.length;
    }
}

// Event listener para os botões de adicionar ao carrinho
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
            } else {
                removerItemDoCarrinho(id);
                botao.innerHTML = `Adicionar ao carrinho <i class="bi bi-bag"></i>`;
                botao.classList.remove("adicionado-carrinho");
            }
        });
    });
}, 1100);

function itemEstaNoCarrinho(id) {
    return localStorage.getItem(`produto_${id}`) !== null;
}

// Chamada para carregar o carrinho do localStorage ao carregar a página
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
    
