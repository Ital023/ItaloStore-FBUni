import { calcularPrecoTotal } from "./calculadoraCart.js";
import {carregarCarrinhoDoLocalStorage, carrinho, removerItemDoCarrinho } from "./Functions/cartFunctions.js";
import {carregarDadosJSON} from "./Functions/GlobalFunctions.js"

const cartList = document.querySelector(".cart-list");

async function carregarCarrinho(){
    const data = await carregarDadosJSON();


    for(let i = 0; i < data.length; i++) {
        const item = data[i];
        const itemIdString = item.id.toString();

        if(carrinho.includes(itemIdString)) {
            const li = criarLi(item);
            cartList.appendChild(li);
        }
    }

}

function criarLi(data) {
    let li = document.createElement("li");
    li.dataset.id = data.id;
    li.classList.add("cart-item");
    
    li.innerHTML = `

    <img src=${data.imagem} alt=${data.alt}>
                    <div class="cart-item-content-all">
                        <div class="card-item-content">
                            <div class="card-item-infos">
                                <h2>${data.nome}</h2>
                                <span class="precos">R$${data.preco}</span>
                            </div>
                            <p>${data.descricao}</p>
                        </div>
                        <div class="card-item-quantity">
                            <div>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <button class="cart-remove">Remover</button>
                        </div>
                    </div>
    
    `;

    return li;
}

document.addEventListener("DOMContentLoaded", () => {
    carregarCarrinhoDoLocalStorage();
    carregarCarrinho();
});

setTimeout(() => {
    const buttonsRemove = document.querySelectorAll(".cart-remove");

    buttonsRemove.forEach(button => {
        button.addEventListener("click", () => {
            const elementoLi = button.parentNode.parentNode.parentNode;
            const id = elementoLi.dataset.id;
            removerItemDoCarrinho(id);
            elementoLi.remove();
            calcularPrecoTotal();
            const DivAplicarCupom = document.querySelector(".input-aplicar_cupom");
            DivAplicarCupom.classList.remove("input-aplicar_cupom-checked");  
            const inputCupom = document.querySelector(".input-cupom");
            const sendCupom = document.querySelector(".send-cupom");
            inputCupom.disabled = false;
            sendCupom.disabled = false;
            const descontoValorHtml = document.querySelector(".desconto-valor");
            descontoValorHtml.textContent = `-R$` + 0;

        })
    })

    
},1000)



