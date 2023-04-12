import React from "react";
import "./style.scss";
import Navigation from "../../ui/navigation/navigation";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
        <Link className="logo" to="/main">
          <img className="logoimg" src="./image/Logo.jpg" alt=""/>
        </Link>
        <Navigation/>
        <div className="headerIcons">
          <Link className="icon" to="/">
            <svg className="iconSearh" width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34 33L26.2667 25.5083M30.4444 15.7778C30.4444 23.387 24.0769 29.5556 16.2222 29.5556C8.36751 29.5556 2 23.387 2 15.7778C2 8.16852 8.36751 2 16.2222 2C24.0769 2 30.4444 8.16852 30.4444 15.7778Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link className="icon" to="/">
            <svg className="iconShop" width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2H8L12.02 21.7662C12.1572 22.4458 12.5329 23.0563 13.0813 23.4908C13.6298 23.9253 14.316 24.1561 15.02 24.1429H29.6C30.304 24.1561 30.9902 23.9253 31.5387 23.4908C32.0871 23.0563 32.4628 22.4458 32.6 21.7662L35 9.38095H9.5M15.5 31.5238C15.5 32.3391 14.8284 33 14 33C13.1716 33 12.5 32.3391 12.5 31.5238C12.5 30.7085 13.1716 30.0476 14 30.0476C14.8284 30.0476 15.5 30.7085 15.5 31.5238ZM32 31.5238C32 32.3391 31.3284 33 30.5 33C29.6716 33 29 32.3391 29 31.5238C29 30.7085 29.6716 30.0476 30.5 30.0476C31.3284 30.0476 32 30.7085 32 31.5238Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link className="icon" to="/">
            <svg className="iconProfile" width="33" height="36" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31 34V30.4444C31 28.5585 30.2362 26.7497 28.8765 25.4161C27.5169 24.0825 25.6728 23.3333 23.75 23.3333H9.25C7.32718 23.3333 5.48311 24.0825 4.12348 25.4161C2.76384 26.7497 2 28.5585 2 30.4444V34M23.75 9.11111C23.75 13.0385 20.5041 16.2222 16.5 16.2222C12.4959 16.2222 9.25 13.0385 9.25 9.11111C9.25 5.18375 12.4959 2 16.5 2C20.5041 2 23.75 5.18375 23.75 9.11111Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </header>
  );
}

export default Header;