// Toogle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika cake-menu di klik
document.querySelector("#cake-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar ungtuk menghilankan nav
const cake = document.querySelector("#cake-menu");

document.addEventListener("click", function (e) {
  if (!cake.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
