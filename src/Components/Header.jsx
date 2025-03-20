import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import cartIcon from "/assets/Icons/shopping-cart-white.png";

const Header = () => {

    const {cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      <header className="px-4 sm:px-6 md:px-10 py-5 bg-violet-800 sticky top-0 z-50">
        <nav className="flex justify-between items-center">
          <h2 onClick={() => navigate("/")} className="text-white font-semibold text-[20px] cursor-pointer">GadzHub</h2>
          <ul className="flex justify-center items-center text-white gap-4 sm:gap-10">
            <NavLink to={"/"}>
              <li className="link">Products</li>
            </NavLink>
            <NavLink to={"/cart"}>
              <div className="flex items-center justify-center px-4 py-2 gap-4">
                <p className="text-[#f0f0f0] font-semibold">{cart.length}</p>
                <img src={cartIcon} loading="lazy" className="link w-6 h-6"/>
              </div>
            </NavLink>
            </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
