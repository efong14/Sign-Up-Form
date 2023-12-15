let inputs = document.querySelectorAll("input");

inputs.forEach (input => {
    input.addEventListener("invalid", e => {
        input.classList.add("required")
    })
})
