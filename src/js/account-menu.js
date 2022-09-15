import { iconItems } from './header-switcher';

export const accountImage = document.querySelector('.header__account');

accountImage.addEventListener('click', toggleMenu);

function toggleMenu() {
    accountImage.classList.toggle('active')

    removeActiveClass()
}

function removeActiveClass() {
    iconItems.forEach(item => {
        item.classList.remove('active');
    })
}