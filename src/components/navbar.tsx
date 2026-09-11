import Logo from '../assets/logo-text.png';

const navbar = () => {
    return (
        <nav className="flex column items-center justify-between p-4">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="nav-links">
                <ul className="flex space-x-4">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Technologies</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="nav-actions ">
                <button className="login-btn btn btn-primary">Sign In</button>
                <button className="signup-btn btn btn-secondary color-[#D91B7E]">Sign Up</button>
            </div>
        </nav>
    );
};

export default navbar;