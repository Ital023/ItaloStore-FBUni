export async function carregarDadosJSON() {
    const data = await fetch("../utils/data.json");

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