document.getElementById("openMenu").addEventListener("click", function() {
  document.getElementById("sidebar").classList.add("show");
  document.querySelector(".content").classList.add("blur-background"); // Add blur effect
});

document.getElementById("closeMenu").addEventListener("click", function() {
  document.getElementById("sidebar").classList.remove("show");
  document.querySelector(".content").classList.remove("blur-background"); // Remove blur effect
});
  