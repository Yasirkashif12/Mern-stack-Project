🚀 FinTrack

Tagline: Empowering users to track and manage their financial transactions effortlessly
📖 Project Overview

FinTrack is a full-stack financial management application built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to track, categorize, and analyze their transactions in a secure and intuitive environment. The project focuses on real-world functionality and a clean, responsive design.
🌟 Key Features

Secure User Authentication
Users can sign up, log in, and log out securely using JWT authentication.

Transaction Management
Add, edit, or delete transactions with details such as title, amount, category, and notes.

Categorization
Transactions are organized by type (income/expense) and category for easy tracking.

Analytics Dashboard
Interactive visualization of spending habits and financial insights over time.

Responsive UI
Clean, mobile-friendly interface using Tailwind CSS.

Protected Routes
Certain pages are accessible only after login, ensuring data privacy.

🛠 Technologies Used
Frontend: React.js, React Router, Axios, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

Authentication: JWT (JSON Web Tokens)

Data Visualization: Chart.js
📂 Project Structure
FinTrack/
├── backend/               # Server-side code (Node.js + Express)
│   ├── controllers/       # Route handlers
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   └── server.js          # Entry point
└── frontend/              # Client-side code (React)
    ├── public/            # Static files
    ├── src/               # React components and assets
    └── package.json       # Frontend dependencies and scripts
⚙️ Setup Instructions
cd backend
npm install
Create a .env file:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
Start the backend server:
npm run dev
Frontend
cd frontend
npm install
npm start
🎨 UI / Pages

Homepage – Displays overall summary of transactions.

Login / Signup – Secure authentication forms.

Transaction Form – Add or edit transactions.

Transaction List – View and delete transactions.

Analytics Dashboard – Visualize income vs expenses with charts.
💡 How It Works

Users sign up/login → JWT token generated.

Add income/expense transactions → Stored in MongoDB.

Dashboard automatically updates charts and summaries.

Users can edit or delete transactions anytime.
📄 License

This project is licensed under the MIT License.
🙌 Acknowledgments

MongoDB Documentation

React Documentation

Chart.js Documentation
