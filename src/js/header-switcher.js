const items = document.querySelectorAll('.header-nav__item');

items.forEach(item => {
    item.addEventListener('click', () => {
      switcher(item)
    })
})

function switcher(item) {
    item.classList.add('active')
}