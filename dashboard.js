const user = localStorage.getItem("loggedInUser");

if (user) {
    document.getElementById("userName").textContent = "Administrator: " + user;
}

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

function addProduct() {

    const pid = document.getElementById("pid").value;
    const pname = document.getElementById("pname").value;
    const pcategory = document.getElementById("pcategory").value;
    const pquantity = parseInt(document.getElementById("pquantity").value);
    const pprice = document.getElementById("pprice").value;

    if (!pid || !pname || !pcategory || !pquantity || !pprice) {
        alert("Please fill all fields!");
        return;
    }

    const table = document.querySelector("#productTable tbody");
    const row = document.createElement("tr");

    let status = "";
    if (pquantity > 0) {
        status = `<span style="color:green;">In Stock</span>`;
    } else {
        status = `<span style="color:red;">Out of Stock</span>`;
    }

    row.innerHTML = `
        <td>${pid}</td>
        <td>${pname}</td>
        <td>${pcategory}</td>
        <td>${pquantity}</td>
        <td>$${pprice}</td>
        <td>${status}</td>
        <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
    `;

    table.appendChild(row);

    updateDashboard();

    document.getElementById("pid").value = "";
    document.getElementById("pname").value = "";
    document.getElementById("pcategory").value = "";
    document.getElementById("pquantity").value = "";
    document.getElementById("pprice").value = "";
}

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
    updateDashboard();
}

function updateDashboard() {

    const rows = document.querySelectorAll("#productTable tbody tr");

    let total = rows.length;
    let inStock = 0;
    let outStock = 0;

    rows.forEach(row => {
        const quantity = parseInt(row.children[3].textContent);
        if (quantity > 0) {
            inStock++;
        } else {
            outStock++;
        }
    });

    document.getElementById("totalProducts").textContent = total;
    document.getElementById("inStock").textContent = inStock;
    document.getElementById("outStock").textContent = outStock;
}
