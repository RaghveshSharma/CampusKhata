# CampusKhata – Smart Expense Tracker for Students

CampusKhata is a browser-based expense tracking web application designed specifically for college students.  
It helps users record, organize, and analyze their daily income and expenses in a simple, fast, and private way — without any signup or backend.

The application is built completely using **HTML, CSS and Vanilla JavaScript** and runs fully on the client side using **DOM manipulation and LocalStorage**.

---

## 🧩 Problem Statement

Many college students struggle to track their small but frequent daily expenses such as food, travel, shopping, and personal spending.  
Because of this, money is often spent without knowing where it went.

CampusKhata solves this problem by providing:
- A simple interface to add income and expenses
- Monthly, weekly and daily filtering
- Automatic balance calculation
- Local data storage for privacy

---

## ✨ Features Implemented

- Add Income & Expenses
- Categorized transactions (Food, Travel, Education, etc.)
- Monthly transaction tracking
- Today / This Week / All filters
- Automatic calculation of:
  - Total Income
  - Total Expense
  - Balance
- Delete transactions with confirmation
- Light & Dark theme toggle
- Data persistence using LocalStorage
- Fully responsive UI
- Landing page with smooth navigation and animations

---

## 🧠 DOM Concepts Used

This project heavily uses JavaScript DOM manipulation, including:

- `document.createElement()`
- `innerHTML`
- `appendChild()`
- `classList.add()`, `classList.remove()`
- `addEventListener()` for:
  - Click
  - Submit
  - Scroll
  - Keypress
- Dynamic rendering of transaction cards
- Conditional rendering (empty state, filters, month view)
- Styling changes through JavaScript
- IntersectionObserver for animations

---

## 🗂 State Management

The application uses JavaScript variables as application state:

- `transactions[]` → stores all income & expense records
- `currentMonth` & `currentYear` → for month-based filtering
- `currentFilter` → All / Today / Week
- `currentTheme` → Light or Dark mode

All transactions and theme preferences are stored in **LocalStorage** so data is preserved even after refresh.

---

## ▶ How to Run the Project

1. Download or clone this repository
2. Open `index.html` in any modern browser
3. Click **Start** or **Continue as Guest**
4. You will be redirected to the main app (`app.html`)
5. Start adding and tracking your expenses

No installation or backend is required.

---

## ⚠ Known Limitations

- No backend or cloud sync (data is device-specific)
- No user authentication
- Data cannot be shared between devices

These are intentional since the project is designed to be a fully client-side DOM application.

---

## 📹 Demo Video

A demo video showing all features, UI interactions, and DOM updates has been provided in the submission form.

---

## 🧑‍💻 Developer

Developed as a **Web Dev Final Project** using:
- HTML
- CSS
- Vanilla JavaScript
- DOM APIs
- LocalStorage

