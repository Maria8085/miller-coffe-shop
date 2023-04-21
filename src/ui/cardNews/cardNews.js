import React from 'react'
import './style.scss'
import { cn } from '../../utils/cn'
import { Link } from 'react-router-dom'
import { router } from '../../utils/constants'

function CardNews({ isResale }) {
  return (
    <Link
      className={cn('cardCoffee', isResale && 'resale')}
      to={router.product.path}
    >
      <img />
      <h3></h3>
      <p></p>
    </Link>
  )
}

export default CardNews
