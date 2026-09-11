import Logo from '../assets/logo-text.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      
      {/* Logo */}
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      {/* Navigation */}
      <ul className="flex gap-6">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/technologies">Technologies</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Actions */}
      <div className="flex gap-3">
        <button className="btn btn-primary">
          Sign In
        </button>

        <button className="btn btn-secondary bg-linear-to-r from-blue-500 to-purple-500 rounded-3xl">
          Sign Up
        </button>
      </div>

    </nav>
  );
};

export default Navbar;