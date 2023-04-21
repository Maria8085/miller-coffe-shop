import React from 'react'
import './style.scss'

function News() {
  return (
    <section className="news">
      <div className="container">
        <div className="newsHeader">
          <h3>Новости компании</h3>
          <a className="newsMore">Читать все</a>
        </div>
        <div>Тут будут блоки с новостями</div>
      </div>
    </section>
  )
}

export default News
