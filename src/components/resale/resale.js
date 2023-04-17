import React from "react";
import "./style.scss";
import CardCoffee from "../../ui/cardCoffee/cardCoffee";
import { Link } from "react-router-dom";

function Resale() {
    return (
        <section className="resaleSection">
            <h3 className="resaleTitle">Товары со скидкой</h3>
            <p className="resaleText">Наша компания предлагает покупать товар со скидкой не только в дни распродаж 
или в течение действия ограниченных предложений, но и пользоваться скидками постоянно!</p>
            <div className="resaleItems">
                <CardCoffee isResale/>
                <CardCoffee isResale/>
                <CardCoffee/>
            </div>
            <Link className="more" to="/">Смотреть все</Link>
        </section>
  );
}

export default Resale;