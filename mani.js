document
  .getElementById("darkModeToggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".header").classList.toggle("dark-mode");
    document.querySelector("footer").classList.toggle("dark-mode");
  });
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
    });
  });
window.addEventListener("scroll", function () {
  document.getElementById("backToTop").style.display =
    window.scrollY > 300 ? "block" : "none";
});

document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.querySelectorAll(".dropdown-toggle").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    let dropdown = this.nextElementSibling;
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    document.querySelector(".header").classList.add("shrink");
  } else {
    document.querySelector(".header").classList.remove("shrink");
  }
});


AOS.init();
// JavaScript
