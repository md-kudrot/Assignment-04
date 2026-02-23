const mainCartSection = document.getElementById("mainCartSection")
let total = document.getElementById("total")
let interviewCount = document.getElementById("interviewCount")
let rejectedCount = document.getElementById("rejectedCount")


const mainContainer = document.querySelector("main");

// button Selection
const allBtn = document.getElementById("all-btn")
const interviewBtn = document.getElementById("interview-btn")
const rejectedBtn = document.getElementById("rejected-btn")
// const appliedBtn = document.getElementsByClassName("applied-button")
// console.log(appliedBtn)

const renderUiSection = document.getElementById("renderUiSection")
const jobCount = document.getElementById("jobCount")
const noJobsSection = document.getElementById("noJobsSection")

let interviewArr = [];
let rejectedArr = [];
let currentStatus = 'all'

let interviewArrLen;
let rejectedArrLen;

function noJobShowFunc() {

    if (interviewArrLen === 0 || rejectedArrLen === 0) {
        // console.log(noJobsSection)
        noJobsSection.classList.remove("hidden")
    } else {
        // console.log(rejectedArr.length)
        noJobsSection.classList.add("hidden")
    }

}

function countLen() {
    total.innerText = mainCartSection.children.length;

    interviewArrLen = interviewArr.length;
    interviewCount.innerText = interviewArrLen;

    rejectedArrLen = rejectedArr.length;
    rejectedCount.innerText = rejectedArrLen;

    noJobShowFunc()
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
    // console.log(selectedId)

    currentStatus = id
    // console.log(currentStatus)

    selectedId.classList.remove('bg-white', 'text-[#64748B]')
    selectedId.classList.add('bg-[#3B82F6]', 'text-white')

    if (id === "interview-btn") {

        if (interviewArrLen === 0) {
            // console.log(noJobsSection)
            noJobsSection.classList.remove("hidden")
        } else {
            // console.log(rejectedArr.length)
            noJobsSection.classList.add("hidden")
        }

        // noJobShowFunc()

        mainCartSection.classList.add('hidden');
        renderUiSection.classList.remove('hidden')
        jobCount.innerText = `${interviewArr.length} of ${mainCartSection.children.length} jobs`
        interviewUirender()

    } else if (id === "all-btn") {

        noJobsSection.classList.add("hidden")


        mainCartSection.classList.remove("hidden")
        renderUiSection.classList.add("hidden")
        jobCount.innerText = `${mainCartSection.children.length} jobs`


    } else if (id === "rejected-btn") {

        if (rejectedArrLen === 0) {
            // console.log(noJobsSection)
            noJobsSection.classList.remove("hidden")
        } else {
            // console.log(rejectedArr.length)
            noJobsSection.classList.add("hidden")
        }
        // noJobShowFunc();

        mainCartSection.classList.add('hidden');
        renderUiSection.classList.remove('hidden')
        jobCount.innerText = `${rejectedArr.length} of ${mainCartSection.children.length} jobs`
        rejectedArrUirender()
    }

}


mainContainer.addEventListener("click", function (event) {

    if (event.target.classList.contains("interviewButton")) {


        const parenNode = event.target.parentNode.parentNode.parentNode;

        const companyName = parenNode.querySelector(".companyName").innerText;
        const position = parenNode.querySelector(".position").innerText;
        const description = parenNode.querySelector(".description").innerText;
        const interviewButton = parenNode.querySelector(".interviewButton").innerText;
        const rejectedButton = parenNode.querySelector(".rejectedButton").innerText;
        const workTime = parenNode.querySelector(".workTime").innerText;

        parenNode.querySelector(".applied-button").innerText = "Applied";

        const cartData = {
            companyName,
            position,
            appliedButton: "Applied",
            description,
            interviewButton,
            rejectedButton,
            workTime
        };

        const cartExist = interviewArr.find(item => item.companyName == cartData.companyName);
        if (!cartExist) {
            interviewArr.push(cartData);
        }
        rejectedArr = rejectedArr.filter(item => item.companyName != cartData.companyName);


        if (currentStatus == "rejected-btn") {
            rejectedArrUirender();
        }


        if (currentStatus == "interview-btn") {
            interviewUirender();
        }



        countLen();
    }



    else if (event.target.classList.contains("rejectedButton")) {


        const parenNode = event.target.parentNode.parentNode.parentNode;

        const companyName = parenNode.querySelector(".companyName").innerText;
        const position = parenNode.querySelector(".position").innerText;
        const description = parenNode.querySelector(".description").innerText;
        const interviewButton = parenNode.querySelector(".interviewButton").innerText;
        const rejectedButton = parenNode.querySelector(".rejectedButton").innerText;
        const workTime = parenNode.querySelector(".workTime").innerText;

        parenNode.querySelector(".applied-button").innerText = "Rejected";

        const cartData = {
            companyName,
            position,
            appliedButton: "Rejected",
            description,
            interviewButton,
            rejectedButton,
            workTime
        };

        const cartExist = rejectedArr.find(item => item.companyName == cartData.companyName);
        if (!cartExist) {
            rejectedArr.push(cartData);
        }


        interviewArr = interviewArr.filter(item => item.companyName != cartData.companyName);


        if (currentStatus == "interview-btn") {
            interviewUirender();
        }




        countLen();


    }


    else if (event.target.classList.contains("deleteIcon")) {

        const card = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
        
        // card.remove();

        const companyName = card.querySelector(".companyName").innerText;
        // console.log(companyName)

        card.remove();

        interviewArr = interviewArr.filter(item => item.companyName != companyName);
        
        rejectedArr = rejectedArr.filter(item => item.companyName != companyName);

        if (currentStatus == "interview-btn") {
            interviewUirender();
        } else if (currentStatus == "rejected-btn") {
            rejectedArrUirender();
        }

        jobCount.innerText = `${mainCartSection.children.length} jobs`
        countLen();
    }

});




function interviewUirender() {
    // console.log(interviewArr)
    renderUiSection.innerHTML = ""

    for (let cartObj of interviewArr) {
        // console.log(cartObj)


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