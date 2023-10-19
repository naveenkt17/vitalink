const menuButton = document.querySelector(".menu-btn");
const navBar = document.querySelector(".top-navbar");
menuButton.addEventListener("click", () => {
  if (!navBar.classList.contains("nav-close")) {
    navBar.classList.add("nav-close");
  } else {
    navBar.classList.remove("nav-close");
  }
});

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // The target element is now in the viewport
      animateValue(obj, 0, 200, 1000);
      animateValue(obj1, 0, 20, 1000);
      animateValue(obj2, 0, 5, 1000);
      observer.unobserve(entry.target); // Stop observing once it's visible
    }
  });
}

const options = {
  root: null,
  threshold: 0,
};

const observer1 = new IntersectionObserver(handleIntersection, options);
const targetElement1 = document.querySelector(".others");
observer1.observe(targetElement1);

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.querySelector(".emp-num");
const obj1 = document.querySelector(".cient-num");
const obj2 = document.querySelector(".yib-num");


const quickForm = document.querySelector(".quick-form-grp");
const overlayBg = document.querySelector(".overlay-popup");
const openPopup = () => {
  quickForm.classList.add("on-pop");
  overlayBg.classList.add("on-pop");
};
const closePopup = () => {
  quickForm.classList.remove("on-pop");
  overlayBg.classList.remove("on-pop");
};
const submitPopup = (e) => {
    e.preventDefault(); 
    quickForm.classList.remove("on-pop");
    overlayBg.classList.remove("on-pop");
};
