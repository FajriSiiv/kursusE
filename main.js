const bars = document.querySelector(".fa-bars");
const navmenu = document.querySelector(".nav-menu");
const seleng = document.querySelector(".selengkap");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeM = document.querySelector(".ayam");
bars.addEventListener("click", function () {
  navmenu.classList.toggle("hide");
});

seleng.addEventListener("click", function () {
  overlay.classList.toggle("hideNone");
  modal.classList.toggle("hideNone");
  document.querySelector(".mod").classList.toggle("hideNone");
});
closeM.addEventListener("click", function (e) {
  overlay.classList.toggle("hideNone");
  modal.classList.toggle("hideNone");
  document.querySelector(".mod").classList.toggle("hideNone");
});

document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    overlay.classList.toggle("hideNone");
    modal.classList.toggle("hideNone");
    document.querySelector(".mod").classList.toggle("hideNone");
  }
};
