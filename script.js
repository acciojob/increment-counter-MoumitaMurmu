//your JS code here. If required.
// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the counter element and button element
    const counterElement = document.getElementById("counter");
    const incrementBtn = document.getElementById("incrementBtn");

    // Set the initial counter value
    let counterValue = 0;

    // Function to update the counter text
    function updateCounter() {
        counterElement.textContent = counterValue;
    }

    // Function to handle button click
    function handleIncrementClick() {
        // Display an alert with the un-incremented value
        alert(counterValue);

        // Increment the counter value
        counterValue++;

        // Update the counter text
        updateCounter();
    }

    // Add click event listener to the button
    incrementBtn.addEventListener("click", handleIncrementClick);

    // Initial update of the counter text
    updateCounter();
});
