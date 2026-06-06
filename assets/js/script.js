// First Getting All Important Html Elements -->
const navbar = document.querySelector(".header .navbar");
const menuBtn = document.querySelector("#menu-btn");

// Add Event Listner on Menu Btn --->
menuBtn.addEventListener("click",() => {
    navbar.classList.toggle("active");
})



// ---> Video Section Logic <---

const controlsBtn = document.querySelectorAll(".about .video-container .controls .control-btn");
const mainVideo = document.querySelector(".about .video-container .video");



controlsBtn.forEach((btn) => {
    btn.addEventListener("click",() => {
        let src = btn.getAttribute("data-src");
        mainVideo.src = src;
    })
})

// Video Logic End --->


// Home Section JavaScript Code --->

// Home Content Animation

window.addEventListener('load', () => {

    const content = document.querySelector('.home .content');

    content.style.opacity = '0';
    content.style.transform = 'translateY(50px)';

    setTimeout(() => {
        content.style.transition = 'all 1s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 300);

});

// Parallax Effect

window.addEventListener('scroll', () => {

    const home = document.querySelector('.home');
    let scrollPosition = window.pageYOffset;

    home.style.backgroundPositionY = scrollPosition * 0.5 + 'px';

});

// Book Now Button

document.querySelector('.btn').addEventListener('click', (e) => {

    e.preventDefault();

    const destination = document.querySelector('#destination');

    if(destination){
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    }

});




// Destination Section Javascript code isss ---->

// Destination Cards Animation

const destinationBoxes = document.querySelectorAll('.destination .box');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 150);

        }

    });

}, {
    threshold: 0.2
});

destinationBoxes.forEach(box => {
    observer.observe(box);
});


// Read More Button Click

const readMoreBtns = document.querySelectorAll('.destination .content a');

readMoreBtns.forEach(btn => {

    btn.addEventListener('click', (e) => {

        e.preventDefault();

        const destinationName =
            btn.parentElement.querySelector('h3').innerText;

        alert(`Explore more about ${destinationName}`);

    });

});


// Card Hover Animation

destinationBoxes.forEach(box => {

    box.addEventListener('mouseenter', () => {

        box.style.transform = 'translateY(-12px)';
        box.style.transition = '0.4s ease';

    });

    box.addEventListener('mouseleave', () => {

        box.style.transform = 'translateY(0)';

    });

});

// ------------>