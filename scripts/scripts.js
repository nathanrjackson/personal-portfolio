const funFacts = {
    fact1: {
        title: "#1 I am from the beautiful state of Tennessee!",
        description: "I was born in Clarksville, Tennessee, but was soon brought to Knoxville, Tennessee, where I lived the first 18 years of my life.",
        imageSource: "images/knoxville.jpg",
        caption: "Downtown Knoxville"
    },

    fact2: {
        title: "#2 I served a two-year religious mission",
        description: "I had the privilege of volunteering as a full-time missionary for the Church of Jesus Christ  moving between Germany, Austria, and Switzerland. I also speak German :)",
        imageSource: "images/salzburg.jpg",
        caption: "Salzburg, Austria"
    },
    
    fact3: {
        title: "#3 I love bluegill fishing",
        description: "Not too much to say here... I enjoy bluegill fishing. It's very relaxing. Some of my other hobbies include hiking, spreadsheets, and programming.",
        imageSource: "images/bluegill.jpg",
        caption: "A bluegill fish"
    }
}

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