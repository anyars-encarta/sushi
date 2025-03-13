import check from '../assets/check.svg';
import star from '../assets/star.svg';
import sushi12 from '../assets/sushi-12.png';
import sushi11 from '../assets/sushi-11.png';
import sushi10 from '../assets/sushi-10.png';

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
        imgSrc: sushi12,
        alt: 'Sushi 12',
        title: 'Chezu Sushi',
        rating: 4.8,
        price:"$21.00",
    },
    {
        imgSrc: sushi11,
        alt: 'Sushi 11',
        title: 'Originale Sushi',
        rating: 4.5,
        price:"$19.00",
    },
    {
        imgSrc: sushi10,
        alt: 'Sushi 10',
        title: 'Ramen Legendo',
        rating: 4.1,
        price:"$15.46",
    },
];