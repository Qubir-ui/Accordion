const url = "src/data.php"
const arrows = document.querySelectorAll(".arrow")
const accordion = document.querySelector("#accordion")
const accordionElement = document.querySelectorAll("#accordion .group-wrapper")

const response = async (incomeUrl) => {
    try {
        return await fetch(incomeUrl)
            .then((res) => res.json())
    } catch (e) {
        console.warn(e)
    }
}

const accordionGenerator = (el) =>{
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
            <span class="ml-auto flex">
                <span class="hidden 1_xl:flex items-center justify-center ml-auto mr-5 1_xl:mr-10 text-[#283F75] gap-1">
                    <img alt="star" src="img/star.svg">
                    4
                </span> 
            </span>
            <span class="arrow mr-7 flex items-center justify-center h-2.5 w-2.5  duration-200 rotate-0 peer-checked:180">  
                <img alt="arrow" src="img/arrow.svg">
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
    let data = await response(incomeUrl)
    data.forEach((el)=>{
        accordionGenerator(el)
    })
}
getData(url)

accordionElement.forEach((el) => {
    el.addEventListener("click", (e) => {
        console.log(el)
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