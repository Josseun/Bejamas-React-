import React from "react";
import LogoImg from "../assets/img/Logo.png";
import CartImg from "../assets/img/Group 3.1.svg";

function Nav({ toggleCart, cartCount }) {
  return (
    <div>
      <div className="flex justify-between items-center w-full p-4">
        <a href="#">
          <img
            src={LogoImg}
            alt="BEJAMAS"
            className="lg:w-50; md:w-30 ssm:w-25"
          />
        </a>
        <div className="relative cursor-pointer">
          <div className="absolute right-0 bottom-0 bg-black text-white text-xs w-[21px] h-[21px] flex justify-center items-center">
            {cartCount}
          </div>
          <img src={CartImg} onClick={toggleCart} alt="" />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Nav;
