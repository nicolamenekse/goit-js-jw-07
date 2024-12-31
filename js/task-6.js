const controls = document.querySelector("#controls");
const dataCreate = document.querySelector("[data-create]");
const dataDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}

function createBoxes(amount) {
    boxes.innerHTML = ""; 
    const elements = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        elements.push(box);
        size += 10;
    }
    boxes.append(...elements); 
}

function destroyBoxes() {
    boxes.innerHTML = ""; 
}

dataCreate.addEventListener("click", () => {
    const input = controls.querySelector("input");
    const amount = parseInt(input.value.trim(), 10);

    const feedback = controls.querySelector(".feedback"); 
    if (!feedback) {
        const feedbackDiv = document.createElement("div");
        feedbackDiv.className = "feedback";
        feedbackDiv.style.color = "red";
        feedbackDiv.style.marginTop = "10px";
        controls.appendChild(feedbackDiv);
    }

    if (!amount || amount < 1 || amount > 100) {
        controls.querySelector(".feedback").textContent = "Please enter a number between 1 and 100";
        return;
    }

    controls.querySelector(".feedback").textContent = ""; 
    createBoxes(amount);
    input.value = ""; 
});

dataDestroy.addEventListener("click", destroyBoxes);
