import React from "react";
import "./style.scss";
import Navigation from "../../ui/navigation/navigation";
import CupCoffe from "../../ui/cupcoffe/cupcoffe";
import { Link } from "react-router-dom";
import { router } from '../../utils/constants'

function Footer() {
  return (
    <footer className="footer">
      <div className="footerImage">
        <CupCoffe />
      </div>
      <div className="container">
        <h3 className="footerTitle">Подписка на новости и рассылку</h3>
        <p className="footerText">
          Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе новых
          поставок, скидок и эксклюзивных предложений.
        </p>
        <label className="footerInput">
          <input
            className=""
            type="email"
            aria-label=""
            placeholder="Ваш email"
          />
          <button className="inputButton">
            <span className="buttonText">Подписаться</span>
          </button>
        </label>
        <p className="agreement">
          Нажимая на кнопку “Подписаться”, вы принимаете правила{' '}
          <span className="agree">пользовательского соглашения</span>
        </p>
        <div className="footenMenu">
          <Link className="logo" to={router.main.path}>
            <img className="logoimg" src="./image/Logo.jpg" alt="" />
          </Link>
          <Navigation />
        </div>
      </div>
    </footer>
  )
}

export default Footer;