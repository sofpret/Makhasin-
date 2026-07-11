window.__toggleTheme=function(){const t=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t),document.querySelectorAll(".theme-icon-dark").forEach(n=>{n.style.display=t==="dark"?"none":"block"}),document.querySelectorAll(".theme-icon-light").forEach(n=>{n.style.display=t==="dark"?"block":"none"})};const c=document.documentElement.getAttribute("data-theme");document.querySelectorAll(".theme-icon-dark").forEach(e=>{e.style.display=c==="dark"?"none":"block"});document.querySelectorAll(".theme-icon-light").forEach(e=>{e.style.display=c==="dark"?"block":"none"});const d=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("visible"),d.unobserve(t.target))})},{threshold:.1});document.querySelectorAll(".reveal").forEach(e=>d.observe(e));function m(e){const t=e.dataset.text||e.textContent||"",n=parseInt(e.dataset.speed||"38");e.textContent="",e.style.opacity="1";const r=document.createElement("span");r.className="tw-cursor",e.appendChild(r);let o=0;const s=setInterval(()=>{o<t.length?(e.insertBefore(document.createTextNode(t[o]),r),o++):(clearInterval(s),setTimeout(()=>r.remove(),1200))},n)}const l=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&!t.target.classList.contains("tw-done")&&(t.target.classList.add("tw-done"),m(t.target),l.unobserve(t.target))})},{threshold:.3});document.querySelectorAll(".typewriter").forEach(e=>{e.dataset.text||(e.dataset.text=e.textContent?.trim()||""),e.textContent="",e.classList.add("tw-ready"),l.observe(e)});function u(){if(window.matchMedia("(pointer: coarse)").matches)return;const e=document.createElement("div");e.style.cssText=`
    position: fixed;
    width: 6px;
    height: 6px;
    background: #7c3aed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: left 0.06s ease, top 0.06s ease;
  `;const t=document.createElement("div");t.style.cssText=`
    position: fixed;
    width: 28px;
    height: 28px;
    border: 1px solid rgba(124,58,237,0.4);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: left 0.18s ease, top 0.18s ease, width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
  `,document.body.appendChild(e),document.body.appendChild(t);let n=-100,r=-100;document.addEventListener("mousemove",s=>{n=s.clientX,r=s.clientY,e.style.left=n+"px",e.style.top=r+"px",t.style.left=n+"px",t.style.top=r+"px"}),document.querySelectorAll("a, button, .card, .social-item, .tl-item, .project-card, .interest-card, .chip").forEach(s=>{s.addEventListener("mouseenter",()=>{t.style.width="44px",t.style.height="44px",t.style.opacity="0.7"}),s.addEventListener("mouseleave",()=>{t.style.width="28px",t.style.height="28px",t.style.opacity="1"})})}function h(){if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){const e=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(n.target.style.opacity="1",n.target.style.transform="translateY(0)",e.unobserve(n.target))})},{threshold:.05});document.querySelectorAll(".fade-up").forEach(t=>{t.style.opacity="0",t.style.transform="translateY(24px)",t.style.transition="opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",e.observe(t)})}}document.addEventListener("DOMContentLoaded",()=>{u(),h()});const a=document.getElementById("hamburger"),p=document.getElementById("mobile-menu"),i=document.getElementById("navbar");a?.addEventListener("click",()=>{const e=p?.classList.toggle("open");a.setAttribute("aria-expanded",String(e)),a.classList.toggle("is-open",e??!1)});window.addEventListener("scroll",()=>{i&&i.classList.toggle("navbar--scrolled",window.scrollY>window.innerHeight*.82)},{passive:!0});
