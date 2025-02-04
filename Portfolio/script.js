// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", () => {
    // Dark Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      // Toggle icon
      themeToggle.innerHTML = document.body.classList.contains("dark")
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
    });
  
    // Smooth Scrolling for Nav Links
    const navLinks = document.querySelectorAll(".nav-item");
    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
        // Update active class
        document.querySelector(".nav-item.active")?.classList.remove("active");
        link.classList.add("active");
      });
    });
  
    // Portfolio Filter
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Remove active from other buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        const filter = button.getAttribute("data-filter");
  
        portfolioItems.forEach(item => {
          if (filter === "all" || item.getAttribute("data-category") === filter) {
            item.style.display = "block";
            // Adding fade in animation
            item.style.animation = "fadeIn 0.5s ease forwards";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  
    // Scroll-to-Top Button
    const scrollBtn = document.getElementById("scrollToTop");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Contact Form Validation
    const contactForm = document.getElementById("contactForm");
    const formSuccess = document.getElementById("formSuccess");
  
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      let isValid = true;
  
      // Validate each input
      const fields = [
        { id: "name", name: "Name" },
        { id: "email", name: "Email" },
        { id: "message", name: "Message" }
      ];
  
      fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorMessage = input.nextElementSibling;
        if (!input.value.trim()) {
          errorMessage.textContent = `${field.name} is required`;
          isValid = false;
        } else {
          // For email, check valid pattern
          if (field.id === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value.trim())) {
              errorMessage.textContent = `Please enter a valid email`;
              isValid = false;
            } else {
              errorMessage.textContent = "";
            }
          } else {
            errorMessage.textContent = "";
          }
        }
      });
  
      if (isValid) {
        formSuccess.textContent = "Thank you for reaching out!";
        // Clear form fields after submission
        contactForm.reset();
        setTimeout(() => (formSuccess.textContent = ""), 5000);
      }
    });
  });
  