function initCursor() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const dot = document.createElement("div");
  dot.style.cssText = `
    position: fixed;
    width: 6px;
    height: 6px;
    background: #7c3aed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: left 0.06s ease, top 0.06s ease;
  `;

  const ring = document.createElement("div");
  ring.style.cssText = `
    position: fixed;
    width: 28px;
    height: 28px;
    border: 1px solid rgba(124,58,237,0.4);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: left 0.18s ease, top 0.18s ease, width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
  `;

  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mx = -100, my = -100;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top = my + "px";
    ring.style.left = mx + "px";
    ring.style.top = my + "px";
  });

  const targets = "a, button, .card, .social-item, .tl-item, .project-card, .interest-card, .chip";
  document.querySelectorAll(targets).forEach((el) => {
    el.addEventListener("mouseenter", () => {
      ring.style.width = "44px";
      ring.style.height = "44px";
      ring.style.opacity = "0.7";
    });
    el.addEventListener("mouseleave", () => {
      ring.style.width = "28px";
      ring.style.height = "28px";
      ring.style.opacity = "1";
    });
  });
}

function initSmoothReveal() {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = "1";
            e.target.style.transform = "translateY(0)";
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)";
      observer.observe(el);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initSmoothReveal();
});
