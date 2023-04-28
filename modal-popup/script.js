let openBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");
let footerCloseBtn = document.getElementById("footer-close-btn");
let popupContainer = document.querySelector(".popup-container");

openBtn.addEventListener("click", () => {
  popupContainer.classList.add("blur");
  popupContainer.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popupContainer.style.display = "none";
});

footerCloseBtn.addEventListener("click", () => {
  popupContainer.style.display = "none";
});
