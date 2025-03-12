// Function to add a product to the card 
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count 
function updateCartCount () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.length; // Get the current cart count
    document.getElementById('cart-btn').innerText = `Cart (${cartCount})`;
}

// Initialize cart count on page load
updateCartCount();

// Check if the page was reloaded
if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    // Page was refreshed, so clear the cart
    localStorage.removeItem('cart');
} else {
    // Store a flag in sessionStorage indicating this is a navigation, not a reload
    sessionStorage.setItem('navigation', true);
}



// Add event listener for the "add to cart" button on the apples page 
if (document.getElementById('add-to-cart')) {
    document.getElementById('add-to-cart').onclick = function() {
        const product = {
            id: addToCart,
            name: 'Fresh Apples',
            price: 2.00,
            image:'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834'
        };
        addToCart(product);
    };
}

// Add event listener for the "Add to Cart" button on the bananas page
if (document.getElementById('add-to-cart-banana')) { // For Fresh Bananas button
    document.getElementById('add-to-cart-banana').onclick = function() {
        const product = {
            id: addToCart,
            name: 'Fresh Banana',
            price: 1.00,
            image: 'https://www.shutterstock.com/image-photo/banana-fruit-isolated-on-white-600nw-2471393451.jpg' // Banana image URL
        };
        addToCart(product);
    };
}

// Add event listener for the "Add to Cart" button on the durian page
if (document.getElementById('add-to-cart-durian')) {
    document.getElementById('add-to-cart-durian').onclick = function() {
        const product = {
            id: addToCart, 
            name: 'D24 Durian',
            price: 8.00,
            image: 'https://www.shutterstock.com/image-photo/durian-fruit-on-wooden-table-600nw-2298368589.jpg'
        };
        addToCart(product);
    };
}


// Add event listener for the "Add to Cart" button on the kiwi page
if (document.getElementById('add-to-cart-kiwi')) {
    document.getElementById('add-to-cart-kiwi').onclick = function() {
        const product = {
            id: addToCart,
            name: 'Fresh Kiwi',
            price: 3.00,
            image: 'https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg'
        };
        addToCart(product);
    };
}

// ----------------------------------------------------------------------------------------------------------

// Add event listener for the "add to cart" button on the meat page 
if (document.getElementById('add-to-cart-wagyu')) {
    document.getElementById('add-to-cart-wagyu').onclick = function() {
        const product = {
            id: addToCart,
            name: 'Wagyu',
            price: 65.00,
            image: 'https://live-production.wcms.abc-cdn.net.au/d4cad1b635352e3a57e8a13d85d7fcb3?impolicy=wcms_crop_resize&cropH=1209&cropW=2150&xPos=0&yPos=112&width=862&height=485'
        };
        addToCart(product);
    };
}

if (document.getElementById('add-to-cart-pork')) {
    document.getElementById('add-to-cart-pork').onclick = function() {
        const product= {
            id: addToCart,
            name:'Pork',
            price: 25.00,
            image: 'https://www.lovefoodhatewaste.com/sites/default/files/styles/16_9_two_column/public/2022-08/Pork-sh1419942758.jpg.webp?itok=_Ow0IXe6'
        };
        addToCart(product);
    };
}

if (document.getElementById('add-to-cart-lamb')) {
    document.getElementById('add-to-cart-lamb').onclick = function() {
        const product = {
            id: addToCart,  
            name: "Lamb",
            price: 35.00,
            image: 'https://www.meatemporium.com.au/cdn/shop/products/Lamb_Cutlets_37.jpg?v=1631616903'
        };
        addToCart(product);
    };
}

if (document.getElementById('add-to-cart-chicken')) {
    document.getElementById('add-to-cart-kiwi').onclick = function() {
        const product = {
            id: addToCard,
            name: "Chicken",
            price: 15.00,
            image: 'https://www.dinneratthezoo.com/wp-content/uploads/2018/10/roasted-chicken-4-500x500.jpg'
        };
        addToCart(product);
    };
}



const toggleSwitch = document.getElementById('theme-toggle');

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// Function to toggle between dark and light mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Update button text based on the current theme
    const themeToggleButton = document.getElementById("theme-toggle");
    if (body.classList.contains("dark-mode")) {
        themeToggleButton.textContent = "Light Mode";
    } else {
        themeToggleButton.textContent = "Dark Mode";
    }
}


// Function that shows weather on my page
document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '3abd851b8192d694240a05572e76f825'; // Replace with your actual API key
    const city = 'Malaysia'; // Change this to your desired city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${'Malaysia'}&appid=${'3abd851b8192d694240a05572e76f825'}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Check what you get here
            const weatherDiv = document.getElementById('weather');
            const iconCode = data.weather[0].icon; // Get the icon code from the response
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // Correctly create the icon URL

            weatherDiv.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <img src="${iconUrl}" alt="${data.weather[0].description} icon"> <!-- Add the icon here -->
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp} °C</p>
            `;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
