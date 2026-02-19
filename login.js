
    function login(event) {
    event.preventDefault();

    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let savedEmail = localStorage.getItem("userEmail");
    let savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
        alert("Login Successful ✅");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Email or Password ❌");
    }
}
