// Extract data from form
function submitForm(event) {
  event.preventDefault(); // Prevent the form from reloading the page
  
  // Get the form data
  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;
  
  // Do something with the data
  console.log("Name:", name);
  console.log("Email:", email);
}