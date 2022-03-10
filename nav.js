// window.addEventListener('scroll', () => {
// const nav = document.querySelector('.navigation');
// nav.classList.toggle('sticky-nav', window.scrollY > 48)
// });

const showNavigation = () => {
  const navigation = document.querySelector(".navigation__links");
  const burger = document.querySelector(".navigation__burger");
  const links = document.querySelectorAll(".navigation__link");
  burger.addEventListener("click", () => {
    navigation.classList.toggle("nav-active");

    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `links-slide 0.4s ease forwards ${index / 8}s`;
      }
    });

    burger.classList.toggle("burger-active");
  });

  const languagePicker = document.querySelector(".navigation__language-picker");
  const languagePickerOverlay = document.querySelector(".navigation__overlay");
  languagePicker.addEventListener("click", (e) => {
    e.preventDefault();
    languagePickerOverlay.classList.toggle("language-picker-active");
  });

  languagePicker.addEventListener("keypress", (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      languagePickerOverlay.classList.toggle("language-picker-active");
    }
  });
};

showNavigation();
