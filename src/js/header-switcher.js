const iconItems = document.querySelectorAll('.header-nav__item');

iconItems.forEach(item => {
    item.addEventListener('click', () => {
      switcher(item)
    })
})

function switcher(item) {
    iconItems.forEach(item => {
        item.classList.remove('active')
    })
    item.classList.add('active')
}