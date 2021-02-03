const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const listItems = document.querySelectorAll(".menu li");

function toggleMenu() {
	menuToggle.classList.toggle("active");
	menu.classList.toggle("active");
}

for (var i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", toggleMenu);
}

menuToggle.addEventListener("click", toggleMenu);
