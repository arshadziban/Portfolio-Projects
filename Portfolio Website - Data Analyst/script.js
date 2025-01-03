// Smooth scrolling for navigation links
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1); // Get target section ID
    const targetSection = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - 50, // Adjust scroll position for navbar
      behavior: 'smooth'
    });
  });
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  let valid = true;
  const name = form.querySelector('input[type="text"]');
  const email = form.querySelector('input[type="email"]');
  const subject = form.querySelector('input[type="text"]:nth-of-type(2)');
  const message = form.querySelector('textarea');
  
  // Validate name
  if (name.value.trim() === '') {
    valid = false;
    alert('Please enter your name');
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    valid = false;
    alert('Please enter a valid email address');
  }

  // Validate subject
  if (subject.value.trim() === '') {
    valid = false;
    alert('Please enter a subject');
  }

  // Validate message
  if (message.value.trim() === '') {
    valid = false;
    alert('Please enter a message');
  }

  // If everything is valid, submit the form (you can replace this with actual form submission logic)
  if (valid) {
    alert('Your message has been sent!');
    form.reset(); // Reset form after successful submission
  }
});
