// The "DOMContentLoaded" event is fired when the entire HTML document has been fully loaded and parsed.
document.addEventListener("DOMContentLoaded", () => {
  // Find the element with the class "hamburger-menu" and store it in the variable "hamburgerMenu".
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  
  // Find the list of navigation links (the <ul> element inside <nav>) and store it in the variable "navLinks".
  const navLinks = document.querySelector("nav ul");

  // Add a "click" event listener to the "hamburgerMenu" element.
  hamburgerMenu.addEventListener("click", () => {
    // Toggle the "show" class on the "navLinks" element.
    // This will show or hide the navigation menu depending on its current state.
    navLinks.classList.toggle("show");
  });
});
