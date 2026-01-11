// ================= QUOTES ARRAY =================
const quotes = [
  "Save before you spend, not after.",
  "Small expenses add up faster than you think.",
  "Track your money, or your money will track you.",
  "Budgeting isn't restriction, it's control.",
  "Every rupee has a job—give it one.",
  "Discipline with money today builds freedom tomorrow.",
  "Smart spending is a habit, not a sacrifice.",
  "A penny saved is a penny earned.",
  "Don't save what is left after spending, spend what is left after saving.",
  "Money is a terrible master but an excellent servant.",
  "The best time to save was yesterday, the second best time is now.",
  "Your future self will thank you for tracking expenses today."
];

// ================= DISPLAY RANDOM QUOTE =================
function displayRandomQuote() {
  const quoteEl = document.getElementById("quoteText");
  
  quoteEl.style.opacity = '0';
  quoteEl.style.transform = 'translateY(10px)';
  
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = quotes[randomIndex];
    
    quoteEl.style.opacity = '1';
    quoteEl.style.transform = 'translateY(0)';
  }, 300);
}

displayRandomQuote();
setInterval(displayRandomQuote, 8000);

// ================= SMOOTH SCROLLING =================
// 📌 UNDERSTAND THIS: When you click navbar links, page smoothly scrolls to that section
const allNavLinks = document.querySelectorAll('a[href^="#"]');

allNavLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetSection = document.querySelector(this.getAttribute('href'));
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      const mobileMenu = document.getElementById('navMenu');
      mobileMenu.classList.remove('active');
    }
  });
});

// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ================= MOBILE MENU TOGGLE =================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function() {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

// ================= START BUTTONS - NAVIGATE TO APP =================
const startBtn = document.getElementById('startBtn');
const guestBtn = document.getElementById('guestBtn');
const ctaBtn = document.getElementById('ctaBtn');

function navigateToApp() {
  const loader = document.getElementById("pageLoader");
  loader.classList.add("active");

  setTimeout(function() {
    window.location.assign("app.html");
  }, 2000);
}

startBtn.addEventListener('click', navigateToApp);
guestBtn.addEventListener('click', navigateToApp);
ctaBtn.addEventListener('click', navigateToApp);

// ================= BACK TO TOP BUTTON =================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ================= NEWSLETTER SUBSCRIPTION =================
const subscribeBtn = document.getElementById('subscribeBtn');
const emailInput = document.getElementById('emailInput');

subscribeBtn.addEventListener('click', function() {
  const email = emailInput.value.trim();
  
  if (email === '') {
    alert('⚠️ Please enter your email address.');
    return;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('⚠️ Please enter a valid email address.');
    return;
  }
  
  alert(`✅ Thank you for subscribing!\n\nWe'll send money-saving tips to ${email}`);
  emailInput.value = '';
});

emailInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    subscribeBtn.click();
  }
});

// ================= FEATURE CARDS ANIMATION =================
// 📌 UNDERSTAND THIS: Cards appear with animation when you scroll to them
const allFeatureCards = document.querySelectorAll('.feature-card');

allFeatureCards.forEach(function(card, index) {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `all 0.6s ease ${index * 0.1}s`;
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

allFeatureCards.forEach(function(card) {
  observer.observe(card);
});

// ================= ABOUT ITEMS ANIMATION =================
const allAboutItems = document.querySelectorAll('.about-item');

allAboutItems.forEach(function(item, index) {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-30px)';
  item.style.transition = `all 0.6s ease ${index * 0.2}s`;
  observer.observe(item);
});

// ================= BRAND TITLE CLICK - SCROLL TO TOP =================
const brandTitle = document.querySelector('.brand-title');

brandTitle.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ================= ADD TRANSITION TO QUOTE =================
const quoteText = document.getElementById('quoteText');
quoteText.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

// ================= FEATURE CARD CLICK FEEDBACK =================
document.querySelectorAll('.feature-card').forEach(function(card) {
  card.addEventListener('click', function() {
    this.style.transform = 'scale(0.98) translateY(-10px)';
    
    setTimeout(() => {
      this.style.transform = 'translateY(-10px)';
    }, 150);
  });
});

// ================= ACTIVE NAV LINK ON SCROLL =================
// 📌 UNDERSTAND THIS: Navbar link gets highlighted when you reach that section
const allSections = document.querySelectorAll('section[id]');
const allLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
  let currentSection = '';
  
  allSections.forEach(function(section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 100) {
      currentSection = section.getAttribute('id');
    }
  });
  
  allLinks.forEach(function(link) {
    link.style.color = '';
    
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.style.color = 'var(--primary)';
    }
  });
});

// ================= LOG READY MESSAGE =================
console.log('🎉 Campus Khata is ready!');
console.log('💡 Now build the expense tracker functionality in app.js');
