/* =======================
   Plant Data
   Contains all plants with properties (name, description, price, image, category, care, size)
======================= */
const plants = [
    {
        id: 1,
        name: "Manjula Pothos",
        description: "Rare variegated pothos houseplant plant",
        price: 25,
        image: "assets/Indoor Plants/manjula-pothos.WebP",
        category: "indoor-plants",
        care: "Easy",
        size: "Medium"
    },
    {
        id: 2,
        name: "Vriesea",
        description: "Colorful tropical bromeliad indoor plant",
        price: 30,
        image: "assets/Indoor Plants/guzmaniaorrangemirror.webp",
        category: "indoor-plants",
        care: "Moderate",
        size: "Medium"
    },
    {
        id: 3,
        name: "Money Plant",
        description: "Popular indoor air-purifying climbing plant",
        price: 19,
        image: "assets/Indoor Plants/money-plant.webp",
        category: "indoor-plants",
        care: "Very Easy",
        size: "Large"
    },
    {
        id: 4,
        name: "Anthurium Red",
        description: "Bright red flowers, glossy green leaves",
        price: 27,
        image: "assets/Indoor Plants/anthurium-red.webp",
        category: "indoor-plants",
        care: "Moderate",
        size: "Medium"
    },
    {
        id: 5,
        name: "Areca Palm",
        description: "Tall indoor palm with feathery fronds",
        price: 33,
        image: "assets/Indoor Plants/areca-palm-plant.WebP",
        category: "indoor-plants",
        care: "Easy",
        size: "Large"
    },
    {
        id: 6,
        name: "Bird of Paradise",
        description: "Exotic plant with large tropical leaves",
        price: 45,
        image: "assets/Indoor Plants/bird-of-paradise.webp",
        category: "indoor-plants",
        care: "Moderate",
        size: "Large"
    },    
    {
        id: 7,
        name: "Philodendron",
        description: "Classic tropical leafy indoor houseplant",
        price: 32,
        image: "assets/Indoor Plants/Philodendron.webp",
        category: "indoor-plants",
        care: "Easy",
        size: "Large"
    },
    {
        id: 8,
        name: "Poinsettia Red",
        description: "Festive red holiday decorative plant",
        price: 24,
        image: "assets/Indoor Plants/Poinsettiaclassicwhite.webp",
        category: "indoor-plants",
        care: "Moderate",
        size: "Medium"
    },
    {
        id: 9,
        name: "Poinsettia Pink",
        description: "Elegant pink festive decorative plant",
        price: 22,
        image: "assets/Indoor Plants/Poinsettiyapink.webp",
        category: "indoor-plants",
        care: "Moderate",
        size: "Medium"
    },
    {
        id: 10,
        name: "Adenium",
        description: "Desert rose succulent flowering plant",
        price: 45,
        image: "assets/Outdoor Plants/adeniumpink.webp",
        category: "outdoor-plants",
        care: "Moderate",
        size: "Medium"
    },
    {
        id: 11,
        name: "Alo Vera",
        description: "Medicinal succulent indoor air-purifier",
        price: 15,
        image: "assets/Outdoor Plants/Alovera.webp",
        category: "outdoor-plants",
        care: "Very Easy",
        size: "Small"
    },
    {
        id: 12,
        name: "Bougainvilla",
        description: "Vibrant climbing flowering outdoor plant",
        price: 28,
        image: "assets/Outdoor Plants/Bougainvilla.webp",
        category: "outdoor-plants",
        care: "Moderate",
        size: "Large"
    },
    {
        id: 13,
        name: "Buxus",
        description: "Evergreen ornamental shrub plant",
        price: 33,
        image: "assets/Outdoor Plants/buxus.webp",
        category: "outdoor-plants",
        care: "Easy",
        size: "Medium"
    },
    {
        id: 14,
        name: "Cactus Ball",
        description: "Round cactus with sharp protective spines",
        price: 13,
        image: "assets/Outdoor Plants/cactus-ball.webp",
        category: "outdoor-plants",
        care: "Very Easy",
        size: "Small"
    },   
    {
        id: 15,
        name: "Crown of Thron",
        description: "Spiny succulent with bright colorful flowers",
        price: 19,
        image: "assets/Outdoor Plants/crown_of_thron.webp",
        category: "outdoor-plants",
        care: "Easy",
        size: "Medium"
    },    
    {
        id: 16,
        name: "Sansevieria",
        description: "Hardy plant with tall upright leaves",
        price: 22,
        image: "assets/Outdoor Plants/sansevieria.webp",
        category: "outdoor-plants",
        care: "Very Easy",
        size: "Medium"
    },             
    {
        id: 17,
        name: "Ficus benjamina",
        description: "Popular indoor weeping fig plant",
        price: 40,
        image: "assets/Outdoor Plants/ficus_benjamina.webp",
        category: "outdoor-plants",
        care: "Moderate",
        size: "Large"
    },
    {
        id: 18,
        name: "Ficus Bonsai",
        description: "Miniature decorative indoor bonsai tree",
        price: 55,
        image: "assets/Outdoor Plants/Ficusbonsai.webp",
        category: "outdoor-plants",
        care: "Moderate",
        size: "Small"
    },
    {
        id: 19,
        name: "Epsom Salt",
        description: "Magnesium-rich plant growth supplement",
        price: 12,
        image: "assets/Planting Supplies/epsomsalt.webp",
        category: "planting-supplies",
        care: "Very Easy",
        size: "Small"
    },
    {
        id: 20,
        name: "Fast Green",
        description: "Quick-acting liquid plant fertilizer",
        price: 18,
        image: "assets/Planting Supplies/fastgreen.webp",
        category: "planting-supplies",
        care: "Easy",
        size: "Small"
    },
    {
        id: 21,
        name: "Fruit Fertlizers",
        description: "Nutrient-rich fertilizer for fruit plants",
        price: 20,
        image: "assets/Planting Supplies/fruitandflowerfertilizer.webp",
        category: "planting-supplies",
        care: "Easy",
        size: "Medium"
    },
    {
        id: 22,
        name: "General Purpose Fertilizer",
        description: "All-purpose plant growth enhancer",
        price: 17,
        image: "assets/Planting Supplies/generalpurposefertilizer.webp",
        category: "planting-supplies",
        care: "Very Easy",
        size: "Medium"
    },
    {
        id: 23,
        name: "Nitrogen Fertilizer",
        description: "High-nitrogen plant growth booster",
        price: 21,
        image: "assets/Planting Supplies/nitrogenfertilizer.webp",
        category: "planting-supplies",
        care: "Easy",
        size: "Medium"
    },
    {
        id: 24,
        name: "Solu Complex",
        description: "Water-soluble complete plant fertilizer",
        price: 23,
        image: "assets/Planting Supplies/solucomplex.webp",
        category: "planting-supplies",
        care: "Moderate",
        size: "Small"
    },
];

/* =======================
   Shopping Cart
======================= */
let cart = [];

/* =======================
   DOM Elements
======================= */
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const plantsGrid = document.getElementById('plantsGrid');

/* =======================
   Contact Form Handling
======================= */
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('.form__submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification(`Thank you ${name}! Your message has been sent.`);
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

/* =======================
   Language Switching
======================= */
const languageBtns = document.querySelectorAll('.language-btn');
const body = document.body;

// Update active button
languageBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
});

// Update page language
function updatePageLanguage() {
    const t = translations[currentLang];
    
    // Navigation
    document.querySelector('a[href="#plants"]').textContent = t.navPlants;
    document.querySelector('a[href="#about"]').textContent = t.navAbout;
    document.querySelector('a[href="#contact"]').textContent = t.navContact;
    
    // Hero section
    document.querySelector('.hero__title').textContent = t.heroTitle;
    document.querySelector('.hero__subtitle').textContent = t.heroSubtitle;
    document.querySelector('.hero__cta').textContent = t.heroCta;
    
    // Sections
    document.querySelector('.section__title').textContent = t.sectionPlants;
    document.querySelector('.section__subtitle').textContent = t.sectionPlantsSubtitle;
    
    // About section
    const aboutTitle = document.querySelector('.about .section__title');
    const aboutSubtitle = document.querySelector('.about .section__subtitle');
    if (aboutTitle) aboutTitle.textContent = t.sectionAbout;
    if (aboutSubtitle) aboutSubtitle.textContent = t.sectionAboutSubtitle;
    
    // Contact section
    const contactTitle = document.querySelector('.contact .section__title');
    const contactSubtitle = document.querySelector('.contact .section__subtitle');
    if (contactTitle) contactTitle.textContent = t.sectionContact;
    if (contactSubtitle) contactSubtitle.textContent = t.sectionContactSubtitle;
    
    // Plant cards
    document.querySelectorAll('.plant-card__add-btn').forEach(btn => {
        btn.textContent = t.addToCart;
    });
    
    // Cart modal
    document.querySelector('.cart-modal__title').textContent = t.cartTitle;
    document.querySelector('.cart-modal__total span:first-child').textContent = t.cartTotal;
    document.querySelector('.cart-modal__checkout').textContent = t.checkout;
    
    // Empty cart message
    const emptyCart = document.querySelector('.empty-cart p');
    const emptyCartSub = document.querySelector('.empty-cart small');
    if (emptyCart) emptyCart.textContent = t.emptyCart;
    if (emptyCartSub) emptyCartSub.textContent = t.emptyCartSub;
    
    // About content
    document.querySelector('.about__title').textContent = t.aboutTitle;
    
    // Contact info
    document.querySelectorAll('.contact__details h4')[0].textContent = t.contactVisit;
    document.querySelectorAll('.contact__details h4')[1].textContent = t.contactCall;
    document.querySelectorAll('.contact__details h4')[2].textContent = t.contactEmail;
    document.querySelector('.contact__hours h4').textContent = t.contactHours;
    
    // Form labels
    document.querySelector('label[for="name"]').textContent = t.formName;
    document.querySelector('label[for="email"]').textContent = t.formEmail;
    document.querySelector('label[for="message"]').textContent = t.formMessage;
    document.querySelector('.form__submit').textContent = t.formSubmit;
    
    // Footer
    document.querySelectorAll('.footer__title')[0].textContent = t.footerShop;
    document.querySelectorAll('.footer__title')[1].textContent = t.footerSupport;
    document.querySelectorAll('.footer__title')[2].textContent = t.footerResources;
    document.querySelectorAll('.footer__title')[3].textContent = t.footerConnect;
    
    // Footer links
    const footerLinks = document.querySelectorAll('.footer__list a, .footer__social-link');
    const footerLinkTexts = [
        t.footerAllPlants, t.footerIndoor, t.footerOutdoor, t.footerCare,
        t.footerContact, t.footerAbout, t.footerHours, t.footerLocation,
        t.footerCareGuide, t.footerBlog, t.footerFaq, t.footerShipping,
        t.footerInstagram, t.footerFacebook, t.footerTwitter, t.footerNewsletter
    ];
    
    footerLinks.forEach((link, index) => {
        if (footerLinkTexts[index]) {
            link.textContent = footerLinkTexts[index];
        }
    });
    
    // Footer bottom
    document.querySelector('.footer__copyright').textContent = t.footerCopyright;
    document.querySelectorAll('.footer__bottom-links a')[0].textContent = t.footerPrivacy;
    document.querySelectorAll('.footer__bottom-links a')[1].textContent = t.footerTerms;
}

/* =======================
   Initialization
======================= */
document.addEventListener('DOMContentLoaded', () => {
    renderPlants();
    updateCartUI();
});

/* =======================
   Render Plant Cards
======================= */
function renderPlants(filter = 'all') {
    const filteredPlants = filter === 'all' ? plants : plants.filter(plant => plant.category === filter);
    
    plantsGrid.innerHTML = filteredPlants.map(plant => `
        <div class="plant-card">
            <div class="plant-card__image-wrapper">
                ${plant.badge ? `<div class="plant-card__badge">${plant.badge}</div>` : ''}
                <img src="${plant.image}" alt="${plant.name}" class="plant-card__image">
                <div class="plant-card__overlay">
                    <button class="plant-card__quick-add" onclick="addToCart(${plant.id})">
                        <span>+</span>
                    </button>
                </div>
            </div>
            <div class="plant-card__content">
                <div class="plant-card__header">
                    <h3 class="plant-card__name">${plant.name}</h3>
                    <div class="plant-card__care">
                        <span class="care-level">${plant.care}</span>
                        <span class="size">${plant.size}</span>
                    </div>
                </div>
                <p class="plant-card__description">${plant.description}</p>
                <div class="plant-card__footer">
                    <span class="plant-card__price">$${plant.price}</span>
                    <button class="plant-card__add-btn" onclick="addToCart(${plant.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

/* =======================
   Filter Plants
======================= */
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPlants(btn.dataset.filter);
    });
});

/* =======================
   Hero Gallery
======================= */
let currentSlide = 0;
const galleryItems = document.querySelectorAll('.gallery__item');
const dots = document.querySelectorAll('.dot');

// Show specific slide
function showSlide(index) {
    galleryItems.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    galleryItems[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

// Auto-rotate gallery
setInterval(() => {
    currentSlide = (currentSlide + 1) % galleryItems.length;
    showSlide(currentSlide);
}, 4000);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

/* =======================
   Newsletter Form
======================= */
document.querySelector('.newsletter__form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('.newsletter__input').value;
    showNotification(`Thank you for subscribing with ${email}!`);
    e.target.reset();
});

/* =======================
   Search Functionality
======================= */
document.querySelector('.search__input').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredPlants = plants.filter(plant => 
        plant.name.toLowerCase().includes(searchTerm) ||
        plant.description.toLowerCase().includes(searchTerm)
    );
    
    plantsGrid.innerHTML = filteredPlants.map(plant => `
        <div class="plant-card">
            <div class="plant-card__image-wrapper">
                ${plant.badge ? `<div class="plant-card__badge">${plant.badge}</div>` : ''}
                <img src="${plant.image}" alt="${plant.name}" class="plant-card__image">
                <div class="plant-card__overlay">
                    <button class="plant-card__quick-add" onclick="addToCart(${plant.id})">
                        <span>+</span>
                    </button>
                </div>
            </div>
            <div class="plant-card__content">
                <div class="plant-card__header">
                    <h3 class="plant-card__name">${plant.name}</h3>
                    <div class="plant-card__care">
                        <span class="care-level">${plant.care}</span>
                        <span class="size">${plant.size}</span>
                    </div>
                </div>
                <p class="plant-card__description">${plant.description}</p>
                <div class="plant-card__footer">
                    <span class="plant-card__price">$${plant.price}</span>
                    <button class="plant-card__add-btn" onclick="addToCart(${plant.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
});

/* =======================
   Cart Management
======================= */
function addToCart(plantId) {
    const plant = plants.find(p => p.id === plantId);
    const existingItem = cart.find(item => item.id === plantId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...plant, quantity: 1 });
    }
    
    updateCartUI();
    showNotification(`${plant.name} added to cart!`);
}

function removeFromCart(plantId) {
    cart = cart.filter(item => item.id !== plantId);
    updateCartUI();
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><p>Your cart is empty</p><small>Add some plants to get started!</small></div>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item__image">
                <div class="cart-item__info">
                    <div class="cart-item__name">${item.name}</div>
                    <div class="cart-item__price">$${item.price} × ${item.quantity}</div>
                </div>
                <button class="cart-item__remove" onclick="removeFromCart(${item.id})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 6L6 18M6 6l12 12" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        `).join('');
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = '$' + total.toFixed(2);
}

/* =======================
   Notifications
======================= */
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification__content">
            <span class="notification__icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 6L9 17l-5-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
            <span class="notification__text">${message}</span>
        </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

/* =======================
   Cart Modal Events
======================= */
cartBtn.addEventListener('click', () => {
    cartModal.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.remove('active');
    }
});

/* =======================
   Smooth Scroll for Navigation
======================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* =======================
   Lenis Smooth Scroll
======================= */
document.addEventListener("DOMContentLoaded", ()=> {
  const lenis = new Lenis({
    lerp: 0.070,
    smoothWheel: true,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});

/* =======================
   Intersection Observer for Reveal Animations
======================= */
document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis({
    lerp: 0.070,
    smoothWheel: true,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(el => observer.observe(el));
});

/* =======================
   Checkout Button Alert
======================= */
document.querySelector('.cart-modal__checkout').addEventListener('click', e => {
  e.stopPropagation();

  if (!cart.length) {
    return alert('Your cart is empty.');
  }

  alert('Proceeding to checkout... (demo)');
});

// This JavaScript code was written, optimized, and developed by Abolfazl Shadrouh
