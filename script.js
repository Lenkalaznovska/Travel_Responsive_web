// Událost "DOMContentLoaded" se aktivuje, když je celý HTML dokument načtený a zpracovaný.
document.addEventListener("DOMContentLoaded", () => {
  // Najde prvek s třídou "hamburger-menu" a uloží ho do proměnné "hamburgerMenu".
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  
  // Najde seznam odkazů v navigaci (prvek <ul> uvnitř <nav>) a uloží ho do proměnné "navLinks".
  const navLinks = document.querySelector("nav ul");

  // Přidá událost "click" na prvek "hamburgerMenu".
  hamburgerMenu.addEventListener("click", () => {
    // Přepne třídu "show" na prvek "navLinks".
    navLinks.classList.toggle("show");
  });
});
