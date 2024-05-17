import { getQuantidadeItensCarrinho } from "./Functions/cartFunctions.js";

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const confirmarCart = document.querySelector(".confirmar-cart");

function calcularPrecoTotal() {
    let soma = 0;

    const precoSubTotal = document.querySelectorAll(".preco-total")[0];
    
    const precoFrete = document.querySelector(".preco-frete");
    console.log(precoFrete);
    precoFrete.textContent = `R$` + calcularFrete();


}

document.addEventListener("DOMContentLoaded",calcularPrecoTotal);

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

