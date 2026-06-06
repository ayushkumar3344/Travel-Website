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


// Services Section Javascript Code is --->

// Service Cards Animation

const serviceBoxes = document.querySelectorAll('.services .box');

const serviceObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 200);

        }

    });

}, {
    threshold: 0.2
});

serviceBoxes.forEach(box => {
    serviceObserver.observe(box);
});


// Hover Effect

serviceBoxes.forEach(box => {

    box.addEventListener('mouseenter', () => {
        box.style.transform = 'translateY(-10px)';
    });

    box.addEventListener('mouseleave', () => {
        box.style.transform = 'translateY(0)';
    });

});

// Destination Section Animation code is --->

// Destination Section Animation

const destinationCards = document.querySelectorAll('.destination .box');

const destinationObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 150);

            destinationObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.2
});

destinationCards.forEach(card => {
    destinationObserver.observe(card);
});


// --->


// Service Button Click Effect

const serviceBtns = document.querySelectorAll('.services .btn');

serviceBtns.forEach(btn => {

    btn.addEventListener('click', (e) => {

        e.preventDefault();

        const serviceName =
            btn.closest('.box').querySelector('h3').innerText;

        alert(`You selected: ${serviceName}`);

    });

});

// ----------------->


// Gallery Section javascript code --->

// Gallery Enter Animation

const galleryBoxes = document.querySelectorAll('.gallery .box');

const galleryObserver = new IntersectionObserver((entries) => {

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

galleryBoxes.forEach(box => {
    galleryObserver.observe(box);
});


// --------------------------->


// Blog Section Animation Code is--->

// Blog Section Animation

const blogBoxes = document.querySelectorAll('.blog .box');

const blogObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 250);

        }

    });

}, {
    threshold: 0.2
});

blogBoxes.forEach(box => {
    blogObserver.observe(box);
});


// -------------------------->

// Footer Section JavaScript Code Is ---------->

// Footer Animation

const footerBoxes = document.querySelectorAll('.footer .box');

const footerObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 200);

        }

    });

}, {
    threshold: 0.3
});

footerBoxes.forEach(box => {
    footerObserver.observe(box);
});


// Newsletter Form Animation

const form = document.querySelector('.footer form');

if(form){

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const btn = form.querySelector('.btn');

        btn.value = 'Subscribed ✓';

        setTimeout(() => {
            btn.value = 'Subscribe';
        }, 3000);

    });

}


// Finally all animation code is done -->