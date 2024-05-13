let carrinho = [];
let badge = document.querySelector(".badge-cart");
let i = 0;

setTimeout(function () {
    const botoes = document.querySelectorAll(".adicionar-carrinho");

    console.log(botoes);

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const elemento = botao.parentNode.parentNode;


            if (!carrinho.includes(elemento.dataset.id)) {
                carrinho.push(elemento.dataset.id);
                botao.textContent = "Adicionado ao carrinho";
                botao.classList.add("adicionado-carrinho");
                localStorage.setItem("carrinho", carrinho);

                console.log(carrinho);
            } else {
                // let posicao = elemento.dataset.id;
                // carrinho.splice(posicao, 1);
                // botao.classList.remove("adicionado-carrinho");
                // botao.innerHTML = `Adicionar ao carrinho <i class="bi bi-bag"></i>`;
                // localStorage.setItem("carrinho", carrinho);
            }

              
            if (carrinho.length === 0) {
                badge.classList.add("badge-cart-none");
            } else {
                badge.classList.remove("badge-cart-none");
                badge.textContent = carrinho.length;
            }
        })
        
    })

    i = 0;


},1100)


document.addEventListener("DOMContentLoaded", () => {

    let localStorageCarrinhoSemSplit = localStorage.getItem("carrinho")

    if (localStorageCarrinhoSemSplit !== null) {
        let localStorageCarrinho = localStorage.getItem("carrinho").split(",");
        let lenghtLocalStorage = localStorageCarrinho.length;


        carrinho = localStorageCarrinho;
        badge.classList.remove("badge-cart-none");
        badge.textContent = lenghtLocalStorage;

        setTimeout(() => {
            const botoes = document.querySelectorAll(".adicionar-carrinho");


            botoes.forEach(botao => {
                const elemento = botao.parentNode.parentNode;
    
                if (localStorageCarrinho.includes(elemento.dataset.id)) {
                    botao.textContent = "Adicionado ao carrinho";
                    botao.classList.add("adicionado-carrinho");
                    botao.disabled = true;
                }
            });



        },1300);
    }
    else {
        badge.classList.add("badge-cart-none");

    }
    
    
})
