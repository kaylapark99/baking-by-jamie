/* BAKED GOODS ELEMENTS: INTERACTIVELY SWITCH BETWEEN BAKED GOOD PICTURES */
const goodies = document.querySelectorAll(".goodies-options li");
var current_goodie = document.querySelector("div.cakes");
var current_clicked = document.querySelector("li.cakes");
var change_goodie = current_goodie.classList;
var next_goodie = null;

/* NAV ELEMENTS: SMOOTHLY SCROLL TO ELEMENTS ON PAGE */
const nav = document.querySelectorAll(".nav-options li a");
const nav_height = document.querySelector(".nav").offsetHeight;
var current_loc = document.querySelector(".home");
var next_loc = null;

/* when clicked on a specific baked good li element, switch display 
pictures and toggle "clicked" for li element */
function switch_pics() {
  current_clicked.classList.remove("clicked");
  this.classList.add("clicked");
  change_goodie = this.classList;
  current_clicked = this;
  current_goodie.classList.add("hide");
  next_goodie = document.querySelector("div." + change_goodie.item(0));
  current_goodie = next_goodie;
  next_goodie.classList.remove("hide");
}

/* when clicked on specific nav link, smoothly scroll to its position on page */
function pageScroll() {
  current_loc = this.classList;
  next_loc = document.getElementById(current_loc);
  window.scrollTo({
    top: next_loc.offsetTop - nav_height,
    behavior: "smooth",
  });
}

goodies.forEach((a) => {
  a.addEventListener("click", switch_pics);
});

nav.forEach((a) => {
  a.addEventListener("click", pageScroll);
});
