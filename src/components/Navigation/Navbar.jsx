import PropTypes from "prop-types";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Logo from "./Logo.jsx";

import privacyLogo from "./../../../src/assets/logos/orange_privacy_logo.png";
import onlyfansLogo from "./../../../src/assets/logos/OnlyFans_logo.png";
import Thumb from "./Thumb.jsx";

const instagramUrl = "https://www.instagram.com/djguicaldeira/";
const onlyFansUrl = "https://onlyfans.com/guidomingos";
const privacyUrl = "https://privacy.com.br/Profile/GuiCaldeira";

const Navbar = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Fecha menu ao mudar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Thumb />
      <nav
        id="navbar"
        className="flex items-center z-50 bg-cover bg-black border-b-2 border-red-600 h-[70px] top-0 w-full px-4 md:px-8 lg:px-16"
      >
        {/* Logo — INTACTO */}
        <div className="flex items-center h-full" style={{ flex: 1 }}>
          <Logo />
        </div>

        {/* Desktop Menu — INTACTO */}
        <div className="hidden md:flex items-center px-px mr-6">
          <div
            className="nav-links mr-2 px-px text-white font-semibold rounded-lg place-content-center space-x-2 items-center"
            style={{ flex: 4 }}
          >
            {data.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="px-3 py-2 font-bold text-white rounded-lg transition hover:bg-red-500 hover:text-black hover:bg-opacity-90"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a href={instagramUrl}>
              <FaInstagram className="text-white text-2xl hover:text-red-500" />
            </a>
            <a href={onlyFansUrl}>
              <img src={onlyfansLogo} alt="OnlyFans Logo" className="w-auto h-6" />
            </a>
            <a href={privacyUrl}>
              <img src={privacyLogo} alt="Privacy Logo" className="w-auto h-6" />
            </a>
          </div>
        </div>

        {/* Mobile Burger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
          fixed top-[70px] left-0 w-full bg-black bg-opacity-95 border-b-2 border-red-600 z-40
          transition-all duration-300 ease-in-out
          md:hidden
          ${isMenuOpen ? "opacity-100 max-h-screen overflow-y-auto pointer-events-auto" : "opacity-0 max-h-0 overflow-hidden pointer-events-none"}
        `}
        >
          <div className="flex flex-col p-4">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-4 mb-6">
              {data.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="px-4 py-3 font-bold text-white rounded-lg transition hover:bg-red-500 hover:text-black hover:bg-opacity-90 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center items-center gap-6 border-t border-gray-700 pt-4">
              <a href={instagramUrl} onClick={() => setIsMenuOpen(false)}>
                <FaInstagram className="text-white text-2xl hover:text-red-500" />
              </a>
              <a href={onlyFansUrl} onClick={() => setIsMenuOpen(false)}>
                <img src={onlyfansLogo} alt="OnlyFans Logo" className="w-8 h-auto" />
              </a>
              <a href={privacyUrl} onClick={() => setIsMenuOpen(false)}>
                <img src={privacyLogo} alt="Privacy Logo" className="w-8 h-auto" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
};

Navbar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;