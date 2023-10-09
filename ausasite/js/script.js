//parallax
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Function to toggle the hamburger menu animation
function toggleMenuAnimation() {
    const icon = document.querySelector('.animated-icon2'); // Change to the appropriate selector
  
    if (icon.classList.contains('open')) {
      icon.classList.remove('open');
    } else {
      icon.classList.add('open');
    }
}
  
// Add a click event listener to the menu button
const menuButton = document.querySelector('.navbar-toggler');
menuButton.addEventListener('click', toggleMenuAnimation);