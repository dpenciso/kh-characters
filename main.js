import { people } from "./kh-characters.js"

console.log()

const person = people

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

people.forEach(person => {
    let characterElement = document.createElement('div')
    let homeworldElement = document.createElement('p')
    let imageElement = document.createElement ('img')

    characterElement.className = 'box'
    characterElement.textContent = person.name
    homeworldElement.textContent = person.homeworld
    imageElement.src = person.img_url

    mainContainer.appendChild(characterElement)
    characterElement.appendChild(homeworldElement)
    characterElement.appendChild(imageElement)
})

document.body.appendChild(mainContainer)

