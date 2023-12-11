const buttons = document.querySelectorAll(".context-button");
const cross = document.querySelectorAll(".close");
const fade = document.querySelector(".fade-block");

buttons.forEach(function(button) {
    button.addEventListener("click",(event)=>{
        event.target.closest(".card-skill").classList.add("active");
        fade.classList.add("open");
    })
});

cross.forEach(function (btn) {
    btn.addEventListener("click",(event)=>{
        event.target.closest(".card-skill").classList.remove("active");
        fade.classList.remove("open");
    })
});

















