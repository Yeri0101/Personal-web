import { showMore } from "./components/cards.js";
import { addAnimatedTextListener } from "./components/animationSection.js";

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector(".dropdown-content");
  const barsMenu = document.querySelector(".bars__menu");
  const line1__bars = document.querySelector(".Line1-Bars-menu");
  const line2__bars = document.querySelector(".Line2-Bars-menu");
  const line3__bars = document.querySelector(".Line3-Bars-menu");
  const navbarContainer = document.querySelector(".navbar-container");

  // selectores para la funcion addAnimatedTextListener

  addAnimatedTextListener("btn-about-me", "#about-me-title");
  addAnimatedTextListener("btn-projects", ".project-title");
  addAnimatedTextListener("btn-contact", ".network");

  //-------------------------------------------------------

  showMore();

  document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
  });

  let prevScrollposition = window.pageYOffset;

  // Hide the navigation bar when the user clicks the menu button
  barsMenu.addEventListener("click", animateBars);

  function animateBars() {
    line1__bars.classList.toggle("activeLine1-Bars-menu");
    line2__bars.classList.toggle("activeLine2-Bars-menu");
    line3__bars.classList.toggle("activeLine3-Bars-menu");
  }

  //------------------------------

  function adjustMenu() {
    if (window.innerWidth >= 800) {
      dropdownContent.style.display = "block";
      // If the screen size is greater than or equal to 800px, remove the "click" event listener on the dropdown
      dropdown.removeEventListener("click", toggleDropdown);
    } else if (window.innerWidth < 800) {
      // If the screen size is less than 800px, add the "click" event listener on the dropdown
      barsMenu.addEventListener("click", toggleDropdown); // Added for mobile devices
    }

    // If the screen size is less than 800px and the dropdown is currently visible, change its style to display: none
    if (window.innerWidth < 800 && dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }

  //------------------------------

  // Define the function used as the "click" event listener

  function toggleDropdown() {
    dropdownContent.classList.toggle("active");

    if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
    }
  }

  // Call the function when the page loads
  adjustMenu();

  // Call the function whenever the browser window size changes
  window.addEventListener("resize", adjustMenu);

  //------------------------------

  // -----------------------------------------------

  //------------------------------

  function scrollToSection(event) {
    event.preventDefault();

    const targetId = event.target.getAttribute("id");
    let targetElement;

    if (targetId === "btn-about-me") {
      targetElement = document.querySelector(".about-me-content");
    } else if (targetId === "btn-projects") {
      targetElement = document.querySelector(".card-container-background");
    } else if (targetId === "btn-contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

      setTimeout(() => {
        const lottiePlayers = document.querySelectorAll(
          ".network lottie-player"
        );
        lottiePlayers.forEach((player) => {
          player.setAttribute("progress", 0);
          player.play();
        });
      }, 1000);

      return;
    }

    const yOffset = 0;
    const y =
      targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }

  document
    .querySelector("#btn-about-me")
    .addEventListener("click", scrollToSection);
  document
    .querySelector("#btn-projects")
    .addEventListener("click", scrollToSection);
  document
    .querySelector("#btn-contact")
    .addEventListener("click", scrollToSection);
});
