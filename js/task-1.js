const categories = document.querySelector("#categories")
const item = document.querySelector(".item")

console.log(`Number of categories: ${categories.childElementCount}`);

item.forEach((item) => {
    const categoryName = item.firstElementChild.textContent
    const elementsCount = item.lastElementChild.childElementCount
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
})


