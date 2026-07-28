// Select the header
const header = document.getElementById("header");

// Detect scrolling
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

const form = document.getElementById("contactForm");
form.addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === ""){
        alert("Please enter your name");
        return;
    }

    if(!email.includes("@")){
        alert("Please enter a valid email");
        return;
    }

    if(message === ""){
        alert("Please enter your message");
        return;
    }

    alert("Form Submitted Successfully!");
    form.reset();
});

const darkBtn = document.getElementById("darkBtn");
darkBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

});

// Hero Slider
const images = [
    "image/hero.jpg",
    "image/hero2.jpg",
    "image/hero3.jpg"
];

let current = 0;
const slider = document.getElementById("slider");
document.getElementById("nextBtn").addEventListener("click", function(){
    current++;
    if(current >= images.length){
        current = 0;
    }
    slider.src = images[current];
});

document.getElementById("prevBtn").addEventListener("click", function(){
    current--;
    if(current < 0){
        current = images.length - 1;
    }
    slider.src = images[current];
});

// Auto Slider
setInterval(function(){
    current++;
    if(current >= images.length){
        current = 0;
    }
    slider.src = images[current];
},3000);