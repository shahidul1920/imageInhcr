import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  const [user, setUser] = useState(false);



  return (
    <header className="bg-slate-600 text-white shadow-md sticky top-0 z-50 px-4 md:px-6 xl:px-0">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="logoNnav flex gap-6 md:gap-10 xl:gap-12 items-center justify-center">
          <div className="logo flex gap-2">
            <img
              className="w-[30px] md:w-[40px]"
              src="./bucket-logo.png"
              alt="Image bucket"
            />
            <h3 className="text-sm md:text-xl font-bold">Image Bucket</h3>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-4 text-sm">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/pricing">Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="user">
          {user ? (
            <div className="userinfo">
              <div className="imgNname">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src="./user.png"
                  alt="user"
                />
                <h3 className="text-sm font-bold">User Name</h3>
              </div>
            </div>
          ) : (
            <div className="logInfo">
              <NavLink to="/login" className="text-sm font-bold text-blue-500">
                Login
              </NavLink>
              <span className="mx-2">|</span>
              <NavLink to="/register" className="text-sm font-bold text-blue-900">
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
