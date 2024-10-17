import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-white text-black sticky top-0 flex justify-between items-center py-5 px-10 font-clash-display font-bold'>
      <h1 className='text-2xl font-font-clash-grotesk'>
        StepUp
      </h1>

      {/* Desktop Menu */}
      <nav className='hidden md:flex'>
        <ul className='flex gap-10'>
          <li>Home</li>
          <li>Products</li>
          <li>Wishlist</li>
          <li>Bag</li>
          <li>About Us</li>
        </ul>
      </nav>

      {/* User Icon (Visible on all screens) */}
      <FaUser className='text-2xl' />

      {/* Hamburger Icon (Visible on mobile) */}
      <div className='md:hidden'>
        <button onClick={toggleMenu}>
          {isOpen ? <HiX className='text-3xl' /> : <HiMenuAlt3 className='text-3xl' />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-16 left-0 right-0 bg-white shadow-lg py-5 z-20 md:hidden'>
          <nav>
            <ul className='flex flex-col items-center gap-5'>
              <li>Home</li>
              <li>Products</li>
              <li>Wishlist</li>
              <li>Bag</li>
              <li>About Us</li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
