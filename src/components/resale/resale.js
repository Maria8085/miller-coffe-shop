import React from "react";
import "./style.scss";

function Resale() {
    return (
        <section className="resale">
            <h3 className="resaleTitle">Товары со скидкой</h3>
            <p className="resaleText">Наша компания предлагает покупать товар со скидкой не только в дни распродаж 
или в течение действия ограниченных предложений, но и пользоваться скидками постоянно!</p>
            <div className="resaleItems">
            </div>
        </section>
  );
}

export default Resale;