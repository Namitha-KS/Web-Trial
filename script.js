const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

const products = [
  {
    id: 1,
    title: 'Air Force',
    price: 119,
    colors: [
      { code: 'black', img: './img/air.png' },
      { code: 'darkblue', img: './img/air2.png' },
    ],
  },
  {
    id: 2,
    title: 'Air Jordan',
    price: 149,
    colors: [
      { code: 'lightgray', img: './img/jordan.png' },
      { code: 'green', img: './img/jordan2.png' },
    ],
  },
  {
    id: 3,
    title: 'Blazer',
    price: 109,
    colors: [
      { code: 'lightgray', img: './img/blazer.png' },
      { code: 'green', img: './img/blazer2.png' },
    ],
  },
  {
    id: 4,
    title: 'Crater',
    price: 129,
    colors: [
      { code: 'black', img: './img/crater.png' },
      { code: 'lightgray', img: './img/crater2.png' },
    ],
  },
  {
    id: 5,
    title: 'Hippie',
    price: 99,
    colors: [
      { code: 'gray', img: './img/hippie.png' },
      { code: 'black', img: './img/hippie2.png' },
    ],
  },
];


let chosenProduct = products[0];


const currentProductImg = document.querySelector('.productImage');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');

const updateProductDisplay = () => {
  currentProductTitle.textContent = chosenProduct.title.toUpperCase();
  currentProductPrice.textContent = '$' + chosenProduct.price;
  currentProductImg.src = chosenProduct.colors[0].img;
  currentProductColors.forEach((color, index) => {
    if (chosenProduct.colors[index]) {
      color.style.backgroundColor = chosenProduct.colors[index].code;
      color.style.display = 'block';
    } else {
      color.style.display = 'none';
    }
  });
};


menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
 
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

  
    chosenProduct = products[index];

    
    updateProductDisplay();
  });
});

// Handle color selection
currentProductColors.forEach((color, index) => {
  color.addEventListener('click', () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});


currentProductSizes.forEach((size) => {
  size.addEventListener('click', () => {
    currentProductSizes.forEach((s) => {
      s.style.backgroundColor = 'white';
      s.style.color = 'black';
    });
    size.style.backgroundColor = 'black';
    size.style.color = 'white';
  });
});


const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click', () => {
  payment.style.display = 'flex';
});

close.addEventListener('click', () => {
  payment.style.display = 'none';
});

// Initial product display update
updateProductDisplay();
