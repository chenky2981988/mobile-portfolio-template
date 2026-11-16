// Keep keyboard focus clear of the fixed mobile dock (WCAG 2.4.11).
// Checks after the browser's own (possibly smooth) focus scroll has settled.
function clearDock(el) {
  const dock = document.querySelector(".dock");
  if (!dock || !(el instanceof Element) || dock.contains(el) || document.activeElement !== el || getComputedStyle(dock).display === "none") return;
  const d = dock.getBoundingClientRect(), r = el.getBoundingClientRect();
  if (r.bottom > d.top - 8 && r.top < d.bottom) window.scrollBy({ top: r.bottom - d.top + 24, behavior: "instant" });
}
document.addEventListener("focusin", (e) => {
  const el = e.target;
  requestAnimationFrame(() => clearDock(el));
  setTimeout(() => clearDock(el), 450);
});
