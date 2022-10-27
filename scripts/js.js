let burger = document.querySelector('.burger')
let close = document.querySelector('.close')
let ul = document.querySelector('.ul')

burger.addEventListener('click', navOpen)
close.addEventListener('click', navClose)

function navOpen() {
    burger.style.display = 'none'
    close.style.display = 'block'
    ul.style.display = 'flex'
}

function navClose() {
    burger.style.display = 'block'
    close.style.display = 'none'
    ul.style.display = 'none'
}

let data = [
    {
        imageSrc: './images/illustration-features-tab-1.svg',
        headerText: 'Bookmark in one click',
        bodyText: `Organize your bookmarks however you like. Our simple drag-and-drop interface
              gives you complete control over how you manage your favourite sites.`
    },
    {
        imageSrc: './images/illustration-features-tab-2.svg',
        headerText: 'Intelligent search',
        bodyText: 'our upowerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks'
    },
    {
        imageSrc: './images/illustration-features-tab-3.svg',
        headerText: 'Share your bookmarks',
        bodyText: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a abutton.'
    }
]


let tabs = document.querySelectorAll('.tab')
let tabImage = document.querySelector('.tab-image')
let tabHeader = document.querySelector('.tab-header')
let tabDetail = document.querySelector('.tab-detail')



for (let i = 0; i < tabs.length; i++){
    let tab = tabs[i]
    tab.addEventListener('click', function () {
        tabs[0].classList.remove('active')
        tabs[1].classList.remove('active')
        tabs[2].classList.remove('active')
        tab.classList.add('active')
        tabImage.src = data[i].imageSrc
        tabHeader.textContent = data[i].headerText
        tabDetail.textContent = data[i].bodyText
    })
}






let questions = document.querySelectorAll('.question')
for (let i = 0; i < questions.length; i++){
    let question = questions[i]
    question.addEventListener('click', function () {

        if (this.nextElementSibling.style.display === 'none') {
            this.nextElementSibling.style.display = 'block'
            this.children[0].textContent = 'expand_less'
            this.children[0].style.color = 'hsl(0, 94%, 66%)'
        } else {
            this.nextElementSibling.style.display = 'none'
            this.children[0].textContent = 'expand_more'
            this.children[0].style.color = 'hsl(231, 69%, 60%)'
        }

    })
}








let emailContainer = document.querySelector('.emailContainer')
emailContainer.addEventListener('invalid', function () {
    this.style.border = '5px solid hsl(0, 94%, 66%)'
    this.nextElementSibling.style.display = 'block'
})