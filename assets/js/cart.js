let carrinho = [];
let badge = document.querySelector(".badge-cart");

setTimeout(function () {
    const botoes = document.querySelectorAll(".adicionar-carrinho");

    console.log(botoes);

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const elemento = botao.parentNode.parentNode;
            carrinho.push(elemento.dataset.id);        
            console.log(carrinho);

            if (carrinho.length === 0) {
                badge.classList.add("badge-cart-none");
            } else {
                badge.classList.remove("badge-cart-none");
                badge.textContent = carrinho.length;
            }
        })
        
    })

},5100)


document.addEventListener("DOMContentLoaded", () => {
    if (carrinho.length === 0) {
        badge.classList.add("badge-cart-none");
    } else {
        badge.classList.remove("badge-cart-none");
        badge.textContent = carrinho.length;
    }
})