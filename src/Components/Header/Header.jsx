import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const Header = () => {
  const [isWindowsOpen, setIsWindowsOpen] = useState(false);
  const [isDoorsOpen, setIsDoorsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Mobile menu ke liye states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileWindowsOpen, setMobileWindowsOpen] = useState(false);
  const [mobileDoorsOpen, setMobileDoorsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const activeStyle = ({ isActive }) =>
    isActive ? "text-orange-400 font-medium transition" : "text-white hover:text-red-300 transition";

  const mobileActiveStyle = ({ isActive }) =>
    isActive ? "text-orange-400 font-medium transition block py-3" : "text-white hover:text-red-300 transition block py-3";

  return (
    <header className="relative w-full bg-cover bg-center px-6 py-4 mt-20 flex items-center justify-between">
      
      {/* Left Section: Logo and Brand Info */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Thermoproof Logo"
            className="h-16 lg:h-20 w-auto object-contain transition-transform duration-200 hover:scale-105"
          />
        </Link>

        {/* Proudly Canadian Badge */}
        <div className="hidden md:flex items-center space-x-1 text-white font-bold pl-4">
          <span className='text-lg'>🍁</span>
          <span className="tracking-wide text-lg">Proudly Canadian</span>
        </div>
      </div>

      {/* Center/Right Section: Navigation Links — sirf lg aur upar dikhega */}
      <nav className="hidden lg:flex items-center space-x-8 text-xl font-bold">
        <NavLink to="/locations" className={activeStyle}>
          Locations
        </NavLink>

        <NavLink to="/installation-services" className={activeStyle}>
          Installation Services
        </NavLink>

        {/* Dropdown: Windows */}
        <div
          className="relative cursor-pointer group"
          onMouseEnter={() => setIsWindowsOpen(true)}
          onMouseLeave={() => setIsWindowsOpen(false)}
        >
          <div className="text-white hover:text-red-300 flex items-center space-x-1 py-2">
            <span>Windows</span>
            <span className="text-[10px]">▼</span>
          </div>
          {isWindowsOpen && (
            <div className="absolute left-0 mt-0 w-48 bg-black/90 text-white rounded shadow-lg py-2 z-50">
              <Link to="/windows/vinyl" className="block px-4 py-2 hover:bg-orange-500">Vinyl Windows</Link>
              <Link to="/windows/aluminum" className="block px-4 py-2 hover:bg-orange-500">Aluminum Windows</Link>
            </div>
          )}
        </div>

        {/* Dropdown: Doors */}
        <div
          className="relative cursor-pointer group"
          onMouseEnter={() => setIsDoorsOpen(true)}
          onMouseLeave={() => setIsDoorsOpen(false)}
        >
          <div className="text-white hover:text-red-300 flex items-center space-x-1 py-2">
            <span>Doors</span>
            <span className="text-[10px]">▼</span>
          </div>
          {isDoorsOpen && (
            <div className="absolute left-0 mt-0 w-48 bg-black/90 text-white rounded shadow-lg py-2 z-50">
              <Link to="/doors/patio" className="block px-4 py-2 hover:bg-orange-500">Patio Doors</Link>
              <Link to="/doors/entry" className="block px-4 py-2 hover:bg-orange-500">Entry Doors</Link>
            </div>
          )}
        </div>

        {/* Dropdown: About */}
        <div
          className="relative cursor-pointer group"
          onMouseEnter={() => setIsAboutOpen(true)}
          onMouseLeave={() => setIsAboutOpen(false)}
        >
          <div className="text-white hover:text-red-300 flex items-center space-x-1 py-2">
            <span>About</span>
            <span className="text-[10px]">▼</span>
          </div>
          {isAboutOpen && (
            <div className="absolute left-0 mt-0 w-48 bg-black/90 text-white rounded shadow-lg py-2 z-50">
              <Link to="/about/story" className="block px-4 py-2 hover:bg-orange-500">Our Story</Link>
              <Link to="/about/team" className="block px-4 py-2 hover:bg-orange-500">Our Team</Link>
            </div>
          )}
        </div>

        <NavLink to="/rebates" className={activeStyle}>
          Rebates
        </NavLink>
      </nav>

      {/* Right Section: Contact Us Button — sirf lg aur upar */}
      <div className="hidden lg:flex items-center">
        <Link
          to="/contact-us"
          className="border border-white text-white font-medium px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 text-sm tracking-wide"
        >
          Contact Us
        </Link>
      </div>

      {/* Hamburger Icon — sirf lg se chote screens pe dikhega */}
      <button
        className="lg:hidden text-white z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col px-6 py-8">
          
          {/* Close button */}
          <button
            className="self-end text-white mb-6"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <NavLink to="/locations" className={mobileActiveStyle} onClick={() => setIsMobileMenuOpen(false)}>
            Locations
          </NavLink>

          <NavLink to="/installation-services" className={mobileActiveStyle} onClick={() => setIsMobileMenuOpen(false)}>
            Installation Services
          </NavLink>

          {/* Mobile Dropdown: Windows */}
          <div className="border-b border-white/10">
            <button
              className="w-full flex items-center justify-between text-white py-3"
              onClick={() => setMobileWindowsOpen(!mobileWindowsOpen)}
            >
              <span>Windows</span>
              <span className={`text-xs transition-transform duration-200 ${mobileWindowsOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {mobileWindowsOpen && (
              <div className="pl-4 pb-2 flex flex-col">
                <Link to="/windows/vinyl" className="text-white/80 py-2" onClick={() => setIsMobileMenuOpen(false)}>Vinyl Windows</Link>
                <Link to="/windows/aluminum" className="text-white/80 py-2" onClick={() => setIsMobileMenuOpen(false)}>Aluminum Windows</Link>
              </div>
            )}
          </div>

          {/* Mobile Dropdown: Doors */}
          <div className="border-b border-white/10">
            <button
              className="w-full flex items-center justify-between text-white py-3"
              onClick={() => setMobileDoorsOpen(!mobileDoorsOpen)}
            >
              <span>Doors</span>
              <span className={`text-xs transition-transform duration-200 ${mobileDoorsOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {mobileDoorsOpen && (
              <div className="pl-4 pb-2 flex flex-col">
                <Link to="/doors/patio" className="text-white/80 py-2" onClick={() => setIsMobileMenuOpen(false)}>Patio Doors</Link>
                <Link to="/doors/entry" className="text-white/80 py-2" onClick={() => setIsMobileMenuOpen(false)}>Entry Doors</Link>
              </div>
            )}
          </div>

          {/* Mobile Dropdown: About */}
          <div className="border-b border-white/10">
            <button
              className="w-full flex items-center justify-between text-white py-3"
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
            >
              <span>About</span>
              <span className={`text-xs transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {mobileAboutOpen && (
              <div className="pl-4 pb-2 flex flex-col">
                <Link to="/about/story" className="text-white/80 py-2" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
                <Link to="/about/team" className="text-white/80 py-2" onClick={() => setIsMobileMenuOpen(false)}>Our Team</Link>
              </div>
            )}
          </div>

          <NavLink to="/rebates" className={mobileActiveStyle} onClick={() => setIsMobileMenuOpen(false)}>
            Rebates
          </NavLink>

          <Link
            to="/contact-us"
            className="mt-6 border border-white text-white font-medium px-6 py-3 rounded-full text-center hover:bg-white hover:text-black transition duration-300 text-sm tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>

    </header>
  );
};

export default Header;