import React from 'react'
import './style.scss'
import Button from '../../ui/button/button'

function Roasting() {
  return (
    <section className="roasting">
      <div className="roastingBackConteiner">
        <div className="roastingBack"></div>
      </div>
      <div className="container">
        <h3 className="roastingTitle">Как мы обжариваем наш кофе:</h3>
        <p className="roastingText">
          Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой
          склад и представительство в Москве. Завод работает на рынке
          свежеобжаренного кофе и растворимой продукции более 15 лет. Завод
          имеет немецкое оборудование марки Probat по обжарке кофе и итальянские
          агломераторы для производства растворимой продукции.
        </p>
        <p className="roastingText">
          Кофе поставляется в контейнерах напрямую с плантаций по всему миру.
          Компания имеет долгосрочные контракты по поставке продукции. Каждая
          партия проходит строгий контроль на заводе для проверки зерна. Зеленое
          зерно обжаривается, проходит процесс дегазации и тут же отправляется
          клиентам. Наши обжарщики прошли обучение в России и за рубежом. У нас
          свой подход к каждой партии зерна.
        </p>
        <p className="roastingText">Мы раскрываем вкус каждого сорта кофе.</p>
        <Button>Перейти в каталог</Button>
      </div>
    </section>
  )
}

export default Roasting
