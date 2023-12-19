//Navbar-toggle
const navIcon = document.querySelector(".nav-icon");
const navLinks = document.querySelector(".nav-links");
navIcon.addEventListener("click", () => {
  navIcon.classList.toggle("nav-active");
  navLinks.classList.toggle("nav-links");
});

//form validation
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const company = document.querySelector("#company");
const btnSubmit = document.querySelector(".btn-submit");
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (validate()) {
    window.location.href = "./thankyou.html";
  }
});

const validateField = (input) => {
  const value = input.value.trim();
  if (value === "") {
    const inpGroup = input.parentElement;
    const tooltpError = inpGroup.querySelector(".tooltip-form");
    tooltpError.style.display = "block";
    setTimeout(() => {
      tooltpError.style.display = "none";
    }, 2000);
    return false;
  } else {
    const inpGroup = input.parentElement;
    const tooltipError = inpGroup.querySelector(".tooltip-form");

    tooltipError.style.display = "none";
    input.value = "";

    return true;
  }
};

const validate = () => {
  return (
    validateField(fname) &&
    validateField(lname) &&
    validateField(email) &&
    validateField(company)
  );
};

//video modal
var modal = document.getElementById("myModal");

var btn = document.getElementById("playbttn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//carousel slide
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

//carousel slider
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
