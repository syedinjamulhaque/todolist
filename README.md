```md
# 記録チックス — Kiroku Ticks 📝

A minimal, Japanese-themed todo list application built with React and Tailwind CSS. The app combines everyday task management with a glassmorphism interface and a live animated WebGL shader background.

🔗 **Live Demo:** [todolist-five-virid-85.vercel.app](https://todolist-five-virid-85.vercel.app/)

## ✨ Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed with a smooth fade-out transition
- Toggle between pending and completed tasks
- Save tasks locally using browser `localStorage`
- Generate unique task IDs with UUID
- Animated WebGL shader background using `ogl`
- Japanese lantern-inspired glassmorphism UI
- Responsive design for mobile, tablet, and desktop
- Smooth hover and reveal animations

## 🛠️ Tech Stack

| Category | Tools |
| --- | --- |
| Framework | React, Vite |
| Styling | Tailwind CSS |
| Icons | React Icons |
| Graphics | WebGL with ogl |
| Utilities | UUID |
| Data Persistence | Browser localStorage |
| Deployment | Vercel |

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/syedinjamulhaque/todolist.git
cd todolist
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local address shown in your terminal, usually:

```text
http://localhost:5173
```

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

- Managing task creation, editing, deletion, completion, and filtering with React hooks
- Persisting task data across browser sessions with `localStorage`
- Integrating a custom WebGL/GLSL animated background into a React app
- Building a cohesive Japanese-inspired visual design
- Creating a responsive and polished user experience

## 📬 Connect

- GitHub: [@syedinjamulhaque](https://github.com/syedinjamulhaque)

---

Made with ❤️ using React, Tailwind CSS, and WebGL.
```
