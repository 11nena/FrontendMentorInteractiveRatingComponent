const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const raiting = document.getElementById("raiting")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    mainContainer.style.display = "block"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        raiting.innerHTML = rate.innerHTML
        console.log(rate.innerHTML)
    })
})