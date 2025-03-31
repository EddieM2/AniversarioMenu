function validateLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const errorMsg = document.getElementById("error");
    
    if (user === "admin" && pass === "1234") {
        window.location.href = "menu.html"; // Redirección simulada
    } else {
        errorMsg.style.display = "block";
    }
}