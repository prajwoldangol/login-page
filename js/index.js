const darkButton = document.getElementById("dark-mode");
const light = document.getElementById("light-mode");

darkButton.addEventListener("click", () => {
  document.body.classList.add("dark-mode");
});
light.addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
});
