
setTimeout(() => {
    let contadoresValues = document.querySelectorAll(".contador-value");


    contadoresValues.forEach(contador => {
        const contadorDiminuir = (contador.parentNode).querySelector(".contador-diminuir");
        const contadorAumentar = (contador.parentNode).querySelector(".contador-aumentar");
        let contadorValueNumerico =  parseInt(contador.textContent);

        const idContador = contador.parentNode.parentNode.parentNode.parentNode.dataset.id;

         let item = JSON.parse(localStorage.getItem(`produto_${idContador}`));
         let quantidade = item ? item.quantity : 1;

         contador.textContent = quantidade;

        verificarIsOneNumber(quantidade, contadorDiminuir);

        contadorDiminuir.addEventListener("click", () => {
                 if (quantidade > 1) {
                     quantidade--;
                     contador.textContent = quantidade;
                     item.quantity = quantidade;
                     localStorage.setItem(`produto_${idContador}`, JSON.stringify(item));
                     verificarIsOneNumber(quantidade,contadorDiminuir);
        
                 }
             });

        contadorAumentar.addEventListener("click", () => {
                     quantidade++;
                     contador.textContent = quantidade;
                     item.quantity = quantidade;
                     localStorage.setItem(`produto_${idContador}`, JSON.stringify(item));
                     verificarIsOneNumber(quantidade,contadorDiminuir);
                 });

    });





    // let contadorValueNumerico =  parseInt(contadorValue.textContent);
    // console.log(contadorValueNumerico);

    // verificarIsOneNumber(contadorValueNumerico, contadorDiminuir);
    

    // contadorDiminuir.addEventListener("click", () => {
    //     if (contadorValueNumerico > 1) {
    //         contadorValueNumerico--;
    //         contadorValue.textContent = contadorValueNumerico;
    //         verificarIsOneNumber(contadorValueNumerico,contadorDiminuir);

    //     }
    // });

    
    // contadorAumentar.addEventListener("click", () => {
    //     if (contadorValueNumerico >= 1) {
    //         contadorValueNumerico++;
    //         contadorValue.textContent = contadorValueNumerico;
    //         verificarIsOneNumber(contadorValueNumerico,contadorDiminuir);

    //     }
    // })


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