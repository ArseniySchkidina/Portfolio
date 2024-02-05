const inputs = document.querySelectorAll(".form__input");
inputs.forEach(input => {
    input.addEventListener("focus",() =>{
        input.nextElementSibling.classList.add("active")
    })
})
// при потере фокуса при условии, что форма не заполнена, плэйсхолдэр опустится назад
inputs.forEach(input =>{
    input.addEventListener("blur",() =>{
        if(!input.value.trim().length > 0){
            input.nextElementSibling.classList.remove("active")
        }
    })
})