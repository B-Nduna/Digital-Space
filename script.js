document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get the values entered by the user
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    // Check if both fields are filled
    if (name && email) {
        // Create the message to send on WhatsApp
        let message = `Hello, my name is ${name} and my email address is ${email}. I'd like to stay updated on your projects!`;

        // WhatsApp URL with pre-filled message
        let whatsappUrl = `https://wa.me/27814588898?text=${encodeURIComponent(message)}`;

        // Open the WhatsApp chat in a new tab with the pre-filled message
        window.open(whatsappUrl, "_blank");

        // Reset the form after submission
        document.getElementById("subscribe-form").reset();
    } else {
        // Alert if form fields are empty
        alert("Please fill in all fields.");
    }
});
