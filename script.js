document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const sendBtn = document.getElementById("send-btn");
    const loader = document.getElementById("loader");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");
  
    // Initialize EmailJS with your Public Key
    emailjs.init("UwBuhoUN_NrILP9Gu"); // Replace with your actual Public Key
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload
  
      // Show loader and disable button
      loader.classList.remove("hidden");
      sendBtn.disabled = true;
      successMessage.classList.add("hidden");
      errorMessage.classList.add("hidden");
  
      const templateParams = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
      };
  
      // Send email using EmailJS
      emailjs.send("service_laiwlvo", "template_aostaoy", templateParams)
        .then(() => {
          successMessage.textContent = "Your message has been sent successfully!";
          successMessage.classList.remove("hidden");
          form.reset(); // Reset form fields
        })
        .catch(() => {
          errorMessage.textContent = "Failed to send your message. Please try again.";
          errorMessage.classList.remove("hidden");
        })
        .finally(() => {
          loader.classList.add("hidden");
          sendBtn.disabled = false;
        });
    });
  });
  


  document.getElementById('hamburger').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
  });