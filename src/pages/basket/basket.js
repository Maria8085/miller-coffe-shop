import React from 'react'
import './style.scss'

function Basket() {
  return (
    <main className="basket">
      <div className="container">
        <div className="buyList">
          <h3>В корзине нет товаров</h3>
        </div>
        <div className="delivery">
          <h3>Доставка</h3>
        </div>
      </div>
    </main>
  )
}

export default Basket
