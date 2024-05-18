const closeModal = document.querySelector(".closeModal");

closeModal.addEventListener("click", () => {
    const fade = document.querySelector("#fade");

    const modal = document.querySelector(".modal-confirmation");

    fade.classList.add("fade-none");
    modal.classList.add("modal-none");
    
})  

const closeModalFailure = document.querySelector(".closeModal-failure");

closeModalFailure.addEventListener("click", () => {
    const fade = document.querySelector("#fade");

    const modal = document.querySelector(".modal-failure");

    fade.classList.add("fade-none");
    modal.classList.add("modal-none");
    
})  