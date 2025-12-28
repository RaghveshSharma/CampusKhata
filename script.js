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
  
  // Add fade out effect
  quoteEl.style.opacity = '0';
  quoteEl.style.transform = 'translateY(10px)';
  
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = quotes[randomIndex];
    
    // Add fade in effect
    quoteEl.style.opacity = '1';
    quoteEl.style.transform = 'translateY(0)';
  }, 300);
}

// Display quote on load
displayRandomQuote();

// Change quote every 8 seconds
setInterval(displayRandomQuote, 8000);

// ================= SMOOTH SCROLLING =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close mobile menu if open
      navMenu.classList.remove('active');
    }
  });
});

// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ================= MOBILE MENU TOGGLE =================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
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

  setTimeout(() => {
    window.location.assign("app.html");
  }, 3000);
}

startBtn.addEventListener('click', navigateToApp);
guestBtn.addEventListener('click', navigateToApp);
ctaBtn.addEventListener('click', navigateToApp);

// ================= BACK TO TOP BUTTON =================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ================= NEWSLETTER SUBSCRIPTION =================
const subscribeBtn = document.getElementById('subscribeBtn');
const emailInput = document.getElementById('emailInput');

subscribeBtn.addEventListener('click', () => {
  const email = emailInput.value.trim();
  
  if (email === '') {
    alert('⚠️ Please enter your email address.');
    return;
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('⚠️ Please enter a valid email address.');
    return;
  }
  
  // Success message
  alert(`✅ Thank you for subscribing!\n\nWe'll send money-saving tips to ${email}`);
  emailInput.value = '';
});

// Allow Enter key to submit
emailInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    subscribeBtn.click();
  }
});

// ================= INTERSECTION OBSERVER FOR ANIMATIONS =================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `all 0.6s ease ${index * 0.1}s`;
  observer.observe(card);
});

// Observe about items
document.querySelectorAll('.about-item').forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-30px)';
  item.style.transition = `all 0.6s ease ${index * 0.2}s`;
  observer.observe(item);
});

// ================= BRAND TITLE CLICK - SCROLL TO TOP =================
const brandTitle = document.querySelector('.brand-title');

brandTitle.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ================= ADD TRANSITION TO QUOTE =================
const quoteText = document.getElementById('quoteText');
quoteText.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

// ================= LOG READY MESSAGE =================
console.log('🎉 Campus Khata is ready!');
console.log('💡 Tip: Create app.html for your expense tracking functionality');

// ================= FEATURE CARD CLICK FEEDBACK =================
document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('click', function() {
    // Add a subtle scale effect
    this.style.transform = 'scale(0.98) translateY(-10px)';
    setTimeout(() => {
      this.style.transform = 'translateY(-10px)';
    }, 150);
  });
});

// ================= ACTIVE NAV LINK ON SCROLL =================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--primary)';
    }
  });
});