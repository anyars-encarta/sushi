import check from "../assets/check.svg";
import star from "../assets/star.svg";
import sushi12 from "../assets/sushi-12.png";
import sushi11 from "../assets/sushi-11.png";
import sushi10 from "../assets/sushi-10.png";
import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

const trendingSushis = [
  "Make Sushi",
  "Nigiri Sushi",
  "Oshizushi",
  "Temaki Sushi",
  "Uramaki Sushi",
  "Inari Sushi",
];

const trendingDrinks = [
  "Oruncha",
  "Sakura Tea",
  "Aojiru",
  "Ofukucha",
  "Kombu-cha",
  "Mugicha",
];

const cards = [
  {
    imgSrc: sushi12,
    alt: "Sushi 12",
    title: "Chezu Sushi",
    rating: 4.8,
    price: "$21.00",
  },
  {
    imgSrc: sushi11,
    alt: "Sushi 11",
    title: "Originale Sushi",
    rating: 4.5,
    price: "$19.00",
  },
  {
    imgSrc: sushi10,
    alt: "Sushi 10",
    title: "Ramen Legendo",
    rating: 4.1,
    price: "$15.46",
  },
];

const popular = document.querySelector(".popular-foods__catalog");
const trendingFood = document.querySelector(".trending__list");
const trendingDrink = document.querySelector("#drink");

popular.innerHTML = cards.map((card) => {
  return `
    <article class="${
      card.alt === "Sushi 11"
        ? "popular-foods__card active-card"
        : "popular-foods__card"
    }">
          <img class="popular-foods__card-image" src=${card.imgSrc} alt=${
    card.alt
  }>

          <h4 class="popular-foods__card-title">${card.title}</h4>

          <div class="popular-foods__card-details flex-between">
            <div class="popular-foods__card-rating">
              <img src=${star} alt="star">

              <p>${card.rating}</p>
            </div>

            <p class="popular-foods__card-price">${card.price}</p>
          </div>
        </article>
    `;
});

trendingFood.innerHTML = trendingSushis.map((sushi) => {
  return `
    <li>
      <div class="trending__icon flex-center">
        <img src=${check} alt="check" />
      </div>

      <p>${sushi}</p>
    </li>
    `;
});

trendingDrink.innerHTML = trendingDrinks.map((drink) => {
  return `
    <li>
      <div class="trending__icon flex-center">
        <img src=${check} alt="check" />
      </div>
      <p>${drink}</p>
    </li>
    `;
});
