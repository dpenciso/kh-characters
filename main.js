import { people } from "./kh-characters.js"

console.log()

const person = people

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

people.forEach(person => {
    let characterElement = document.createElement('div')
    characterElement.className = 'box'
    characterElement.textContent = person.name
    mainContainer.appendChild(characterElement)
})

document.body.appendChild(mainContainer)


// const allCharacters = people.map(character => {
//     let foundCharacter = people.find()
// })

// const mainContainer = document.createElement('div')
// mainContainer.className = 'container'

// allCharacters.array.forEach(character => {
    
// });

