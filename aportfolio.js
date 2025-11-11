const navbatList = document.getElementById("navbar_list")
const menuBtn = document.getElementById("menu_btn")
const xBtn = document.getElementById("x_btn")


menuBtn.addEventListener("click", () => {
    navbatList.style.right = "0"
})
xBtn.addEventListener("click", () => {
    navbatList.style.right = "-1000px"
})


const showBtn = document.getElementById("show-more")
const closeTxtBtn = document.getElementById("close-text")
const showText = document.getElementById("show-text")


showBtn.addEventListener("click", ()=>{
    showText.classList.add("show-text-active")
})
closeTxtBtn.addEventListener("click", ()=>{
    showText.classList.remove("show-text-active")
})