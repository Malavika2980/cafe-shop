// ================= MENU TOGGLE =================
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

function showCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItems = document.getElementById("cartItems");
  let totalSpan = document.getElementById("total");

  if (!cartItems || !totalSpan) return;

  cartItems.innerHTML = "";
  let total = 0;

  // ✅ Empty cart message
  if (cart.length === 0) {
    cartItems.innerHTML = "<p class='empty-cart'>🛒 Your cart is empty</p>";
    totalSpan.innerText = "0";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name} - ₹${item.price}</span>
        <button class="remove-btn" onclick="removeItem(${index})">✖</button>
      </div>
    `;
  });

  totalSpan.innerText = total;
}

// ✅ Remove single item
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

function placeOrder() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  localStorage.removeItem("cart");
  window.location.href = "order summary.html";
}


function goToMenu() {
  window.location.href = "menu.html"; // change if your menu page name is different
}





