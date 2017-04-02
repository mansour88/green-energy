function ready() {
    "use strict";
    
    var masthead, slides, buttons, content, i;
    
    masthead = document.querySelector(".mh-image");
    
    slides = [
        "<img src=\"./img/slide-1.jpg\"><p>This is the First slide</p>",
        "<img src=\"./img/slide-2.jpg\"><p>This is the Second slide</p>",
        "<img src=\"./img/slide-3.jpg\"><p>This is the Third slide</p>",
        "<img src=\"./img/slide-4.jpg\"><p>This is the Fourth slide</p>"
    ];

function fadeOut() {
    masthead.style.opacity = 0;
}

i = 0;
masthead.innerHTML = slides[0];

function runSlides() {

        masthead.style.opacity = 1;

        if (i > 3) {
            i = 0;
        }

        masthead.innerHTML = slides[i];

        i += 1;

        setTimeout(fadeOut, 5000);
    }
    runSlides();
    window.setInterval(runSlides, 6000);

// Buttons + content
    buttons = document.querySelectorAll(".btn");
    content = document.querySelectorAll(".content");
    
    function handleClick(e) {

        document.querySelector(".active");

        for (i = 0; i < content.length; i += 1) {
            content[i].style.display = "none";
        }

        for (i = 0; i < buttons.length; i += 1) {

            if (e.currentTarget === buttons[i]) {
                e.currentTarget.setAttribute("class", "active");
                content[i].style.display = "block";
            }
        }
    }
    
    for (i = 0; i < buttons.length; i += 1) {
        buttons[i].addEventListener("click", handleClick, false);
    }
}
window.addEventListener("load", ready, false);
