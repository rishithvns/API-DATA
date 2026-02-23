const userContainer = document.getElementById("userContainer");
const errorMessage = document.getElementById("errorMessage");
const reloadBtn = document.getElementById("reloadBtn");

function fetchUsers() {

    userContainer.innerHTML = "";
    errorMessage.textContent = "";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            data.forEach(user => {
                const userCard = document.createElement("div");
                userCard.classList.add("user-card");

                userCard.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> 
                        ${user.address.street}, 
                        ${user.address.city}
                    </p>
                `;

                userContainer.appendChild(userCard);
            });
        })
        .catch(error => {
            errorMessage.textContent = "Failed to fetch data. Check your internet connection.";
        });
}

// Load data on page load
fetchUsers();

// Reload button
reloadBtn.addEventListener("click", fetchUsers);