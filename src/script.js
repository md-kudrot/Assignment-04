const mainCartSection = document.getElementById("mainCartSection")
let total = document.getElementById("total")
let interviewCount = document.getElementById("interviewCount")
let rejectedCount = document.getElementById("rejectedCount")

// button Selection
const allBtn = document.getElementById("all-btn")
const interviewBtn = document.getElementById("interview-btn")
const rejectedBtn = document.getElementById("rejected-btn")
const renderUiSection = document.getElementById("renderUiSection")
const jobCount = document.getElementById("jobCount")

let interviewArr = [];
let rejectedArr = [];
let currentStatus = 'all'


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

    currentStatus = id

    selectedId.classList.remove('bg-white', 'text-[#64748B]')
    selectedId.classList.add('bg-[#3B82F6]', 'text-white')

    if (id === "interview-btn") {
        mainCartSection.classList.add('hidden');
        renderUiSection.classList.remove('hidden')
        interviewUirender()
        jobCount.innerText = `${interviewArr.length} of 8 jobs`

    } else if (id === "all-btn") {
        mainCartSection.classList.remove("hidden")
        renderUiSection.classList.add("hidden")
        jobCount.innerText = "8 jobs"
    } else if (id === "rejected-btn") {
        mainCartSection.classList.add('hidden');
        renderUiSection.classList.remove('hidden')
        rejectedArrUirender()
        jobCount.innerText = `${interviewArr.length} of 8 jobs`
    }

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
        const workTime = cart.querySelector(".workTime").innerText

        const cartData = {
            companyName,
            position,
            appliedButton: "Appiled",
            description,
            interviewButton,
            rejectedButton,
            workTime
        }

        console.log(cartData)
        // interviewArr.push(cartData)
        // console.log(interviewArr.companyName === cartData.companyName)
        const cartExist = interviewArr.find(item => item.companyName == cartData.companyName)
        // console.log(cartExist)
        if (!cartExist) {
            interviewArr.push(cartData)
            interviewUirender()
        }

        // interviewArr = interviewArr.filter(item => item.companyName != cartData.companyName)
        // console.log(interviewArr)
        // if (currentStatus == 'interview-btn') {
        //     interviewUirender()
        // }

        countLen()

    } else if (event.target.classList.contains('rejectedButton')) {
        const cart = event.target.parentElement.parentElement
        // console.log(cart)
        const companyName = cart.querySelector(".companyName").innerText
        const position = cart.querySelector(".position").innerText
        const appliedButton = cart.querySelector(".applied-button").innerText
        const description = cart.querySelector(".description").innerText
        const interviewButton = cart.querySelector(".interviewButton").innerText
        const rejectedButton = cart.querySelector(".rejectedButton").innerText
        const workTime = cart.querySelector(".workTime").innerText


        const cartData = {
            companyName,
            position,
            appliedButton: "Appiled",
            description,
            interviewButton,
            rejectedButton,
            workTime
        }

        console.log(cartData)
        // interviewArr.push(cartData)
        // console.log(interviewArr.companyName === cartData.companyName)
        const cartExist = rejectedArr.find(item => item.companyName == cartData.companyName)
        // console.log(cartExist)
        if (!cartExist) {
            rejectedArr.push(cartData)
            rejectedArrUirender()
        }

        // rejectedArr = rejectedArr.filter(item => item.companyName != cartData.companyName)

        // if (currentStatus == 'rejected-btn') {
        //     rejectedArrUirender()
        // }

        countLen()
    }


    // console.log(companyName)
})


function interviewUirender() {
    console.log(interviewArr)
    renderUiSection.innerHTML = ""

    for (let cartObj of interviewArr) {



        const div = document.createElement("div");
        div.className = "card flex justify-between border border-gray-100 bg-white rounded-sm p-8";

        div.innerHTML = `
        <div class="space-y-6 w-full">
                    <div>
                        <div class="flex w-full justify-between">
                            <p class="companyName companyName  text-xl text-[#002C5C] font-semibold">${cartObj.companyName}</p>


                            <div>
                                <img src="./img/delete.png" alt="delete image">
                            </div>

                        </div>
                        <p class="position latinName text-[#64748B]">${cartObj.position}</p>
                    </div>

                    <div>
                        <p class="workTime text-[#64748B]">
                            ${cartObj.workTime}
                        </p>
                    </div>
                    <button
                        class="applied-button bg-[#c3ddf82d] border border-gray-100 rounded-sm px-5 py-2 font-medium text-[#002C5C]">${cartObj.appliedButton}</button>

                    <p class="description text-sm">${cartObj.description}</p>

                    <div class="flex flex-wrap gap-5">
                        <button
                            class="interviewButton bg-white border border-[#10B981] rounded-sm font-medium text-[#10B981] px-10 py-2">Interview</button>
                        <button
                            class="rejectedButton bg-white  border border-[#EF4444] rounded-sm px-11 sm:px-10 py-2 font-medium text-[#EF4444]">Rejected</button>
                    </div>
                </div>

    `
        renderUiSection.append(div)
    }
}
function rejectedArrUirender() {
    console.log(interviewArr)
    renderUiSection.innerHTML = ""

    for (let cartObj of rejectedArr) {



        const div = document.createElement("div");
        div.className = "card flex justify-between border border-gray-100 bg-white rounded-sm p-8";

        div.innerHTML = `
        <div class="space-y-6 w-full">
                    <div>
                        <div class="flex w-full justify-between">
                            <p class="companyName companyName  text-xl text-[#002C5C] font-semibold">${cartObj.companyName}</p>


                            <div>
                                <img src="./img/delete.png" alt="delete image">
                            </div>

                        </div>
                        <p class="position latinName text-[#64748B]">${cartObj.position}</p>
                    </div>

                    <div>
                        <p class="workTime text-[#64748B]">
                            ${cartObj.workTime}
                        </p>
                    </div>
                    <button
                        class="applied-button bg-[#c3ddf82d] border border-gray-100 rounded-sm px-5 py-2 font-medium text-[#002C5C]">${cartObj.appliedButton}</button>

                    <p class="description text-sm">${cartObj.description}</p>

                    <div class="flex flex-wrap gap-5">
                        <button
                            class="interviewButton bg-white border border-[#10B981] rounded-sm font-medium text-[#10B981] px-10 py-2">Interview</button>
                        <button
                            class="rejectedButton bg-white  border border-[#EF4444] rounded-sm px-11 sm:px-10 py-2 font-medium text-[#EF4444]">Rejected</button>
                    </div>
                </div>

    `
        renderUiSection.append(div)
    }
}