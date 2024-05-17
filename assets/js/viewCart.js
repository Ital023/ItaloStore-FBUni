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
                            <button class="remove">Remover</button>
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
    let soma = 0;
    const precos = document.querySelectorAll(".precos");

    precos.forEach(preco => {
        

        let precoContent = preco.textContent;
        let valorNumerico = parseFloat(precoContent.replace("R$", ""));
        
        soma += valorNumerico;

    })

    const totais = document.querySelectorAll(".preco-total");

    totais.forEach(total => {
        total.textContent = `R$${soma}`;
    })

    
    console.log(soma);


}, 1000);