const cartList = document.querySelector(".cart-list");
let carrinho = [];
let badge = document.querySelector(".badge-cart");

async function carregarCarrinho(){
    const data = await carregarDadosJSON();
    console.log(typeof data[0].id);
    console.log(typeof carrinho[0]);


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
    carregarCarrinho()
});

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

async function carregarDadosJSON() {
    const data = await fetch("./utils/data.json");

    const dataConvertida = data.json();

    return dataConvertida;
}