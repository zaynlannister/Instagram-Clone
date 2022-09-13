const headerInput = document.querySelector('.header-search__input');

headerInput.addEventListener('focus', () => {
    headerInput.classList.add('active')
})

headerInput.addEventListener('focusout', () => {
    headerInput.classList.remove('active')
})