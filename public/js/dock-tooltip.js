// Dock tooltips (WCAG 1.4.13): Esc dismisses the visible tooltip without moving
// focus or hover; it can show again once hover/focus leaves and returns.
(function () {
  var items = document.querySelectorAll(".dock-item");
  if (!items.length) return;
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape" && e.key !== "Esc") return;
    items.forEach(function (it) {
      if (it.matches(":hover") || it.contains(document.activeElement)) it.classList.add("tip-dismissed");
    });
  });
  items.forEach(function (it) {
    it.addEventListener("mouseleave", function () { if (!it.contains(document.activeElement)) it.classList.remove("tip-dismissed"); });
    it.addEventListener("focusout", function () { if (!it.matches(":hover")) it.classList.remove("tip-dismissed"); });
  });
})();
