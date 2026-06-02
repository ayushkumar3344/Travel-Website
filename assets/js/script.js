// First Getting All Important Html Elements -->
const navbar = document.querySelector(".header .navbar");
const menuBtn = document.querySelector("#menu-btn");

// Add Event Listner on Menu Btn --->
menuBtn.addEventListener("click",() => {
    navbar.classList.toggle("active");
})



// ---> Video Section Logic <---

const controlsBtn = document.querySelectorAll(".about .video-container .controls .control-btn");
const mainVideo = document.querySelector(".about .video-container .video")



controlsBtn.forEach((btn) => {
    btn.addEventListener("click",() => {
        let src = btn.getAttribute("data-src");
        mainVideo.src = src;
    })
})

// Video Logic End --->
