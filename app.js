// ******** DROP-DOWN MENU ********

function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("show-menu");

  const downIcon = dropdown.parentElement.querySelector("#down-icon");

  if (!downIcon.classList.contains("rotate-icon")) {
    downIcon.classList.add("rotate-icon");
  } else {
    downIcon.classList.remove("rotate-icon");
  }
}

// ******** IMAGE SLIDER ********

const sliderDots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
let intervalId;

// automatically move slider every 5 seconds

function startSlider() {
  intervalId = setInterval(() => {
    if (currentSlide >= slides.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    moveSlider(currentSlide);
  }, 5000);
}

function moveSlider(index) {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
  activateSliderDots(index);
}

function activateSliderDots(index) {
  sliderDots.forEach((dot) => {
    dot.classList.remove("active");
  });
  sliderDots[index].classList.add("active");
}

function stopSlider() {
  clearInterval(intervalId);
}

// manually move slider via dots

sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    stopSlider();
    moveSlider(index);
  });
});

// anually move slider via arrows

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

arrowLeft.addEventListener("click", () => {
  stopSlider();
  if (currentSlide <= 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  moveSlider(currentSlide);
});

arrowRight.addEventListener("click", () => {
  stopSlider();
  if (currentSlide >= slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  moveSlider(currentSlide);
});

startSlider();
