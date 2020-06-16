const bodyElement = document.querySelector('body')
const mainElement = document.createElement('main')
const buttonElement = document.createElement('button')

bodyElement.append(buttonElement)
buttonElement.append('Remove Main')
bodyElement.append(mainElement)

const imageElement = document.createElement('img')
imageElement.src = 'https://cdn.fotofits.com/petzlover/gallery/img/l/scottish-fold-528440.jpg'
imageElement.className = 'image'

const anchorElement = document.createElement('a')
anchorElement.href = 'https://cattime.com/cat-breeds/scottish-fold-cats#/slide/1'
anchorElement.className = 'link'
anchorElement.append('Scottish Fold Link')

mainElement.append(imageElement)
mainElement.append(anchorElement)

buttonElement.addEventListener('click', function () {
    mainElement.remove()
})

inputBoxElement = document.createElement('input')
inputBoxElement.setAttribute('type', 'text')
removeElementButton = document.createElement('button')
removeElementButton.append('Remove Element')
bodyElement.append(inputBoxElement)
bodyElement.append(removeElementButton)

removeElementButton.addEventListener('click', function() {
    let removeVariable = document.querySelector(inputBoxElement.value)
    removeVariable.remove()
})

inputBoxAddElement = document.createElement('input')
inputBoxAddElement.setAttribute('type', 'text')
addElementButton = document.createElement('button')
addElementButton.append('Create Element')
bodyElement.append(inputBoxAddElement)
bodyElement.append(addElementButton)

addElementButton.addEventListener('click', function() {
    let addElementVariable = document.createElement('div')
    addElementVariable.append(inputBoxAddElement.value)
    bodyElement.append(addElementVariable)
})
