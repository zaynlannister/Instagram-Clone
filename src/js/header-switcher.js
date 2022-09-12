const items = document.querySelectorAll('.header-nav__item');

items.forEach(item => {
    item.addEventListener('click', () => {
      switcher(item)
    })
})

function switcher(item) {
    items.forEach(item => {
        item.classList.remove('active')
    })
    item.classList.add('active')
}