// TAB SWITCHING
function showTab(id) {
  // Hide all tabs
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });
  
  // Show the selected tab
  document.getElementById(id).classList.add("active");
  
  // Highlight the active tab button
  document.querySelectorAll(".tabs button").forEach(btn => {
    btn.classList.remove("active");
  });
  
  const activeBtn = Array.from(document.querySelectorAll(".tabs button")).find(btn => 
    btn.getAttribute("onclick").includes(`'${id}'`)
  );
  
  if (activeBtn) {
    activeBtn.classList.add("active");
  }
}

// PRODUCT DATA - add new shirts here easily
const products = [
  {
    name: "Falcon Pride",
    image: "https://via.placeholder.com/300x200?text=Falcon+Pride"
  },
  {
    name: "Senior 2026",
    image: "https://via.placeholder.com/300x200?text=Senior+2026"
  },
  {
    name: "Eagle Athletics",
    image: "https://via.placeholder.com/300x200?text=Eagle+Athletics"
  }
  // Example of adding more:
  // {
  //   name: "Patriots Forever",
  //   image: "https://via.placeholder.com/300x200?text=Patriots+Forever"
  // }
];

// RENDER PRODUCTS INTO THE GRID
const grid = document.getElementById("product-grid");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product";

  card.innerHTML = `
    <img src="${p.image}" alt="${p.name} T-Shirt">
    <h3>${p.name}</h3>

    <select>
      <option>T-Shirt</option>
      <option>Hoodie</option>
      <option>Long Sleeve</option>
    </select>

    <button onclick="openOrderModal('${p.name}')">Order Now</button>
  `;

  grid.appendChild(card);
});

// MODAL FUNCTIONALITY
const orderModal = document.getElementById("order-modal");
const closeModal = document.querySelector(".close");

closeModal.onclick = function() {
  orderModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === orderModal) {
    orderModal.style.display = "none";
  }
};

function openOrderModal(shirtName) {
  document.getElementById("modal-shirt-name").textContent = shirtName;
  document.getElementById("shirt-input").value = shirtName;
  orderModal.style.display = "flex";  // Use flex to center it nicely
}

// Set the default tab to "about" when page loads
document.addEventListener("DOMContentLoaded", function() {
  showTab("about");
});
