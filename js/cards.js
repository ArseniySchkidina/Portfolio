const buttons = document.querySelectorAll(".context-button");
const cross = document.querySelectorAll(".close");

buttons.forEach(function(button) {
    button.addEventListener("click",(event)=>{
        event.target.closest(".card-skill").classList.add("active");
    })
});

cross.forEach(function (btn) {
    btn.addEventListener("click",(event)=>{
        event.target.closest(".card-skill").classList.remove("active");
    })
});















