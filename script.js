// script.js
document.addEventListener("DOMContentLoaded", () => {
    // --- SEARCH BAR FUNCTIONALITY ---
    const searchBtn = document.querySelector(".search-icon");
    const searchInput = document.querySelector(".search-input");

    searchBtn.addEventListener("click", () => {
        let query = searchInput.value.trim();
        if (query) {
            alert(`You searched for: ${query}`);
        } else {
            alert("Please enter something to search!");
        }
    });

    // --- BACK TO TOP FUNCTIONALITY ---
    const backToTop = document.querySelector(".foot-pannel1");
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // --- CART COUNTER FUNCTIONALITY ---
    const cart = document.querySelector(".nav-cart");
    let cartCount = 0;

    cart.addEventListener("click", () => {
        cartCount++;
        cart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
    });
});