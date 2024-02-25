// Define the correct password
const correctPassword = "synergymm2024";

// Prompt the user for a password
const enteredPassword = prompt("Enter the password to access the website:");

// Check if the entered password matches the correct password
if (enteredPassword === correctPassword) {
    // Password is correct, redirect to the new page
    window.location.href = "mentor-chart.html";
} else {
    // Password is incorrect, deny access to the website
    // You can redirect the user to an error page or reload the current page
    window.location.reload();
}
