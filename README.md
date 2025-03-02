# 🚀 Assembly Learning Platform

This project is a **MERN stack** web application designed to provide an **interactive platform for learning Assembly Language**. It allows users to contribute, run, and explore Assembly code snippets with a built-in Monaco code editor.

## 🌟 Features

- **📖 Contribute Section** - Users can add Assembly language explanations and code snippets.
- **📝 Code Editor** - Integrated Monaco Editor to write and execute Assembly code.
- **🔐 Authentication** - Secure login/signup using **Clerk** authentication.
- **📦 Backend API** - Node.js and Express-based API for handling contributions.
- **💾 Database** - Uses MongoDB Atlas for data storage.
- **🎨 Responsive UI** - Built with **React-Vite** and **Tailwind CSS**.

---

## 🛠️ Tech Stack

| **Technology**    | **Usage**                    |
|------------------|----------------------------|
| **Frontend**     | React (Vite) + Tailwind CSS |
| **Backend**      | Node.js + Express           |
| **Database**     | MongoDB Atlas               |
| **Authentication** | Clerk                      |
| **Code Editor**  | Monaco Editor               |

---
## 🏗️ Installation & Setup

### 🔹 Prerequisites

Ensure you have **Node.js**, **MongoDB Atlas (or local MongoDB)**, and **Vite** installed.

### 🚀 Backend Setup

1. Clone the repository and navigate to the `backend` folder:
   ```sh
   git clone https://github.com/your-repo.git
   cd assembly-learning-platform/backend

2. Install dependencies:
   npm install

3. Create a .env file and configure:
   MONGO_URI=your_mongodb_connection_string
   CLERK_SECRET_KEY=your_clerk_secret_key

4. Start the backend server:
   npm run dev

---

### 🎨 Frontend Setup

1. Navigate to the frontend folder:
   cd ../frontend

2. Install dependencies:
   npm install

3. Start the frontend application:
   npm run dev

---

### 🔌 API Endpoints
**Contribution API**
GET /api/contributions → Fetch all contributions.
POST /api/contribute → Add a new contribution (requires authentication).

---

**🚀 Usage**
Sign in / Sign up using Clerk authentication.
Navigate to the "Contribute" page and add an Assembly tutorial with a code snippet.
Try out Assembly programs in the built-in Monaco Code Editor.
Run your code and see the output instantly.

---

**🛠 Dependencies**

Backend Dependencies (package.json):
{
  "dependencies": {
    "@clerk/clerk-sdk-node": "^5.1.6",
    "axios": "^1.8.1",
    "body-parser": "^1.20.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "mongodb": "^6.14.0",
    "mongoose": "^8.11.0"
  }
}

Frontend Dependencies (package.json):
{
  "dependencies": {
    "@clerk/clerk-react": "^5.24.1",
    "@monaco-editor/react": "^4.7.0",
    "@tailwindcss/vite": "^4.0.9",
    "axios": "^1.8.1",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.2.0",
    "tailwindcss": "^4.0.9"
  }
}

---

**✨ Authors**
**Sahil Sinnarkar** – Project Developer

---

**⭐ Acknowledgments**
Clerk Authentication for seamless user management.
Monaco Editor for an amazing in-browser coding experience.
Vite + Tailwind CSS for a fast and modern frontend.

---

**🌍 Happy Coding!**

---

**📸 Screenshots**

![image](https://github.com/user-attachments/assets/2e6788c0-4933-4618-a103-12d2ff7156fa)
![image](https://github.com/user-attachments/assets/686b543a-ad62-443f-b6b5-5e871e8e724d)
![image](https://github.com/user-attachments/assets/0dbd7939-6be4-4821-afc3-aa43206610ed)
![image](https://github.com/user-attachments/assets/92d86a80-1315-493f-b5a1-a2fd7bcb255a)



