import { getQuantidadeItensCarrinho } from "./Functions/cartFunctions.js";
import { sleep, formatarNumero} from "./Functions/GlobalFunctions.js"

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const confirmarCart = document.querySelector(".confirmar-cart");

let valorFinal = 0;

async function calcularPrecoTotal() {
    let soma = 0;

    //SubTotal
    const precoSubTotal = await carregarSubtotal();

    //Frete
    const precoFrete = document.querySelector(".preco-frete");
    const valorFrete = calcularFrete();
    precoFrete.textContent = `R$` + calcularFrete();

    //Taxa
    const valorTaxa = precoSubTotal * calcularTaxa(precoSubTotal);
    const valorTaxaTotal = precoSubTotal +  valorTaxa;
    console.log(valorTaxaTotal);
    if(valorTaxa > 0) {
        const valorTaxaFormatado = formatarNumero(valorTaxa);
        document.querySelector(".valor-taxa").textContent = `R$` + valorTaxaFormatado;
    }else {
        document.querySelector(".valor-taxa").textContent = `R$` + 0;
    }

    //Valor Final
    valorFinal = precoSubTotal + valorFrete + valorTaxa;
    console.log(valorFinal);
    const valorFinalFormatado = formatarNumero(valorFinal);
    console.log(valorFinalFormatado);
    valorFinal = valorFinalFormatado;

    const precoTotal = document.querySelector(".preco-total");
    precoTotal.textContent = `R$` + valorFinal;
}

document.addEventListener("DOMContentLoaded",calcularPrecoTotal);    


confirmarCart.addEventListener("click",finalizarCompra);

function finalizarCompra() {

    const fade = document.querySelector("#fade");

    const modal = document.querySelector(".modal-confirmation");

    const totalPedidoModal = document.querySelector(".modal-total-pedido");

    fade.classList.remove("fade-none");
    modal.classList.remove("modal-none");

    totalPedidoModal.textContent = `Total do pedido: R$` + valorFinal;
} 


function calcularFrete() {
    const quantidadeCarrinho = getQuantidadeItensCarrinho();
    
    if (quantidadeCarrinho <= 0) {
        return 0;
    } 
    else if(quantidadeCarrinho <= 2 && quantidadeCarrinho > 0) {
        return 10;
    }else if (quantidadeCarrinho >= 3 && quantidadeCarrinho <= 4) {
        return 15;
    }else if(quantidadeCarrinho >= 5) {
        return 20;
    }
}

function calcularTaxa(valor) {
    if (valor > 10000) {
        return 0.2;
    }
    return 0;
}

async function carregarSubtotal() {
    let soma = 0;
    const preco = document.querySelector(".preco-subtotal");
    
    await sleep(500);

    const precos = document.querySelectorAll(".precos");
    
    precos.forEach(preco => {
        const precoContent = preco.textContent;
        const  precoContentNumerico = parseFloat(precoContent.replace("R$", ""));
        soma += precoContentNumerico;
    })
    
    const somaFormatado = formatarNumero(soma);

    preco.textContent = `R$` + somaFormatado;

    return soma;
}




