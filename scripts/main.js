import { funFacts } from "./Text-content.mjs"

let currentIndex = 0
const factKeys = Object.keys(funFacts)

const factHeader = document.querySelector(".fact-header")
const factDescription = document.querySelector(".fact-description")
const factImage = document.querySelector(".fact-image")
const factCaption = document.querySelector(".fact-caption")
const previousButton = document.querySelector(".previous")
const nextButton = document.querySelector(".next")

function updateFact(index) {
    const fact = funFacts[factKeys[index]]
    factHeader.textContent = fact.title
    factDescription.textContent = fact.description
    factImage.src = fact.imageSource
    factCaption.textContent = fact.caption
}

previousButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + factKeys.length) % factKeys.length
    updateFact(currentIndex)
})

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % factKeys.length
    updateFact(currentIndex)
})

updateFact(currentIndex)