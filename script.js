const rightBtn = document.getElementById('rightBtn');
const leftBtn = document.getElementById('leftBtn');
const items = document.querySelectorAll('.items');
const childEl = document.querySelectorAll('.child');

const LegoEL = document.getElementById('Lego');
const LegoChild = LegoEL.querySelector('.child'); 

const thEL = document.getElementById('57th');
const thChild = thEL.querySelector('.child'); 

const mountainEL = document.getElementById('Mountain');
const mountainChild = mountainEL.querySelector('.child'); 

var index = 0

// console.log(childEl)
// console.log(items)

setActiveItem()

function setActiveChild(){
    childEl.forEach(child => {
        child.classList.remove('hovered')
        child.classList.add('closed')
    })

    childEl[index].classList.remove('closed')
    childEl[index].classList.add('hovered')
}

function setActiveItem() {
    items.forEach(item => {
        item.classList.remove('selected')
        item.classList.add('closed')
    })

    items[index].classList.remove('closed')
    items[index].classList.add('selected')
}

rightBtn.addEventListener('click', () => {
    index++

    if (index > items.length - 1) {
        index = 0
    }

    setActiveItem()
})

leftBtn.addEventListener('click', () => {
    index--

    if (index < 0) {
        index = items.length - 1
    }

    setActiveItem()
})

if (items[index].classList.contains('selected')) {
    setActiveChild()
}

// HOVER
LegoEL.addEventListener('mouseenter', () => {
    LegoChild.classList.remove('closed')
    LegoChild.classList.add('hovered')
})

LegoEL.addEventListener('mouseleave', () => {
    LegoChild.classList.remove('hovered')
    LegoChild.classList.add('closed')
})

thEL.addEventListener('mouseenter', () => {
    thChild.classList.remove('closed')
    thChild.classList.add('hovered')
})

thEL.addEventListener('mouseleave', () => {
    thChild.classList.remove('hovered')
    thChild.classList.add('closed')
})

mountainEL.addEventListener('mouseenter', () => {
    mountainChild.classList.remove('closed')
    mountainChild.classList.add('hovered')
})

mountainEL.addEventListener('mouseleave', () => {
    mountainChild.classList.remove('hovered')
    mountainChild.classList.add('closed')
})