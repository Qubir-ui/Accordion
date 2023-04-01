document.addEventListener("DOMContentLoaded", () => {
    const arrow = document.querySelector("#arrow")
    const accordion = document.querySelector(".group")
    accordion.addEventListener("click", () => {
        arrow.classList.toggle("rotate-in")
    })
})