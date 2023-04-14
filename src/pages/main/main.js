import React from "react";
import "./style.scss";
import CupCoffe from "../../ui/cupcoffe/cupcoffe";
import Catalog from "../../components/catalog/catalog";
import Resale from "../../components/resale/resale";

function Main() { 
    return (
      <main className="main">
      <div className="background"></div>
      <section className="sectionSlider">
        <h2>Свежеобжаренный кофе</h2>
        <p>
            Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.
        </p>
        <p>
            Мы обжариваем кофе <strong>каждые выходные</strong>.
        </p>
        <button className="button">Посмотреть каталог</button>
        <div className="imageCup">
          <CupCoffe/>
        </div>
        </section>
        <Catalog />
        <Resale />
    </main>
);}

export default Main;