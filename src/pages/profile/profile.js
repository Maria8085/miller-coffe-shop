import React from 'react'
import './style.scss'

function Profile() {
  return (
    <main className="profile">
      <div className="container">
        <div className="profileCard">
          <div className="personalInfo">
            <div className="imageProfile">
              <img src="./image/Profile.svg" alt="" />
            </div>
            <div className="userInfo">
              <span className="userName">
                Здравствуйте, Мария Александровна!
              </span>
              <span className="optionalInfo email">tma8085@mail.ru</span>
              <span className="optionalInfo phone">+7 (927) 836 83 77</span>
              <span className="optionalInfo pasword">Пароль: ***********</span>
            </div>
          </div>
          <div className="personalDiscount">
            <h3>Ваша скидка: 10%</h3>
            <span>Сумма заказов: 5675 ₽*</span>
            <span>*До скидки 15% не хватает покупок на сумму: 1255 ₽</span>
          </div>
        </div>
        <div className="buyStory">
          <h3>Мои заказы</h3>
          <span>У вас нет заказов</span>
        </div>
      </div>
    </main>
  )
}

export default Profile
