//parallax
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelector('.hidden').classList.add('show');
    } else {
      entry.target.querySelector('.hidden').classList.remove('show');
    }
  });
});

const hiddenTrigger = document.querySelector('.hidetrig');
observer.observe(hiddenTrigger);


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