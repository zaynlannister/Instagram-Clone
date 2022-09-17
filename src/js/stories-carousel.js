import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

new Swiper('.swiper', {
    slidesPerView: 5,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});