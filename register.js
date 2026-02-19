
function RegisterAccount(event) {
    event.preventDefault(); // Guhagarika form kudasubira hejuru

    // Fata values
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Reba niba password zihuye
    if (password !== confirmPassword) {
        alert("Passwords do not match ❌");
        return;
    }

    // Bika user muri localStorage
    localStorage.setItem("userFullName", fullname);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account Created Successfully ✅");

    // Jya kuri login page
    window.location.href = "login.html";
}