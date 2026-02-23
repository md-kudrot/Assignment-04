const mainCartSection = document.getElementById("mainCartSection")
let total = document.getElementById("total")
let interviewCount = document.getElementById("interviewCount")
let rejectedCount = document.getElementById("rejectedCount")

// button Selection
const allBtn = document.getElementById("all-btn")
const interviewBtn = document.getElementById("interview-btn")
const rejectedBtn = document.getElementById("rejected-btn")

const interviewArr = [];
const rejectedArr = [];


function countLen() {
    total.innerText = mainCartSection.children.length;
    interviewCount.innerText = interviewArr.length;
    rejectedCount.innerText = rejectedArr.length;
}

countLen()

function toggleFunc(id) {
    allBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    interviewBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    rejectedBtn.classList.remove('bg-[#3B82F6]', 'text-white')

    allBtn.classList.add('bg-white', 'text-[#64748B]')
    interviewBtn.classList.add('bg-white', 'text-[#64748B]')
    rejectedBtn.classList.add('bg-white', 'text-[#64748B]')

    const selectedId = document.getElementById(id)
    console.log(selectedId)
    selectedId.classList.remove('bg-white', 'text-[#64748B]')
    selectedId.classList.add('bg-[#3B82F6]', 'text-white')

}

mainCartSection.addEventListener("click", (event) => {
    console.log(event.target)
    if (event.target.classList.contains('interviewButton')) {


        // console.log(event.target.parentElement.parentElement)
        const cart = event.target.parentElement.parentElement
        // console.log(cart)
        const companyName = cart.querySelector(".companyName").innerText
        const position = cart.querySelector(".position").innerText
        const appliedButton = cart.querySelector(".applied-button").innerText
        const description = cart.querySelector(".description").innerText
        const interviewButton = cart.querySelector(".interviewButton").innerText
        const rejectedButton = cart.querySelector(".rejectedButton").innerText

        const cartData = {
            companyName,
            position,
            appliedButton: "Appiled",
            description,
            interviewButton,
            rejectedButton
        }

        console.log(cartData)
        // interviewArr.push(cartData)
        // console.log(interviewArr.companyName === cartData.companyName)
        const cartExist = interviewArr.find(item => item.companyName == cartData.companyName)
        // console.log(cartExist)
        if (!cartExist) {
            interviewArr.push(cartData)

        }
        countLen()
    }



    // console.log(companyName)
})
