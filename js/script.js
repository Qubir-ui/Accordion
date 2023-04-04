const url = "src/data.php"

const response = async (incomeUrl) => {
    try {
        return await fetch(incomeUrl)
            .then((res) => res.json())
    } catch (e) {
        console.warn(e)
    }
}

const accordionGenerator = (el) => {
    let rating = `
        <span class="hidden 1_xl:flex items-center justify-center ml-auto mr-5 1_xl:mr-10 text-[#283F75] gap-1">
            <img alt="star" src="img/star.svg">
            ${el.rating} 
        </span> 
    `
    accordion.innerHTML += `
    <div class="group-wrapper first:mt-0 mt-5 relative border border-[#C6CDDA] overflow-hidden flex items-center h-[60px]">
            <input
                    aria-controls="n${el.id}"
                    aria-expanded="true"
                    class="group peer w-full h-[60px] border-0  transition [overflow-anchor:none] focus:outline-none hidden"
                    data-te-collapse-init
                    data-te-target="#n${el.id}"
                    id="l${el.id}"
                    name="group"
                    type="radio">
            <label class="cursor-pointer absolute z-50 w-full h-full flex items-center pl-7 pr-10 font-bold text-sm md:text-base text-[#283F75]"
                   for="l${el.id}">${el.title}</label>
            <span class="ml-auto flex items-center">            
                ${(el.rating !== null && el.rating !== 0) ? rating : ''} 
                <span class="arrow mr-7 flex items-center justify-center h-2.5 w-2.5  duration-200 rotate-0 peer-checked:180">  
                    <img alt="arrow" src="img/arrow.svg">
                </span>
            </span>
    </div>
    <div
            class="!visible hidden mt-[3px] ease-out duration-100 border border-[#E6E9F0] rounded-b-lg"
            data-te-collapse-item
            data-te-parent="#accordion"
            id="n${el.id}">
        <div class="pt-5 px-6 pb-2.5 text-[#34539A]">
            ${el.body}
        </div>
    </div>
    `
}

const getData = async (incomeUrl) => {
    const data = await response(incomeUrl)
    const sortData = data.sort((prev, next) => next.rating - prev.rating)
    const accordion = document.querySelector("#accordion")
    accordion.innerHTML = ""
    sortData.forEach((el) => {
        accordionGenerator(el)
    })

    const arrows = document.querySelectorAll(".arrow")
    const accordionElement = document.querySelectorAll("#accordion .group-wrapper")
    accordionElement.forEach((el) => {
        el.addEventListener("click", (e) => {
            const isOpen = el.children[0].getAttribute("aria-expanded") === "true"
            accordionElement.forEach((el) => {
                el.style.border = "1px solid #C6CDDA"
            })
            el.style.border = `1px solid ${isOpen ? "#636C7C" : "#C6CDDA"}`
            arrows.forEach((arrow) => {
                const shouldRotate = isOpen && (arrow === el.childNodes[5].childNodes[2].nextSibling || arrow === el.childNodes[5].childNodes[1])
                arrow.style.transform = `rotate(${shouldRotate ? 180 : 0}deg)`
            })
        })
    })
}

getData(url)
setInterval(getData, 5000, url)
