import { useState } from 'react';
import Logo from '../assets/logo-text.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-base-100">

      <div className="hidden md:flex items-center justify-between p-4">
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <ul className="flex gap-6">
          <li><a href="/">Home</a></li>
          <li><a href="/technologies">Technologies</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="flex gap-3">
          <button className="btn btn-ghost">Sign In</button>
          <button className="btn btn-brand rounded-3xl">Sign Up</button>
        </div>
      </div>

      <div className="md:hidden grid grid-cols-3 items-center px-3 py-2">

        <div className="flex justify-start">
          <button
            className="btn btn-ghost btn-square"
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

        <div className="flex justify-center">
          <img src={Logo} alt="Logo" className="h-8 object-contain" />
        </div>

        <div className="flex justify-end gap-2">
          <button className="btn btn-ghost btn-sm">Sign In</button>
          <button className="btn btn-sm btn-brand rounded-3xl">Sign Up</button>
        </div>

      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3">
            <li><a href="/">Home</a></li>
            <li><a href="/technologies">Technologies</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;