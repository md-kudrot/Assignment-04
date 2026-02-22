const mainSection = document.getElementById("mainSection")
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
    total.innerText = mainSection.children.length;
    interviewCount.innerText = interviewArr.length;
    rejectedCount.innerText = rejectedArr.length;
}

countLen()

function toggleFunc(id) {
    allBtn.classList.remove('bg-[#3B82F6]' ,'text-white' )
    interviewBtn.classList.remove('bg-[#3B82F6]' ,'text-white' )
    rejectedBtn.classList.remove('bg-[#3B82F6]' ,'text-white' )
    
    allBtn.classList.add('bg-white', 'text-[#64748B]')
    interviewBtn.classList.add('bg-white', 'text-[#64748B]')
    rejectedBtn.classList.add('bg-white', 'text-[#64748B]')
    
    const selectedId = document.getElementById(id)
    console.log(selectedId)
    selectedId.classList.remove('bg-white', 'text-[#64748B]')
    selectedId.classList.add('bg-[#3B82F6]' ,'text-white' )
    
}