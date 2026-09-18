const DARKEN_AT = window.innerHeight * 0.4;

function updateScrollState() {
  document.body.classList.toggle("scrolled", window.scrollY > DARKEN_AT);
}

window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();
