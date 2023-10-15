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
      animateValue(obj, 0, 1200, 3000);
      animateValue(obj1, 0, 120, 3000);
      animateValue(obj2, 0, 23, 3000);
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

// accordion
const accordionItems = document.querySelectorAll(".accordion-item");
// Add click event listeners to each accordion button
accordionItems.forEach((item) => {
  const button = item.querySelector(".accordion-button");
  const content = item.querySelector(".accordion-content");

  button.addEventListener("click", () => {
    // Check if the clicked item is already active
    if (!item.classList.contains("active")) {
      // Close all open sections
      accordionItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
        otherItem.querySelector(".accordion-content").style.display = "none";
      });

      // Open the clicked item
      item.classList.add("active");
      content.style.display = "block";
    } else {
      // Close the clicked item
      item.classList.remove("active");
      content.style.display = "none";
    }
  });
});

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
