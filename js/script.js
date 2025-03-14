import check from '../assets/check.svg';
import star from '../assets/star.svg';
import sushi12 from '../assets/sushi-12.png';
import sushi11 from '../assets/sushi-11.png';
import sushi10 from '../assets/sushi-10.png';
import AOS from 'aos';
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi',
];

const cards = [
    {
        imgSrc: "sushi-12",
        alt: 'Sushi 12',
        title: 'Chezu Sushi',
        rating: 4.8,
        price:"$21.00",
    },
    {
        imgSrc: "sushi-11",
        alt: 'Sushi 11',
        title: 'Originale Sushi',
        rating: 4.5,
        price:"$19.00",
    },
    {
        imgSrc: "sushi-10",
        alt: 'Sushi 10',
        title: 'Ramen Legendo',
        rating: 4.1,
        price:"$15.46",
    },
];

// const popular = document.querySelector('.popular-foods__catalog');

// popular.innerHTML = cards.map((card) => {
//     return `
//     <article class="${card.alt === 'Sushi 11' ? 'popular-foods__card active-card' : 'popular-foods__card'}">
//           <img class="popular-foods__card-image" src="assets/${card.imgSrc}.png" alt=${card.alt}>

//           <h4 class="popular-foods__card-title">${card.title}</h4>

//           <div class="popular-foods__card-details flex-between">
//             <div class="popular-foods__card-rating">
//               <img src="assets/star.svg" alt="star">

//               <p>${card.rating}</p>
//             </div>

//             <p class="popular-foods__card-price">${card.price}</p>
//           </div>
//         </article>
//     `;
// });