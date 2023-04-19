import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { router } from '../../utils/constants'

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink
        className={({ isActive }) => (isActive ? 'itemNav active' : 'itemNav')}
        to={router.catalogs.path}
      >
        Каталог товаров
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'itemNav active' : 'itemNav')}
        to={router.noPage.path}
      >
        Блок
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'itemNav active' : 'itemNav')}
        to={router.noPage.path}
      >
        Контакты
      </NavLink>
    </nav>
  )
}

export default Navigation