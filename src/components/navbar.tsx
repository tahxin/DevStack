import Logo from '../assets/logo-text.png';

const navbar = () => {
    return (
        <nav className="flex column items-center justify-between p-4 bg-gray-800 text-white">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Technologies</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="nav-actions">
                <button className="login-btn">Sign In</button>
                <button className="signup-btn">Sign Up</button>
            </div>
        </nav>
    );
};

export default navbar;