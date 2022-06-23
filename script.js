"use strict";
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const closeIcon = document.querySelector(".closeIcon");
const overlay = document.querySelector(".overlay");
hamburgerIcon.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  hamburgerIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");
});
closeIcon.addEventListener("click", function () {
  overlay.classList.add("hidden");
  hamburgerIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
});
