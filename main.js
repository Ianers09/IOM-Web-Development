// Responsive menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Scroll animations
const fadeEls = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
fadeEls.forEach(el => fadeObserver.observe(el));

// Contact form submission
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      status.innerHTML = "Message sent successfully!";
      form.reset();
    } else {
      status.innerHTML = "Oops! Something went wrong.";
    }
  } catch {
    status.innerHTML = "Network error. Please try again.";
  }
});
