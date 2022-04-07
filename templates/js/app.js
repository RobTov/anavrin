const $imgCards = document.querySelectorAll(".img-card");
const $cards = document.querySelectorAll(".card1");

const cards = [$imgCards];
for (const card in cards) {
  document.addEventListener(
    "click",

    (e) => {
      console.log(card);
    }
  );
}
