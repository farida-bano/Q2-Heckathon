'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { FiUser } from 'react-icons/fi';
import { CiSearch } from 'react-icons/ci';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [loginModal, setLoginModal] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [cartItems, setCartItems] = useState(0); 
  const [favorites, setFavorites] = useState(0); 

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  
  // Explicitly typing `menu` as a string
  const toggleDropdown = useCallback((menu: string) => {
    setDropdown((prev) => (prev === menu ? null : menu));
  }, []);
  
  const toggleLoginModal = useCallback(() => setLoginModal((prev) => !prev), []);
  const toggleSearch = useCallback(() => setSearchActive((prev) => !prev), []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);
  const handleAddToCart = () => setCartItems(cartItems + 1);
  const handleAddToFavorites = () => setFavorites(favorites + 1);

  const handleRegister = () => {
    setIsLoggedIn(true);
    setLoginModal(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setLoginModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      if (!e.target.closest('.dropdown') && !e.target.closest('.login-modal')) {
        setDropdown(null);
        setLoginModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white text-[#252B42] py-6">
      <div className="container mx-auto flex items-center justify-between">
        {/*Logo */}
        <div className="text-4xl font-bold">
          <Link href="#" className="hover:text-[#23A6F0]">
            Bandage
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="text-2xl text-[#252B42]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Backdrop */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}

        {/* Navigation Links */}
        <div
          className={`${menuOpen ? 'block' : 'hidden'} md:flex space-x-8 text-[#737373] font-bold`}
        >
          <div className="relative dropdown">
            <Link
              href="#"
              className="hover:text-[#23A6F0]"
              onClick={() => toggleDropdown('home')}
              aria-haspopup="true"
              aria-expanded={dropdown === 'home' ? 'true' : 'false'}
            >
              Home
            </Link>
            {dropdown === 'home' && (
              <div className="absolute bg-white shadow-md mt-2 rounded">
                <Link href="#" className="block px-4 py-2 hover:text-[#23A6F0]">
                  Subitem 1
                </Link>
                <Link href="#" className="block px-4 py-2 hover:text-[#23A6F0]">
                  Subitem 2
                </Link>
              </div>
            )}
          </div>
          <div className="relative dropdown">
            <Link
              href="#"
              className="hover:text-[#23A6F0]"
              onClick={() => toggleDropdown('shop')}
              aria-haspopup="true"
              aria-expanded={dropdown === 'shop' ? 'true' : 'false'}
            >
              Shop
            </Link>
            {dropdown === 'shop' && (
              <div className="absolute bg-white shadow-md mt-2 rounded">
                <Link href="#" className="block px-4 py-2 hover:text-[#23A6F0]">
                  Shop Item 1
                </Link>
                <Link href="#" className="block px-4 py-2 hover:text-[#23A6F0]">
                  Shop Item 2
                </Link>
              </div>
            )}
          </div>
          <Link href="#" className="hover:text-[#23A6F0]">
            About
          </Link>
          <Link href="#" className="hover:text-[#23A6F0]">
            Blog
          </Link>
          <Link href="#" className="hover:text-[#23A6F0]">
            Contact
          </Link>
          <Link href="#" className="hover:text-[#23A6F0]">
            Pages
          </Link>
        </div>

        {/* Login/Register */}
        <div className="flex items-center space-x-4 ml-8">
          <FiUser
            className="text-lg"
            onClick={toggleLoginModal}
            aria-label="Open login modal"
          />

          {/* Login/Register */}
          {loginModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20 login-modal">
              <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                <h2 className="text-lg font-bold mb-4">
                  {isLoggedIn ? 'Login' : 'Register'}
                </h2>
                <button
                  className="absolute top-4 right-4 text-gray-600"
                  onClick={toggleLoginModal}
                  aria-label="Close modal"
                >
                  ✕
                </button>
                {!isLoggedIn ? (
                  <>
                    <input
                      type="text"
                      placeholder="Username"
                      className="border p-2 rounded mb-4 w-full"
                      aria-label="Username"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="border p-2 rounded mb-4 w-full"
                      aria-label="Password"
                    />
                    <button
                      className="bg-[#23A6F0] text-white px-4 py-2 rounded w-full"
                      onClick={handleRegister}
                    >
                      Register
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Username"
                      className="border p-2 rounded mb-4 w-full"
                      aria-label="Username"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="border p-2 rounded mb-4 w-full"
                      aria-label="Password"
                    />
                    <button
                      className="bg-[#23A6F0] text-white px-4 py-2 rounded w-full"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Search Bar */}
          <div className="relative">
            <CiSearch
              className={`text-lg ${searchActive ? 'text-[#23A6F0]' : ''}`}
              onClick={toggleSearch}
              aria-label="Toggle search"
            />
            {searchActive && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-full left-0 border mt-2 p-2 rounded shadow-md"
                value={searchQuery}
                onChange={handleSearchChange}
                aria-label="Search"
              />
            )}
          </div>

          {/* Cart */}
          <div className="w-[46px] h-[46px] flex justify-center items-center ml-4 relative">
            <RiShoppingCart2Line
              className="text-lg text-[#23A6F0]"
              onClick={handleAddToCart}
              aria-label="Add to cart"
            />
            <span className="absolute top-0 right-0 text-[#23A6F0] text-xs rounded-full px-2">
              {cartItems}
            </span>
          </div>

          {/* Heart */}
          <div className="w-[46px] h-[46px] flex justify-center items-center ml-4 relative">
            <FaRegHeart
              className="text-lg text-[#23A6F0]"
              onClick={handleAddToFavorites}
              aria-label="Add to favorites"
            />
            <span className="absolute top-0 right-0 text-[#23A6F0] text-xs rounded-full px-2">
              {favorites}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
