// One 200ms opacity fade per section, the first time it enters view.
// No movement, blur or scale. Does nothing under prefers-reduced-motion,
// and sections already on screen at load are never hidden.
// No layout reads at load: IntersectionObserver reports each section's position
// asynchronously, so there is no forced reflow (keeps Total Blocking Time low).
(function () {
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var seen = new WeakSet();
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var s = e.target;
      if (!seen.has(s)) {
        // First report for this section: hide it only if it starts below the viewport.
        seen.add(s);
        if (!e.isIntersecting && e.rootBounds && e.boundingClientRect.top >= e.rootBounds.bottom) {
          s.classList.add("fade-pending");
          return;
        }
        io.unobserve(s);
        return;
      }
      if (e.isIntersecting) {
        s.classList.remove("fade-pending");
        io.unobserve(s);
      }
    });
  }, { threshold: 0.01 });
  document.querySelectorAll("[data-fade]").forEach(function (s) { io.observe(s); });
  // Never keep focused content invisible.
  document.addEventListener("focusin", function (e) {
    var s = e.target.closest && e.target.closest(".fade-pending");
    if (s) { s.classList.remove("fade-pending"); io.unobserve(s); }
  });
})();
