setTimeout(() => {
    const contadorDiminuir = document.querySelector(".contador-diminuir");
    let contadorValue = document.querySelector(".contador-value");
    const contadorAumentar = document.querySelector(".contador-aumentar");

    let contadorValueNumerico =  parseInt(contadorValue.textContent);
    console.log(contadorValueNumerico);

    verificarIsOneNumber(contadorValueNumerico, contadorDiminuir);
    

    contadorDiminuir.addEventListener("click", () => {
        if (contadorValueNumerico > 1) {
            contadorValueNumerico--;
            contadorValue.textContent = contadorValueNumerico;
            verificarIsOneNumber(contadorValueNumerico,contadorDiminuir);

        }
    });

    
    contadorAumentar.addEventListener("click", () => {
        if (contadorValueNumerico >= 1) {
            contadorValueNumerico++;
            contadorValue.textContent = contadorValueNumerico;
            verificarIsOneNumber(contadorValueNumerico,contadorDiminuir);

        }
    })


}, 100);



function verificarIsOneNumber(contadorValueNumerico, contadorDiminuir) {
    if (contadorValueNumerico === 1) {
        contadorDiminuir.disabled = true;
        contadorDiminuir.classList.add("contador-diminuir-disabled");
    }else {
        contadorDiminuir.disabled = false;
        contadorDiminuir.classList.remove("contador-diminuir-disabled");
    }
}