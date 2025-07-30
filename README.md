# 🧠 Task Management Web App | MERN Stack

> ✅ Completed within 72 hours of receiving the assessment.  
> 🌐 Live Link: [https://tasko-task-management.vercel.app](https://tasko-task-management.vercel.app/)  
> 📦 Backend API: [https://tasko-app-server.vercel.app](https://tasko-app-server.vercel.app/)  
> 🗂 GitHub Repo: [https://github.com/Sifat-Ikram/tasko-app](https://github.com/Sifat-Ikram/tasko-app)

---

## 📌 Features

### 🔐 Authentication
- Signup & Login with validation
- Password hashing with bcrypt
- JWT-based authentication
- Token stored in **HTTP-only cookies**
- Logout functionality
- Password reset flow

### ✅ Task Management
- Create, Read, Update, Delete tasks
- Filter task status (e.g., completed, pending)
- Task edit modal
- Responsive table/card UI for task list

### 🎡 Task Selector Wheel
- Fun spinning wheel to randomly pick a task
- Animated & responsive

### 🌐 Frontend
- Built with **Next.js**, **Tailwind CSS**, **Tanstack query**
- Responsive for mobile, tablet, and desktop
- Framer Motion animations
- SweetAlert2 for confirmation popups
- Clean and consistent UI (Figma-based)

### 🛡 Security & Best Practices
- Input validation with `express-validator`
- CORS configuration
- Helmet for secure HTTP headers
- Global error handling middleware
- .env file for secrets

---

## 🛠 Tech Stack

| Layer      | Tech Used |
|------------|------------|
| Frontend   | Next.js, JavaScript, Context api, Tailwind CSS |
| Backend    | Node.js, Express.js, MongoDB, Mongoose |
| Auth       | bcrypt, JWT, HTTP-only cookies |
| Security   | CORS, Helmet, express-validator |
| Styling    | Tailwind CSS, Framer Motion, React Icons |
| Deployment | Vercel (Frontend & Backend), MongoDB Atlas |

---


### Frontend (`/frontend` or `/client`)
- Organized using reusable components and Redux slices
- Includes `components`, `features`, `pages`, and `hooks` folders

---

## 🚀 Getting Started

### 🔧 Local Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/task-manager-mern.git
   cd task-manager-mern
2. For backend
   - cd backend
   - npm install
   - npm run dev
3. For frontend
   - cd fron-tend
   - npm install
   - npm run dev
4. env file for backend
   - PORT=5000
   - MONGO_URI=mongodb+srv://sifatikram96:LCOyswUcj90XyoLr@cluster0.4pqqtzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   - JWT_SECRET=da8f18f49c767d1e1f3199ff3862752a40a6b2dd3a57d6709bf3b0906267b3a0a7bb262d9b520a1282b411800877f5a73a13aff17ff51a024ffe9c56c98125c2
   - JWT_REFRESH_SECRET=db553ee522803ffb37b26ca55034eb78f8b21fbb764069a0969503e4338314e175d33e8ccbd7d4c55b3c288f3950aeb8dbd5327b8c59f7a6912468bcdc001e66
   - NODE_ENV=production
   - CLIENT_URL=https://tasko-task-management.vercel.app
