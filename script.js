document.getElementById("year").textContent = new Date().getFullYear();

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    formStatus.textContent = "Por favor, completa los campos obligatorios (*).";
    formStatus.className = "form-status error";
    form.reportValidity();
    return;
  }

  formStatus.textContent =
    "✓ ¡Mensaje enviado! Te llamaremos lo antes posible. " +
    "Si prefieres, llámanos directamente al 605 89 91 35.";
  formStatus.className = "form-status ok";
  form.reset();
});
