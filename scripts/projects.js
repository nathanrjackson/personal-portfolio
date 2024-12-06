const projects = document.querySelectorAll(".project-item")
const projectInfo = document.querySelector(".project-info")
const projectLabel = document.querySelector(".project-label")
const projectDescription = document.querySelector(".project-title")
const closeButton = document.querySelector(".close-button")

const project1 = document.querySelector(".project1")

projects.forEach(project => {
    project.addEventListener("click", () => {
        projectInfo.classList.remove("hide")
    })
})

closeButton.addEventListener("click", () => {
    projectInfo.classList.add("hide")
})

project1.addEventListener("click", () => {
    projectLabel.textContent = "rice"
})