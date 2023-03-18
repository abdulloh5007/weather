const inp1 = document.querySelector('.inp-1')
const inp2 = document.querySelector('.inp-2')
const box = document.querySelector('.box')

const sun = document.querySelector('.weather--sun')
const thunder = document.querySelector('.weather--thunder')
const snow = document.querySelector('.weather--snow')
const rainbow = document.querySelector('.weather--rainbow')

inp1.addEventListener('keyup', (e) => {
    box.style.borderRadius = e.target.value
    box.style.background = e.target.value
    box.style.backgroundImage = `url(${e.target.value})`
})

inp2.addEventListener('keyup', (e) => {
    let target = e.target.value.toLowerCase()
    if (target == 'issiq' || target == 'жарко') {
        // let all = thunder && snow && rainbow
        hideElements(thunder, snow, rainbow)
        sun.style.display = 'flex'
    }
    if (target == 'yongir' || target == 'дождь') {
        hideElements(sun, snow, rainbow)
        thunder.style.display = 'flex'
    }
    if (target == 'qor' || target == 'снег') {
        hideElements(sun, thunder, rainbow)
        snow.style.display = 'flex'
    }
    if (target == 'kamalak' || target == 'радуга') {
        hideElements(sun, thunder, snow)
        rainbow.style.display = 'flex'
    }
})

function hideElements(element1, element2, element3) {
    element1.style.display = 'none';
    element2.style.display = 'none';
    element3.style.display = 'none';
}
