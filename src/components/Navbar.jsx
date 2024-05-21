import React from "react";
import myStoryLogo from "./icons/Mask group 1.svg";
import US from "./img/US.png.png";
import cart from "./icons/cart.svg";
import MenuIcon from "./icons/Menu.svg";

function Navbar() {
  return (
    <>
      <div className="flex items-center " style={{ width: 1727, height: 110 }}>
        <div className="logo-block">
          <img
            className="border-2 border-blue-500"
            src={myStoryLogo}
            alt="logo"
          />
        </div>
				<div>
					
				</div>
        <div>
          <div className="flex items-center gap-5">
            <button
              className="border-2 border-white-500 flex justify-center gap-2 rounded-3xl items-center"
              style={{ width: 80, height: 34 }}
            >
              <img src={US} alt="" />
              <p>US</p>
            </button>
            <button>
              <img src={cart} alt="cart" />
            </button>
          </div>
          <div>
            <p>Menu</p>
            <img src={MenuIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
