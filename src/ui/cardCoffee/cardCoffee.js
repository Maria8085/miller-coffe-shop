import React from "react";
import "./style.scss";
import { cn } from "../../utils/cn";
import Button from "../../ui/button/button";
import { Link } from 'react-router-dom'
import { router } from '../../utils/constants'

function CardCoffee({ isResale }) {
  return (
    <Link
      className={cn('cardCoffee', isResale && 'resale')}
      to={router.product.path}
    >
      <div className="note">
        <div className="noteText">
          {isResale ? (
            'Скидка'
          ) : (
            <>
              Популярное
              <br />
              Новый урожай
            </>
          )}
        </div>
        <div className="volume">
          <select className="cooseVolume">
            <option value="" selected>
              250г.
            </option>
            <option value="">500г.</option>
            <option value="">1000г.</option>
          </select>
        </div>
      </div>
      <div className="info">
        <div className="infoImage">
          <img src="./image/Packet_coffee.png" alt="" />
        </div>
        <div className="characteristic">
          <div>Рейтинг</div>
          <div>Кофейность</div>
          <div>Кислинка</div>
          <div>Горчинка</div>
          <div>Насыщенность</div>
        </div>
      </div>
      <h4 className="coffeeTitle">Colombia Supremo</h4>
      <p className="coffeeText">
        Свежеобжаренный кофе - описание товара, вкус, аромат
      </p>
      <div className="conclusion">
        <div className="price">
          {isResale ? <span className="oldPrice">350p</span> : <></>}
          <span className="endPrice">250p</span>
        </div>
        <Button size="small">В корзину</Button>
      </div>
    </Link>
  )
}

export default CardCoffee