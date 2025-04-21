
# ⚛️ React + Redux Toolkit + Redux Saga (Vite + TypeScript)

This project is a demonstration of modern state management in a React + TypeScript application using Redux Toolkit and Redux Saga.

It leverages powerful tools such as **Redux Toolkit**, **Saga middleware**, and **Vite** for high-performance development, and provides a clean modular structure for state and side-effect handling.

---

## 🧩 Key Features

- 🔄 Global state management with Redux Toolkit
- ⏳ Side-effect handling via Redux Saga
- ⚙️ Asynchronous counter actions via Sagas
- ✅ TypeScript throughout the application
- 🧼 Modular separation of concerns: `components`, `redux` (store, slice, saga)
- 🚀 Connected via `Provider` in `main.tsx`

---

## 📁 Project Structure

```
src/
├── App.tsx
├── components/
│   └── Counter.tsx
├── main.tsx
├── redux/
│   ├── counterSagas.ts
│   ├── counterSlice.ts
│   └── store.ts
├── index.css
└── vite-env.d.ts
```

---

## 🚀 Running Locally

### 1. Install dependencies
```bash
yarn instal
```

### 2. Start development server
```bash
yarn dev
```

🔗 Open in browser: **http://localhost:5173**

---

## 🌐 Deployment

You can deploy the app to platforms like **Vercel**, **Netlify**, or any static hosting provider.

## 🧠 Technologies Used

- ⚛️ React
- 💬 TypeScript
- 📦 Redux Toolkit
- 🔁 Redux Saga
- ⚡ Vite
- 🎨 CSS

---
## 👉 Live Demo

**Live Deployment:**  
[Vercel Project](https://r9-nadiias-projects-dc6d9292.vercel.app/)