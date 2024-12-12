import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Nav from "./Nav";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";

function Header({ isDarkMode, setIsDarkMode, language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
    console.log("isOpen:", !isOpen); 
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ES" ? "EN" : "ES"));
  };

  return (
    <header className="z-50 sticky top-0 w-full bg-light dark:bg-dark pixel">
      <nav className="container mx-auto flex items-center justify-between p-3">
        {/* Logo */}
        <Logo />

        {/* Navigation Menu */}
        <div className="hidden lg:flex justify-center items-center flex-1">
          <Nav language={language} />
        </div>

        {/* Dark Mode and Language Toggle */}
        <MenuToggle
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
          language={language}
          toggleLanguage={toggleLanguage}
        />

        {/* Hamburger Menu */}
        <button
          className="block lg:hidden"
          onClick={handleToggleMenu}
          aria-label="Toggle Menu"
        >
          <GiHamburgerMenu className="text-xl text-black dark:text-white" />
        </button>
      </nav>

      {/* Responsive Navigation */}
      <div
        className={`absolute left-0 top-full w-full z-50 transition-transform duration-300 ${
          isOpen ? "relative bg-light dark:bg-dark" : "hidden"
        }`}
      >
        <Nav language={language} />
      </div>
    </header>
  );
}

export default Header;
