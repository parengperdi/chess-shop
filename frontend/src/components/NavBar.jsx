import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Chess Shop Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl  font-semibold text-gray-900">
              ChessShop
            </span>
          </NavLink>

          {/* Links */}
          <div className="hidden md:flex gap-6">
            <NavLink
              to="/products"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Products
            </NavLink>

            <a
              href="/about"
              className="text-gray-700 hover:text-black transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right Side (Cart / Admin / etc.) */}
          <div className="flex items-center gap-4">
            <button className="px-3 py-1 rounded-lg bg-black text-white hover:bg-gray-900 transition-colors">
              Cart
            </button>
            <NavLink
              to="/admin"
              className="px-3 py-1 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Admin
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
