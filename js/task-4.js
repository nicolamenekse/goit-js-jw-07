const loginForm = document.querySelector(".login-form")
loginForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const formElements = event.currentTarget.elements
    const emailValue = formElements.email.value.trim()
    const passwordvalue = formElements.password.value.trim()
    if (!emailValue || !passwordvalue) {
        console.log("All from fields must be filled in");
        return "All from fields must be filled in"
    }
    const formData = {
        email: emailValue,
        password: passwordvalue
    }
    console.log(formData);
    formData.reset()

})

