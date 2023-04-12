import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navigation">
          <NavLink className={({ isActive }) =>isActive ? "itemNav active" : "itemNav"} to="/catalogs">Каталог товаров</NavLink>
          <NavLink className={({ isActive }) =>isActive ? "itemNav active" : "itemNav"} to="/">Блок</NavLink>
          <NavLink className={({ isActive }) =>isActive ? "itemNav active" : "itemNav"} to="/">Контакты</NavLink>
        </nav>
);}

export default Navigation