// Change Background Color
document.getElementById("bgButton").addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
});

// Function to Generate Random Color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Toggle Visibility of Text
document.getElementById("toggleBtn").addEventListener("click", function() {
    let text = document.getElementById("toggleText");
    text.style.display = (text.style.display === "none" || text.style.display === "") ? "block" : "none";
});

// Form Validation
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("formMessage");

    if (username === "" || email === "") {
        message.style.color = "red";
        message.textContent = "All fields are required!";
    } else {
        message.style.color = "green";
        message.textContent = "Form submitted successfully!";
    }
});
