export let carrinho = [];
let badge = document.querySelector(".badge-cart");

export function adicionarItemAoCarrinho(id) {
    if (!carrinho.includes(id)) {
        carrinho.push(id);
        localStorage.setItem(`produto_${id}`, JSON.stringify({ id: id }));
        atualizarInterfaceDoCarrinho();
    }
}


export function removerItemDoCarrinho(id) {
    const index = carrinho.indexOf(id);
    if (index !== -1) {
        carrinho.splice(index, 1);
        localStorage.removeItem(`produto_${id}`);
        atualizarInterfaceDoCarrinho();
    }
}

export function carregarCarrinhoDoLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('produto_')) {
            const id = key.replace('produto_', '');
            carrinho.push(id);
        }
    }
    atualizarInterfaceDoCarrinho();
}

function atualizarInterfaceDoCarrinho() {
    if (carrinho.length === 0) {
        badge.classList.add("badge-cart-none");
    } else {
        badge.classList.remove("badge-cart-none");
        badge.textContent = carrinho.length;
    }
}

export function itemEstaNoCarrinho(id) {
    return localStorage.getItem(`produto_${id}`) !== null;
}

export function mostrarToastAdicionado() {
    Toastify({
        text: "Adicionado ao carrinho ✅",
        duration: 3000,
        close: false,
        className: "toast-adicionado",
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#0A6847",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

export function mostrarToastRetirado() {
    Toastify({
        text: "Retirado do carrinho 😭",
        duration: 3000,
        close: false,
        className: "toast-retirado",
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "rgb(167, 26, 26)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}