// main.js — opsional, efek tambahan
// Aktifkan fungsi yang diperlukan di bawah

/**
 * Custom cursor — titik merah kecil yang mengikuti mouse
 * Dipanggil otomatis di bawah, hanya aktif di desktop
 */
function initCursor() {
  if (window.matchMedia("(pointer: coarse)").matches) return; // skip mobile/touch

  const dot = document.createElement("div");
  dot.style.cssText = `
    position: fixed;
    width: 6px;
    height: 6px;
    background: #dc1414;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: left 0.06s ease, top 0.06s ease;
    mix-blend-mode: normal;
  `;

  const ring = document.createElement("div");
  ring.style.cssText = `
    position: fixed;
    width: 28px;
    height: 28px;
    border: 1px solid rgba(220,20,20,0.4);
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
    dot.style.left  = mx + "px";
    dot.style.top   = my + "px";
    ring.style.left = mx + "px";
    ring.style.top  = my + "px";
  });

  // Besar saat hover interactive element
  const targets = "a, button, .card, .contact-item, .tl-item, .project-card, .interest-card";
  document.querySelectorAll(targets).forEach((el) => {
    el.addEventListener("mouseenter", () => {
      ring.style.width   = "44px";
      ring.style.height  = "44px";
      ring.style.opacity = "0.7";
    });
    el.addEventListener("mouseleave", () => {
      ring.style.width   = "28px";
      ring.style.height  = "28px";
      ring.style.opacity = "1";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initCursor();
});
