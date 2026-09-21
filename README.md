# 記録チックス — Kiroku Ticks 📝

A minimal, Japanese-themed todo list app built with React and Tailwind CSS — featuring a live animated WebGL shader background, glassmorphism UI, and smooth completion transitions.

**🔗 Live Demo:** [todo-list-app-blush-omega.vercel.app](https://todo-list-app-blush-omega.vercel.app/)

---

## ✨ Features

- ➕ Add new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- ✅ Mark tasks as completed, with a smooth fade-out transition
- 👀 Toggle between pending and finished tasks
- 💾 Tasks persist locally via `localStorage`
- 🆔 Unique task IDs generated with UUID
- 🎴 Custom animated WebGL shader background (built with `ogl`)
- 🧊 Glassmorphism UI with a Japanese lantern-inspired color palette
- 📱 Fully responsive across mobile, tablet, and desktop
- 🎨 Clean, minimal interface with subtle hover and reveal animations

---

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| Framework | React, Vite |
| Styling | Tailwind CSS |
| Icons | React Icons |
| Graphics | WebGL shader via `ogl` |
| Utilities | UUID |
| Persistence | Browser `localStorage` |
| Deployment | Vercel |

---

## 🚀 Getting Started

Clone the repo and run it locally:

```bash
git clone https://github.com/syedinjamulhaque/todo-list-app.git
cd todo-list-app
npm install
npm run dev
```

The app will be running at `http://localhost:5173` by default.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── GhostFibers.jsx   # animated shader background
├── App.jsx
├── App.css
└── main.jsx
```

---

## 🎯 What This Project Demonstrates

- Managing complex UI state (add/edit/delete/toggle/filter) with plain React hooks — no external state library
- Persisting state across sessions with `localStorage`, with a load-guard to avoid overwriting stored data on first render
- Integrating a custom WebGL/GLSL shader as a live, responsive, theme-matched background
- Building a cohesive visual identity (glass UI, color palette, typography) around a specific cultural theme rather than generic defaults
- Practical performance/UX tradeoffs — e.g. disabling fixed backgrounds on mobile Safari where they're known to misbehave

---

## 📬 Connect

- GitHub: [@syedinjamulhaque](https://github.com/syedinjamulhaque)
- LinkedIn: [syedinjamulhaque](https://www.linkedin.com/in/syedinjamulhaque/)

---

Made with ❤️ using React & Tailwind CSS.
