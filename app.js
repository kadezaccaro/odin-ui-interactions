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

// ******** MOBILE MENU ********

const navBtn = document.querySelector(".nav-btn");
const navLinkContainer = document.querySelector(".nav-links-container");
const navIcons = document.querySelectorAll(".nav-link");

navBtn.addEventListener("click", () => {
  navLinkContainer.classList.add("show-nav");

  navIcons.forEach((icon) => {
    icon.classList.add("show-nav");
  });

  navBtn.classList.add("hide-nav-btn");
});

navIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    navLinkContainer.classList.remove("show-nav");

    navIcons.forEach((icon) => {
      icon.classList.remove("show-nav");
    });

    navBtn.classList.remove("hide-nav-btn");
  });
});

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

startSlider();

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

// manually move slider via dots

sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    stopSlider();
    moveSlider(index);
  });
});

function stopSlider() {
  clearInterval(intervalId);
}

// manually move slider via arrows

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
