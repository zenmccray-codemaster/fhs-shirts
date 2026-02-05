// TAB SWITCHING
function showTab(id) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");

  document.querySelectorAll(".tabs button").forEach(btn => {
    btn.classList.remove("active");
  });

  const activeBtn = Array.from(document.querySelectorAll(".tabs button")).find(btn => 
    btn.getAttribute("onclick").includes(`'${id}'`)
  );
  if (activeBtn) activeBtn.classList.add("active");
}

// PRODUCT DATA - edit names or add more here
const products = [
  { name: "Falcon Pride", image: "https://via.placeholder.com/300x200?text=Falcon+Pride" },
  { name: "Senior 2026", image: "https://via.placeholder.com/300x200?text=Senior+2026" },
  { name: "Eagle Athletics", image: "https://via.placeholder.com/300x200?text=Eagle+Athletics" },
  { name: "Patriots Forever", image: "https://via.placeholder.com/300x200?text=Patriots+Forever" },
  { name: "Tampa Pride", image: "https://via.placeholder.com/300x200?text=Tampa+Pride" },
  { name: "Class of 2025", image: "https://via.placeholder.com/300x200?text=Class+of+2025" },
  { name: "Freedom Flag", image: "https://via.placeholder.com/300x200?text=Freedom+Flag" },
  { name: "Patriot Strong", image: "https://via.placeholder.com/300x200?text=Patriot+Strong" },
  { name: "School Spirit Hoodie", image: "https://via.placeholder.com/300x200?text=School+Spirit" },
  { name: "Red White Blue Classic", image: "https://via.placeholder.com/300x200?text=Red+White+Blue" },
  { name: "Athletic Dept", image: "https://via.placeholder.com/300x200?text=Athletic+Dept" },
  { name: "Customizable Patriot", image: "https://via.placeholder.com/300x200?text=Customizable" }
];

// RENDER PRODUCTS
const grid = document.getElementById("product-grid");
products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product";
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
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

// MODAL
const orderModal = document.getElementById("order-modal");
const closeModal = document.querySelector(".close");

closeModal.onclick = () => orderModal.style.display = "none";
window.onclick = (e) => { if (e.target === orderModal) orderModal.style.display = "none"; };

function openOrderModal(shirtName) {
  document.getElementById("modal-shirt-name").textContent = shirtName;
  document.getElementById("shirt-input").value = shirtName;
  orderModal.style.display = "flex";
}

// Set default tab on load
document.addEventListener("DOMContentLoaded", () => {
  showTab("about");
});
