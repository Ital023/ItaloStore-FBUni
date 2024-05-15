import { carregarDadosJSON, carregarCarrousel } from './Functions/GlobalFunctions.js';


let catalago = document.querySelector(".catalago");
const loader = document.querySelector(".loader");


async function carregarCatalago() {

    setTimeout(async function() {
        const data = await carregarDadosJSON();

        for(let i = 0; i < data.length; i++) {
            const li = criarLI(data[i]);
            catalago.appendChild(li);
        }

        carregarCarrousel();

        loader.classList.add("loader-none");
    }, 1000); // Tempo de espera em milissegundos

}

function criarLI(data) {
    let li = document.createElement("li");
    li.classList.add("catalago-item");
    li.classList.add("item");
    li.setAttribute("data-id", `${data.id}`);

    li.innerHTML = `
                        <div class="catalago-item__imagem">
                            <img src=${data.imagem} alt=${data.alt}>
                        </div>
    
                        <h2>${data.nome}</h2>
                        <p class="catalago-item__descricao">${data.descricao}</p>
    
                        <p class="catalago-item__preco">R$${data.preco}</p>

                        <div class="botoes">
                            <button class="adicionar-carrinho">Adicionar ao carrinho <i class="bi bi-bag"></i></button>
                            <a href="#">Saiba mais</a>
                        </div>
    `;

    return li;
}


document.addEventListener('DOMContentLoaded', carregarCatalago);