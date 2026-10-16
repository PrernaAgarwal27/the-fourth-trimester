// The Fourth Trimester website interactions and link configuration.
// Replace the example values below with your real URLs before launch.
const SITE_LINKS = {
  workshopBooking: "", // e.g. "https://calendly.com/your-name/workshop"
  oneToOneBooking: "", // e.g. "https://calendly.com/your-name/one-to-one"
  guidePayment: "",    // e.g. your secure payment-link URL
  instagram: "",       // e.g. "https://www.instagram.com/your-page/"
  contactEmail: ""     // e.g. "mailto:hello@yourdomain.com"
};

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const toast = document.querySelector(".toast");

document.querySelector("#year").textContent = new Date().getFullYear();

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuButton.textContent = isOpen ? "×" : "☰";
});

nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  if (menuButton) { menuButton.textContent = "☰"; menuButton.setAttribute("aria-label", "Open navigation"); }
}));

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 3600);
}

document.querySelectorAll("[data-link]").forEach(link => {
  const key = link.dataset.link;
  const target = SITE_LINKS[key];
  if (target && target.trim()) {
    link.href = target;
    if (/^https?:\/\//i.test(target)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    link.classList.remove("placeholder-link");
    if (key === "contactEmail") link.href = target.startsWith("mailto:") ? target : `mailto:${target}`;
  } else {
    link.addEventListener("click", event => {
      event.preventDefault();
      showToast("This link is not connected yet. Add your booking, payment or contact URL in script.js.");
    });
  }
});
