# Puppeteer Web Scraper with React Dashboard

## 📌 About
A full-stack demo project showcasing web scraping using Puppeteer in Node.js, with a React frontend dashboard to view scraped data.
Example site used: quotes.toscrape.com (for learning & practice).

---

## 🚀 Features

- ✅ Scrapes quotes, authors, and tags from target website
- ✅ REST API built with Express
- ✅ React frontend to display scraped results
- ✅ One-click scraping via dashboard button
- ✅ Modular structure (can extend with DB like MongoDB)

---

## 🧱 Tech Stack

| Frontend         | Backend            | Communication      |
|------------------|--------------------|--------------------|
| React.js         | Node.js + Express  | REST API (JSON)    |
| -                | Puppeteer          | -                  |

---
## ⚙️ Setup Instructions

Follow the steps below to run the project on your local machine:

---

```bash
# 1️⃣ Clone the repo
git clone https://github.com/Harish010818/Scrap2view.git
cd Scrap2view


# 🔹 client/.env
VITE_API_URL=http://localhost:3000

# 3️⃣ Install dependencies
cd backend && npm install
cd ../frontend && npm install

# 4️⃣ Start both servers
cd ../backend && npm run dev
cd ../frontend && npm run dev

```
## API Endpoints

- 🔑 Quotes: `/api/scrape`

---

