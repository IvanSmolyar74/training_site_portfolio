const burgerMenu = document.querySelector(".burger_menu"),
  translateBtn = document.querySelectorAll("[data-translate]");

burgerMenu.addEventListener("click", () => {
  document
    .querySelector(".section-header__navigation__mobile")
    .classList.toggle("active");
  burgerMenu.classList.toggle("active");

  document.body.classList.toggle("lock");
});

translateBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    translateText();
  })
);

const translateText = () => {
  const elementToTranslate = document.querySelectorAll("[data-text]");
  elementToTranslate.forEach(
    (element) =>
      ([element.textContent, element.dataset.text] = [
        element.dataset.text,
        element.textContent,
      ])
  );
};
