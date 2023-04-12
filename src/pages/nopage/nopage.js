import React from "react";
import "./style.scss";

function NoPage() { 
    return (
      <main className="main">
      <div className="background"></div>
      <section className="nopage">
        <h2>Что-то пошло не так...</h2>
        <p>
            Страницы не существует или она находится в разработке
        </p>
      </section>
    </main>
);}

export default NoPage;