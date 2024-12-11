import { projectInformation } from "./Text-content.mjs"

const projectInfo = document.querySelector(".project-info")

const projectLabel = document.querySelector(".project-label")
const projectDescription = document.querySelector(".project-description")
const projectLanguages = document.querySelector(".project-languages")
const projectLink = document.querySelector(".project-link")

const closeButton = document.querySelector(".close-button")

const project1 = document.querySelector(".project1")
const project2 = document.querySelector(".project2")
const project3 = document.querySelector(".project3")
const project4 = document.querySelector(".project4")
const project5 = document.querySelector(".project5")
const project6 = document.querySelector(".project6")
const project7 = document.querySelector(".project7")
const project8 = document.querySelector(".project8")
const project9 = document.querySelector(".project9")
const project10 = document.querySelector(".project10")

const projects = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project9,
    project10
]

if (projects) {
    projects.forEach(project => {
        project.addEventListener("click", () => {
            projectInfo.classList.remove("hide")
        })
    })
} else {
    console.log("No projects found.")
}

closeButton.addEventListener("click", () => {
    projectInfo.classList.add("hide")
})

project1.addEventListener("click", () => {
    projectLabel.textContent = projectInformation.project1.title
    projectDescription.textContent = projectInformation.project1.description
    projectLanguages.textContent = projectInformation.project1.languages
    projectLink.href = projectInformation.project1.link
})

project2.addEventListener("click", () => {
    projectLabel.textContent = projectInformation.project2.title
    projectDescription.textContent = projectInformation.project2.description
    projectLanguages.textContent = projectInformation.project2.languages
    projectLink.href = projectInformation.project2.link
})

project3.addEventListener("click", () => {
    projectLabel.textContent = projectInformation.project3.title
    projectDescription.textContent = projectInformation.project3.description
    projectLanguages.textContent = projectInformation.project3.languages
    projectLink.href = projectInformation.project3.link
})

project4.addEventListener("click", () => {
    projectLabel.textContent = projectInformation.project4.title
    projectDescription.textContent = projectInformation.project4.description
    projectLanguages.textContent = projectInformation.project4.languages
    projectLink.href = projectInformation.project4.link
})

project5.addEventListener("click", () => {
    projectLabel.textContent = projectInformation.project5.title
    projectDescription.textContent = projectInformation.project5.description
    projectLanguages.textContent = projectInformation.project5.languages
    projectLink.href = projectInformation.project5.link
})

project6.addEventListener("click", () => {
    projectLabel.textContent = projectInformation.project6.title
    projectDescription.textContent = projectInformation.project6.description
    projectLanguages.textContent = projectInformation.project6.languages
    projectLink.href = projectInformation.project6.link
})

project7.addEventListener("click", () => {
    projectLabel.textContent = projectInformation.project7.title
    projectDescription.textContent = projectInformation.project7.description
    projectLanguages.textContent = projectInformation.project7.languages
    projectLink.href = projectInformation.project7.link
})

project8.addEventListener("click", () => {
    projectLabel.textContent = projectInformation.project8.title
    projectDescription.textContent = projectInformation.project89description
    projectLanguages.textContent = projectInformation.project8.languages
    projectLink.href = projectInformation.project8.link
})

project9.addEventListener("click", () => {
    projectLabel.textContent = projectInformation.project9.title
    projectDescription.textContent = projectInformation.project9.description
    projectLanguages.textContent = projectInformation.project9.languages
    projectLink.href = projectInformation.project9.link
})

project10.addEventListener("click", () => {
    projectLabel.textContent = projectInformation.project10.title
    projectDescription.textContent = projectInformation.project10.description
    projectLanguages.textContent = projectInformation.project10.languages
    projectLink.href = projectInformation.project10.link
})
