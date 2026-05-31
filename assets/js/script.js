// First Getting All Important Html Elements -->
const navbar = document.querySelector(".header .navbar");
const menuBtn = document.querySelector("#menu-btn");

// Add Event Listner on Menu Btn --->
menuBtn.addEventListener("click",() => {
    navbar.classList.toggle("active");
})

