import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP01Hi8tBNcZzl4MAPPLGA5zUaSRNNI-4",
  authDomain: "otaku-mori.firebaseapp.com",
  projectId: "otaku-mori",
  storageBucket: "otaku-mori.firebasestorage.app",
  messagingSenderId: "579739041870",
  appId: "1:579739041870:web:cc91201750f5b240e3831f",
  measurementId: "G-GEKT6PWNXL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Printify API Setup
const printifyAPI = axios.create({
  baseURL: "https://api.printify.com/v1",
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImRiNWUzMWY1ZDZhYmI2MmI4MjZlZDFhZTI1MzE0MDNiM2JhZjY0Yjc0MjllYTAwODlmN2ZjM2Q0NzAwMjA4YjJmYTA3YWIwNGNlYWE4Zjc3IiwiaWF0IjoxNzM3NDY0MjYwLjQwODA1MiwibmJmIjoxNzM3NDY0MjYwLjQwODA1NSwiZXhwIjoxNzY5MDAwMjYwLjM5ODQ3OCwic3ViIjoiMTIyOTY2NDkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIiwidXNlci5pbmZvIl19.ArQNwzMhbtt4vhRWYg8tvBr0dI_HzQCV-cEwP3hw_mOxipLPr1xlv4DJMn9eSF7Cx5duicdRRATPCB3B4gc`,
  },
});

// Fetch Products from Printify
async function fetchProducts() {
  try {
    const response = await printifyAPI.get("/shops/{shop_id}/products.json");
    const products = response.data;

    const productsContainer = document.getElementById("products");
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.textContent = product.title; // Replace with actual product data
      productsContainer.appendChild(productCard);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Fetch products on page load
fetchProducts();

// User Authentication
document.getElementById("login-btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("Login successful!"))
    .catch((error) => alert(`Login failed: ${error.message}`));
});

document.getElementById("logout-btn").addEventListener("click", () => {
  signOut(auth)
    .then(() => alert("Logout successful!"))
    .catch((error) => alert(`Logout failed: ${error.message}`));
});
