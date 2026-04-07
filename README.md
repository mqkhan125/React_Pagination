# 📸 Image Gallery with Dynamic Pagination

A modern React-based image gallery that fetches images from an API and displays them with dynamic pagination. The pagination system updates intelligently based on user interaction, providing a smooth and user-friendly experience.

---

# UI Preview
<img width="1366" height="641" alt="screencapture-localhost-5174-2026-04-07-11_43_24" src="https://github.com/user-attachments/assets/958f2522-0ef7-47e1-a96f-15e5fee56ec7" />

---

## 🚀 Features

- 🔄 Fetch images from API dynamically
- 📄 Sliding window pagination (dynamic page numbers)
- ⏮️ Prev button disabled on first page
- 🔢 Active page highlighting
- 🎨 Clean and responsive UI
- ⚡ Smooth hover and transition effects

---

## 🧠 Pagination Logic

This project uses a **dynamic (sliding window) pagination system**:

- Page numbers update based on the current page
- Moving forward adds new pages
- Moving backward removes unnecessary pages
- Keeps UI clean and focused on nearby pages

Example:
Page 5 → 2 3 4 5 6 7 8
Page 6 → 3 4 5 6 7 8 9

---

## 🛠️ Tech Stack

- React (Hooks: useState, useEffect)
- JavaScript (ES6+)
- CSS3 (Flexbox + transitions)
- Picsum API (https://picsum.photos)

---

## 📦 Installation

```bash
git clone https://github.com/mqkhan125/React_Pagination.git
cd React_Pagination
npm install
npm run dev
---

📂 Project Structure

src/
│── components/
│   └── Pagination.jsx
│── styles/
│   └── styles.css
---
