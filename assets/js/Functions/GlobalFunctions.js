export async function carregarDadosJSON() {
    const data = await fetch("utils/data.json");

    const dataConvertida = await data.json();

    return dataConvertida;
}

export function carregarCarrousel() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoWidth:true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function formatarNumero(numero) {
    const numeroFormatado = numero.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  return numeroFormatado.replace('.', ',');
}