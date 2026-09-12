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

##  About

DevStack is a developer tool for discovering and assembling the perfect tech stack for your next project. Browse curated technologies across frontend, backend, database, language, styling, and DevOps categories - then handpick the ones that fit your project into your personal stack panel.

---

##  Features

###  Browse Technologies
Explore a curated library of modern technologies displayed in a clean, responsive grid.Each card shows the technology's logo, description, category tags, and community rating.

###  Build Your Stack
Click **"Add to Stack"** on any technology card to add it to your personal **Your Stack** panel. Each item in the panel displays the icon, name, and category. You can remove individual items or clear the entire stack at once.

###  Smart Feedback with Toast Notifications
Every action in the stack - adding, removing, clearing, or attempting a duplicate add - triggers a contextual toast notification powered by **react-toastify**, so you always know what happened and why.

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

##  Getting Started

```bash
# Clone the repository
git clone [https://github.com/tahxin/devstack.git](https://github.com/tahxin/DevStack.git)
cd DevStack

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

##  React Q&A

### 1. What is JSX, and why is it used in React?

JSX is JavaScript XML which is used to write html like code in JS. It makes it easier to write react code because the syntax is similar to html making it easier to write front end codes.

---

### 2. What is the difference between props and state?

Props are data passed from parent to child in JS.
State is a value that is managed inside an component and can be changed to update the ui or re-render components using react.

---

### 3. What does the `useState` hook do, and where was it used in this project?

useState allows a React component to remember its state that can be changed or manipulated to re-render components based on state changes ie state value changes.

In my repo I used useState in 

useStack.ts file to track the list of technologies the user adds to their stack.
And navbar.tsx uses useState(false) to track responsive mobile menu.And uses the default value of false to make the website responsive.

---

### 4. What does the `useEffect` hook do, and why would you need it to load JSON data?

`useEffect` is used to do side effects like fetching data or doing something after the page loads. Maybe connected to concepts like Hydration and and Lighthouse Performance management checks.

In this project, `technologies.tsx` uses `useEffect` to fetch data from `/techstack.json` . The returned data then is used in the `techs` state with `useState`, which makes the tech cards load after the loading processes finish.Most likely an async function and these are used to make async functions easier.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The key is there to helps React identify each item in a given list I presume. It helps with optimization. This id helps React keep unique items in track so that they dont't need to be re-rendered everytime.

In this project, each `<TechCard>` uses `key={tech.id}` since those ids are unique per technology.

---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means only showing a part of the Website when a certain condition is true/false.Basically an if else statement but in JSX.

In **`mystack.tsx`**, when the stack is empty an "Your stack is empty" messege is shown:

```tsx
{stack.length === 0 && (
  <div className="border-2 border-dashed ...">
    Your stack is empty.
  </div>
)}
```

---

### 7. How do you pass data from parent to child, and how does a child send something back?

Using Props and Using Callback Functions 

---

<div align="center">

Made with back-breaking fever, terrible posture , tasty NAPA Extra , and an exam pressure sitting permanently on my mind 📚💀.

Thank you. 🫡

</div>
