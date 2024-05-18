import { getQuantidadeItensCarrinho } from "./Functions/cartFunctions.js";

const cupomBotao = document.querySelector(".cupom-botao");
const DivAplicarCupom = document.querySelector(".input-aplicar_cupom");
let cupomOn = 0;

function toggleInputCupom() {
    if (cupomOn === 0) {        
        DivAplicarCupom.classList.remove("animate__bounceOut");
        DivAplicarCupom.classList.remove("input-aplicar_cupom-none");
        DivAplicarCupom.classList.add("animate__bounceIn");
        cupomOn = 1;
    } else {
        DivAplicarCupom.classList.remove("animate__bounceIn");
        DivAplicarCupom.classList.add("animate__bounceOut");
        setTimeout(() => {
            DivAplicarCupom.classList.add("input-aplicar_cupom-none");
        }, 500);
        cupomOn = 0;
    }
}

cupomBotao.addEventListener("click", toggleInputCupom);

const inputCupom = document.querySelector(".input-cupom");

const sendCupom = document.querySelector(".send-cupom");
    
const descontoValor = document.querySelector(".desconto-valor");

const cupomInvalidoActive = document.querySelector(".cupom-invalido-active");

export function isDesconto() {

    if(inputCupom.value === "italomiranda") {
        cupomInvalidoActive.classList.add("cupom-invalido-none");
        inputCupom.disabled = true;
        sendCupom.disabled = true;
        DivAplicarCupom.classList.add("input-aplicar_cupom-checked");  
        return true;
    }else {
        cupomInvalidoActive.classList.remove("cupom-invalido-none");
        return false;
    }
}



