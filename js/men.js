// js/men.js
import { menData } from './data.js';

document.addEventListener("DOMContentLoaded", function () {
    const menProductsContainer = document.getElementById('men-products');
    menData.forEach(product => {
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
        menProductsContainer.appendChild(productElement);
    });
});
