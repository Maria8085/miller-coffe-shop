import React from 'react'
import './style.scss'

function WhyWe() {
  return (
    <section className="whyWe">
      <div className="whyWeImage">
        <img src="../image/Cup_and_seed_coffee.png" alt="" />
      </div>
      <div className="whyWeInfo">
        <h3 className="infoTitle">Почему стоит работать именно с нами?</h3>
        <ul>
          <li className="infoItem">
            <div className="itemImage">
              <img src="../image/icon_Cup.svg" alt="" />
            </div>
            <div className="itemDerection">
              <span className="itemTitle">Всегда свежая обжарка</span>
              <span className="itemText">
                Подбор степени обжарки под каждый сорт кофе. Всегда свежая
                обжарка
              </span>
            </div>
          </li>
          <li className="infoItem">
            <div className="itemImage">
              <img src="../image/Tag.svg" alt="" />
            </div>
            <div className="itemDerection">
              <span className="itemTitle">Лучшие цены на продукцию</span>
              <span className="itemText">
                Благодаря крупным объемам производства мы даем лучшие цены на
                нашу продукцию
              </span>
            </div>
          </li>
          <li className="infoItem">
            <div className="itemImage">
              <img src="../image/Consultation.svg" alt="" />
            </div>
            <div className="itemDerection">
              <span className="itemTitle">Консультации 24/7</span>
              <span className="itemText">
                Наши специалисты готовы всегда помочь и подсказать вам с выбором
                кофе или другой продукции.
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default WhyWe
