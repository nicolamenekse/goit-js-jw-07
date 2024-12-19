const nameInput = document.querySelector("#name-input")
const nameOutput = document.querySelector("#name-output")

nameInput.addEventListener("input", (element) => {
    if (element.currentTarget.value === "") {
        nameOutput.textContent = "Anonymous"
    } else {
        nameOutput.textContent = element.currentTarget.value
    }
})



