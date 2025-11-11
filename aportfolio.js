const navbatList = document.getElementById("navbar_list")
const menuBtn = document.getElementById("menu_btn")
const xBtn = document.getElementById("x_btn")


menuBtn.addEventListener("click", () => {
    navbatList.style.right = "0"
})
xBtn.addEventListener("click", () => {
    navbatList.style.right = "-1000px"
})