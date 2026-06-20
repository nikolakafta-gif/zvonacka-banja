import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Hero + Navbar Load-In ── */
function initHeroLoadIn() {
  const navbar = document.querySelector(".navbar");
  const heroEyebrow = document.querySelector(".hero .eyebrow");
  const heroTitle = document.querySelector(".hero__title");
  const heroSubtitle = document.querySelector(".hero__subtitle");
  const heroBtn = document.querySelector(".hero__btn");

  if (!heroTitle) return;

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  if (navbar) {
    gsap.set(navbar, { yPercent: -100, opacity: 0 });
  }
  gsap.set([heroEyebrow, heroTitle, heroSubtitle, heroBtn].filter(Boolean), {
    y: 60,
    opacity: 0,
  });

  tl.to(navbar, { yPercent: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 0.2)
    .to(heroEyebrow, { y: 0, opacity: 1, duration: 1 }, 0.4)
    .to(heroTitle, { y: 0, opacity: 1, duration: 1.2 }, 0.55)
    .to(heroSubtitle, { y: 0, opacity: 1, duration: 1 }, 0.8)
    .to(heroBtn, { y: 0, opacity: 1, duration: 0.8 }, 1.0);
}

/* ── Fade Up ── */
function initFadeUp() {
  document.querySelectorAll<HTMLElement>("[data-fade-up]").forEach((el) => {
    gsap.fromTo(el,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      }
    );
  });
}

/* ── Stagger children ── */
function initStagger() {
  document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((parent) => {
    const children = parent.children;
    gsap.fromTo(children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: parent,
          start: "top 88%",
          once: true,
        },
      }
    );
  });
}

/* ── Image Reveal ── */
function initImageReveal() {
  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((wrap) => {
    const img = wrap.querySelector("img");
    if (!img) return;

    gsap.fromTo(wrap,
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: wrap,
          start: "top 85%",
          once: true,
        },
      }
    );

    gsap.fromTo(img,
      { scale: 1.2 },
      {
        scale: 1,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrap,
          start: "top 85%",
          once: true,
        },
      }
    );
  });
}

/* ── Selector Panel Stagger (Cta) ── */
function initSelectorPanels() {
  const container = document.querySelector(".selector__panels");
  if (!container) return;

  const panels = container.querySelectorAll<HTMLElement>(".selector__panel");
  gsap.fromTo(panels,
    { x: -60, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        once: true,
      },
    }
  );
}

/* ── Init all ── */
export function initScrollAnimations() {
  if (document.documentElement.dataset.gsapInit) return;
  document.documentElement.dataset.gsapInit = "1";

  const mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    initHeroLoadIn();
    initFadeUp();
    initStagger();
    initImageReveal();
    initSelectorPanels();
  });
}
