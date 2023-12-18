// const slidesContainer = document.getElementById("slides-container");
// const slide = document.querySelector(".slide");
// // const prevButton = document.getElementById("slide-arrow-prev");
// const nextButton = document.getElementById("slide-arrow-next");

// nextButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft += slideWidth;
// });

// prevButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft -= slideWidth;
// });

let slideIndex = 1;
function showSlide(index) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (index < 1) {
    slideIndex = slides.length;
  } else if (index > slides.length) {
    slideIndex = 1;
  } else {
    slideIndex = index;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "flex";

  dots[slideIndex - 1].classList.add("active");
}

showSlide(slideIndex);

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function currentSlide(index) {
  showSlide(index);
}

//Navbar-toggle

const navIcon = document.querySelector(".nav-icon");
const navLinks = document.querySelector(".nav-links");
navIcon.addEventListener("click", () => {
  navIcon.classList.toggle("nav-active");
  navLinks.classList.toggle("nav-links");
});
