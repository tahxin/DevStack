import { useState } from 'react';
import Logo from '../assets/logo-text.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-base-100">
      <div className="flex items-center justify-between p-4">

        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <ul className="hidden md:flex gap-6">
          <li><a href="/">Home</a></li>
          <li><a href="/technologies">Technologies</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="hidden md:flex gap-3">
          <button className="btn btn-primary">Sign In</button>
          <button className="btn btn-secondary bg-linear-to-r from-blue-500 to-purple-500 rounded-3xl">Sign Up</button>
        </div>

        <button
          className="md:hidden btn btn-ghost btn-square"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>

      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          <ul className="flex flex-col gap-3">
            <li><a href="/">Home</a></li>
            <li><a href="/technologies">Technologies</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="flex gap-3 pt-2">
            <button className="btn btn-primary">Sign In</button>
            <button className="btn btn-secondary bg-linear-to-r from-blue-500 to-purple-500 rounded-3xl">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;