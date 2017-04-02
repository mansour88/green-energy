var masthead, slides, buttons, content, container, i, j;
masthead = document.querySelector(".mh-image");
slides = [
        "<img src=\"./img/slide-1.jpg\"><p>Invest in wind energy today!</p>"
        , "<img src=\"./img/slide-2.jpg\"><p>Check out our new solar panels!</p>"
        , "<img src=\"./img/slide-3.jpg\"><p>Switch to more energy efficient LED lights!</p>"
        , "<img src=\"./img/slide-4.jpg\"><p>Buy some seeds and grow your own food!</p>"
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
// handle buttons
content = [
        "<img src=\"./img/educate.jpg\"><p>Going green requires a lot of patience, thought and research. Educating yourself about what it means to go green is the first step towards making a difference. </p>"
        , "<img src=\"./img/inform.jpg\"><p>After doing lots of research and slowly making changes to your lifestyle, the next step is to inform others around you so that they can start making a difference as well.</p>"
        , "<img src=\"./img/small-things.jpg\"><p>It starts with the small things. Making small changes in your day to day routine can have a huge impact on the environment. One way could be to take the train instead of flying to your destination, or it could be something as simple and small as recycling plastic.</p>"

    ];
buttons = document.querySelectorAll(".button");
container = document.querySelector(".container");
container.innerHTML = content[0];

function handleClick(e) {
    for (i = 0; i < buttons.length; i += 1) {
        if (buttons[i].hasAttribute("id")) {
            buttons[i].removeAttribute("id");
        }
    }
    if (e.target.innerHTML === " Educate") {
        container.innerHTML = content[0];
    }
    if (e.target.innerHTML === " Inform") {
        container.innerHTML = content[1];
    }
    if (e.target.innerHTML === " Small Things") {
        container.innerHTML = content[2];
    }
    e.target.setAttribute("id", "active");
}
for (j = 0; j < buttons.length; j += 1) {
    buttons[j].addEventListener("click", handleClick, false);
}
var imagesList, images, i;
imagesList = [
   "./img/educate.jpg"
   , "./img/inform.jpg"
   , "./img/small-things.jpg"
   , "./img/slide-1.jpg"
   , "./img/slide-2.jpg"
   , "./img/slide-3.jpg"
   , "./img/slide-4.jpg"
];

images = [];
 
function preload(arr) {
   for (i = 0; i < arr.length; i += 1) {
      images[i] = new Image();
      images[i].src = arr[i];
   }
}

preload(imagesList);

// images ready to be used;
console.log(images[0].src + "\n" + images[1].src + "\n" + images[2].src);