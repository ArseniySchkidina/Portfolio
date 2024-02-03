// 1. Отследить focus на input'ах.
// 2. Поднять placeholder на верх.
// 3. Вешать active на input.
const inputs = document.querySelectorAll(".form__input");
inputs.forEach(input => {
    input.addEventListener("focus",() =>{
        input.nextElementSibling.classList.add("active")
    })
})