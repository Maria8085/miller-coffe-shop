import React from "react";
import "./style.scss";
import { router } from '../../utils/constants'
import { Link } from 'react-router-dom'

function Catalog() {
  return (
    <section className="catalog">
      <h3 className="catalogTitle">Каталоги нашей продукции</h3>
      <div className="catalogItems">
        <Link className="catalogItem" to={router.coffee.path}>
          <div className="itemImage">
            <img src="./image/Coffe_and_plate.png" alt="" />
          </div>
          <span className="itemText">Свежеобжаренный кофе</span>
          <div className="itemButton">Купить</div>
        </Link>
        <Link className="catalogItem" to={router.tea.path}>
          <div className="itemImage">
            <img src="./image/Teapot.png" alt="" />
          </div>
          <span className="itemText">Чай и кофейные напитки</span>
          <div className="itemButton">Купить</div>
        </Link>
        <Link className="catalogItem" to={router.vending.path}>
          <div className="itemImage">
            <img src="./image/Coffe_machine.png" alt="" />
          </div>
          <span className="itemText">Продукция для вендинга</span>
          <div className="itemButton">Купить</div>
        </Link>
        <Link className="catalogItem" to={router.healthyEating.path}>
          <div className="itemImage">
            <img src="./image/Porridge.png" alt="" />
          </div>
          <span className="itemText">Здоровое питание</span>
          <div className="itemButton">Купить</div>
        </Link>
      </div>
      <div className="background backgroundCatalog"></div>
    </section>
  )
}

export default Catalog;