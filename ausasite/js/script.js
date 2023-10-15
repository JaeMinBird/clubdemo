//remove bamboo on smaller windows
const elementsToRemove = document.querySelectorAll('.bamboo');

function removeElementsIfWidthBelowThreshold() {
  if (window.innerWidth <= 991) {
    elementsToRemove.forEach((element) => {
      element.remove();
    });
  }
}

// Call the function initially and add an event listener to handle window resizing
removeElementsIfWidthBelowThreshold();
window.addEventListener('resize', removeElementsIfWidthBelowThreshold);


//parallax for eboard cards
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelector('.hidden').classList.add('show');
    } else {
      entry.target.querySelector('.hidden').classList.remove('show');
    }
  });
});

const hiddenTrigger = document.querySelector('.hidetrig');
observer2.observe(hiddenTrigger);


// Function to toggle the hamburger menu animation
function toggleMenuAnimation() {
    const icon = document.querySelector('.animated-icon2'); // Change to appropriate selector
  
    if (icon.classList.contains('open')) {
      icon.classList.remove('open');
    } else {
      icon.classList.add('open');
    }
}
  
// Click event listener for menu button
const menuButton = document.querySelector('.navbar-toggler');
menuButton.addEventListener('click', toggleMenuAnimation);