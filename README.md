# 記録チックス — Kiroku Ticks 📝

A minimal, Japanese-themed to-do list application built with React and Tailwind CSS. Kiroku Ticks pairs everyday task management with a glassmorphism interface and a live, animated WebGL shader background.

🔗 **Live Demo:** [todolist-five-virid-85.vercel.app](https://todolist-five-virid-85.vercel.app/)

---
## ✨ Features

- Add, edit, and delete tasks
- Mark tasks as completed with a smooth fade-out transition
- Toggle between pending and completed views
- Persist tasks locally via browser `localStorage`
- Generate unique task IDs with UUID
- Animated WebGL shader background powered by `ogl`
- Japanese lantern-inspired glassmorphism UI
- Fully responsive design for mobile, tablet, and desktop
- Smooth hover and reveal animations throughout

## 🛠️ Tech Stack

| Category | Tools |
| --- | --- |
| Framework | React, Vite |
| Styling | Tailwind CSS |
| Icons | React Icons |
| Graphics | WebGL (via `ogl`) |
| Utilities | UUID |
| Data Persistence | Browser `localStorage` |
| Deployment | Vercel |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (bundled with Node.js)

### 1. Clone the repository

```bash
git clone https://github.com/syedinjamulhaque/todolist.git
cd todolist
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Then open the local address printed in your terminal — typically:

```text
http://localhost:5173
```

### 4. Build for production

```bash
npm run build
```

The optimized output is generated in the `dist/` directory, ready to deploy.

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── GhostFibers.jsx   # Animated WebGL shader background
├── App.jsx
├── App.css
└── main.jsx
```

## 🎯 What This Project Demonstrates

- Managing task creation, editing, deletion, and completion state with React hooks
- Filtering and toggling between pending and completed tasks
- Persisting task data across browser sessions with `localStorage`
- Integrating a custom WebGL/GLSL animated background into a React application
- Building a cohesive, Japanese-inspired visual design system
- Delivering a responsive, polished user experience

## 📬 Connect

- GitHub: [@syedinjamulhaque](https://github.com/syedinjamulhaque)

---

Made with ❤️ using React, Tailwind CSS, and WebGL.
