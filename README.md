<div align="center">

# 🛠️ DevStack

**Explore, compare, and build your ideal development stack — all in one place.**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com)

</div>

---

## 📖 About

DevStack is a developer tool for discovering and assembling the perfect tech stack for your next project. Browse curated technologies across frontend, backend, database, language, styling, and DevOps categories — then handpick the ones that fit your project into your personal stack panel.

---

## ✨ Features

### 🔍 Browse Technologies
Explore a curated library of modern technologies displayed in a clean, responsive grid (1 column on mobile → 2 on tablet → 3 on desktop). Each card shows the technology's logo, description, category tags, and community rating.

### 📦 Build Your Stack
Click **"Add to Stack"** on any technology card to add it to your personal **Your Stack** panel. Each item in the panel displays the icon, name, and category. You can remove individual items or clear the entire stack at once.

### 🔔 Smart Feedback with Toast Notifications
Every action in the stack — adding, removing, clearing, or attempting a duplicate add — triggers a contextual toast notification powered by **react-toastify**, so you always know what happened and why.

---

## 🧰 Tech Stack

| Category   | Technology                    |
|------------|-------------------------------|
| Framework  | React 19                      |
| Language   | TypeScript 6                  |
| Bundler    | Vite 8                        |
| Styling    | Tailwind CSS v4 + DaisyUI v5  |
| Alerts     | react-toastify                |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/devstack.git
cd devstack

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
src/
├── assets/              # Images and static files
├── components/
│   ├── navbar.tsx       # Responsive navigation bar
│   ├── banner.tsx       # Hero section
│   ├── explore.tsx      # Section heading
│   ├── mystack.tsx      # Your Stack panel
│   ├── footer.tsx       # Footer
│   └── techstack/
│       ├── techcard.tsx     # Individual technology card
│       ├── technologies.tsx # Technology grid
│       └── techstack.ts     # Technology data
├── hooks/
│   └── useStack.ts      # Stack state management hook
├── App.tsx
└── main.tsx
```

---

## 💡 React Q&A

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets you write HTML-like code directly inside JavaScript. React uses it because it makes it much easier to describe what the UI should look like alongside the logic that controls it — instead of writing `React.createElement(...)` calls everywhere, you just write `<button>Click me</button>` and React handles the rest under the hood.

---

### 2. What is the difference between props and state?

**Props** are values passed *into* a component from its parent — they're read-only from the component's perspective, like function arguments.  
**State** is data that lives *inside* a component and can change over time. When state changes, React re-renders the component to reflect the new data.

In short: props come from outside, state is managed from within.

---

### 3. What does the `useState` hook do, and where was it used in this project?

`useState` lets a component remember a value between renders and re-render automatically when that value changes.

In this project:
- **`useStack.ts`** uses `useState<Tech[]>([])` to track the list of technologies the user has added to their stack.
- **`navbar.tsx`** uses `useState(false)` to track whether the mobile menu is open or closed.

---

### 4. What does the `useEffect` hook do, and why would you need it to load JSON data?

`useEffect` lets you run side effects — code that reaches outside the component, like fetching data, subscribing to events, or setting up timers — after the component renders.

If you were loading the tech data from an external JSON file or API, you'd use `useEffect` so the fetch happens *after* the component mounts, not during the render itself (which would cause issues). In this project the data is imported statically from `techstack.ts`, so no `useEffect` was needed — but if the data came from an API, you'd fetch it inside a `useEffect` and store the result in state.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to track which items in a list are which across re-renders. Without a unique key, React can't tell whether an item moved, was removed, or was added — so it re-renders everything from scratch, which is slow and can cause bugs (like inputs losing focus or animations glitching).

In this project, each `<TechCard>` uses `key={tech.id}` (e.g. `"react"`, `"nodejs"`) since those IDs are unique per technology.

---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means only showing a piece of UI when a certain condition is true — similar to an `if` statement but inside JSX.

In **`mystack.tsx`**, when the stack is empty an empty-state message is shown:

```tsx
{stack.length === 0 && (
  <div className="border-2 border-dashed ...">
    Your stack is empty.
  </div>
)}
```

The dashed box only renders when there are no items. When you add a technology, it disappears and the stack items appear instead.

---

### 7. How do you pass data from parent to child, and how does a child send something back?

**Parent → Child:** through **props**. The parent includes the child in JSX and passes values as attributes:

```tsx
// App.tsx (parent) passes the stack and a handler down
<Technologies stack={stack} onAdd={addToStack} />
```

**Child → Parent:** through **callback functions** passed as props. The parent defines the function, passes it to the child, and the child calls it when something happens:

```tsx
// TechCard (child) calls onAdd when the button is clicked
<button onClick={() => onAdd({ id, name, logo, tags })}>
  Add to Stack
</button>
```

This pattern keeps all the real state in the parent (`App.tsx` via `useStack`) while child components stay focused on rendering and triggering events.

---

<div align="center">

Made with ❤️ and a lot of ☕

</div>
