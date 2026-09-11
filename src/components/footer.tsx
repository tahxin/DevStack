import Logo from "../assets/logo-text.png";


export default function Footer() {
  return (
    <footer className="bg-white px-8 md:px-20 pt-16 pb-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-12">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-4">
            <img
              src={Logo}
              alt="DevStack Logo"
            />

          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="flex gap-4">
            <a href="https://github.com" className="text-sm text-gray-500 hover:text-gray-900">
              GitHub
            </a>
            <a href="https://twitter.com" className="text-sm text-gray-500 hover:text-gray-900">
              Twitter
            </a>
            <a href="https://linkedin.com" className="text-sm text-gray-500 hover:text-gray-900">
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-900 tracking-wider mb-4">
            PRODUCT
          </h3>

          <ul className="space-y-3">
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Tools
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Collections
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-900 tracking-wider mb-4">
            COMPANY
          </h3>

          <ul className="space-y-3">
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Contribute
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-900 tracking-wider mb-4">
            LEGAL
          </h3>

          <ul className="space-y-3">
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="max-w-6xl mx-auto mt-10 mb-6 border-gray-200" />

      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-gray-400">
          © 2026 DevStack. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="#"
            className="text-xs text-gray-400 hover:text-gray-900"
          >
            Privacy
          </a>

          <a
            href="#"
            className="text-xs text-gray-400 hover:text-gray-900"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}