// js/women.js
import { womenData } from './data.js';

document.addEventListener("DOMContentLoaded", function () {
    const womenProductsContainer = document.getElementById('women-products');
    womenData.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.reviews}</p>
            <p>Was: <s>${product.prevPrice}</s></p>
            <p>Now: $${product.newPrice}</p>
            <button>Add to Cart</button>
        `;
        womenProductsContainer.appendChild(productElement);
    });
});
