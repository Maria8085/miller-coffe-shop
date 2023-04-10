import React from "react";
import "./style.scss";
import CupCoffe from "../../ui/cupcoffe/cupcoffe";

function Main() { 
    return (
        <main>
      <div class="background"></div>
      <section class="sectionSlider">
        <h2>Свежеобжаренный кофе</h2>
        <p>
            Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.
        </p>
        <p>
            Мы обжариваем кофе <strong>каждые выходные</strong>.
        </p>
        <button class="button">Посмотреть каталог</button>
        <div class="imageSlider">
          <CupCoffe/>
        </div>
        
      </section>
    </main>
);}

export default Main;