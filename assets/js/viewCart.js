import {carregarCarrinhoDoLocalStorage, carrinho } from "./Functions/cartFunctions.js";
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
    li.classList.add("cart-item");
    li.innerHTML = `

    <img src=${data.imagem} alt=${data.alt}>
                    <div class="cart-item-content-all">
                        <div class="card-item-content">
                            <div class="card-item-infos">
                                <h2>${data.nome}</h2>
                                <span>R$${data.preco}</span>
                            </div>
                            <p>${data.descricao}</p>
                        </div>
                        <div class="card-item-quantity">
                            <div>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <button class="remove">Remover</button>
                        </div>
                    </div>
    
    `;

    return li;
}

document.addEventListener("DOMContentLoaded", () => {
    carregarCarrinhoDoLocalStorage();
    carregarCarrinho();
    carregarResumoCarrinho();
});

