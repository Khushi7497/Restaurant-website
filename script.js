const menu = [
  { id: 1, name: "Margherita Pizza", price: 250, image: "https://simplyhomecooked.com/wp-content/uploads/2023/04/Margherita-Pizza-3.jpg" },
  { id: 2, name: "Pasta Alfredo", price: 200, image: "https://showmetheyummy.com/wp-content/uploads/2015/09/Easy-Shrimp-Alfredo-Show-Me-the-Yummy-6@2x-1024x1536.jpg" },
  { id: 3, name: "Veg Burger", price: 150, image: "https://www.seriouseats.com/thmb/_c-xbP-tch4dpSTxKE1zY16sHo8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20231204-SEA-VeganBurger-FredHardy-00-dbf603c78b694bfd99489b85ab44f4c4.jpg" },
  { id: 4, name: "French Fries", price: 100, image: "https://img.freepik.com/free-photo/delicious-fries-studio_23-2151846528.jpg?semt=ais_hybrid&w=740" }
];

let cart = [];

const menuItemsDiv = document.getElementById("menuItems");
const cartItemsUl = document.getElementById("cartItems");
const totalSpan = document.getElementById("total");

menu.forEach(item => {
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
    <h3>${item.name}</h3>
    <p>₹${item.price}</p>
    <button onclick="addToCart(${item.id})">Add to Cart</button>
  `;
  menuItemsDiv.appendChild(div);
});

function addToCart(id) {
  const item = menu.find(i => i.id === id);
  cart.push(item);
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  cartItemsUl.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsUl.appendChild(li);
    total += item.price;
  });
  totalSpan.textContent = total;
}