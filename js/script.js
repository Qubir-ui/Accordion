document.addEventListener("DOMContentLoaded", () => {
    const arrows = document.querySelectorAll(".arrow")
    const accordionElement = document.querySelectorAll("#accordion .group")

    accordionElement.forEach((el) => {
        el.addEventListener("click", (e) => {
            arrows.forEach((arrow) => {
                if (el.ariaExpanded === "true" && arrow === el.parentNode.lastElementChild) {
                    arrow.style.transform = 'rotate(' + 180 + 'deg)'
                } else {
                    arrow.style.transform = 'rotate(' + 0 + 'deg)'
                }
            })
            if (el.ariaExpanded === "true") {
                el.parentElement.style.border = '1px solid #636C7C'
            } else {
                el.parentElement.style.border = '1px solid #C6CDDA'
            }
        })
    })
})