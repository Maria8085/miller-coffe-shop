import Catalogs from "../pages/catalogs/catalogs";
import Coffee from '../pages/coffee/coffee'
import HealthyEating from '../pages/healthyEating/healthyEating'
import Main from '../pages/main/main'
import NoPage from '../pages/nopage/nopage'
import Product from '../pages/product/product'
import Tea from '../pages/tea/tea'
import Vending from '../pages/vending/vending'
import Basket from '../pages/basket/basket'
import Contacts from '../pages/contacts/contacts'
import Blog from '../pages/blog/blog'
import Profile from '../pages/profile/profile'

export const router = {
  noPage: {
    path: '/error',
    element: <NoPage />,
  },
  main: {
    path: '/',
    element: <Main />,
  },
  catalogs: {
    path: '/catalogs',
    element: <Catalogs />,
  },
  coffee: {
    path: '/coffee',
    element: <Coffee />,
  },
  tea: {
    path: '/tea',
    element: <Tea />,
  },
  vending: {
    path: '/vending',
    element: <Vending />,
  },
  healthyEating: {
    path: '/healthyEating',
    element: <HealthyEating />,
  },
  product: {
    path: '/product',
    element: <Product />,
  },
  basket: {
    path: '/basket',
    element: <Basket />,
  },
  blog: {
    path: '/blog',
    element: <Blog />,
  },
  contacts: {
    path: '/contacts',
    element: <Contacts />,
  },
  profile: {
    path: '/profile',
    element: <Profile />,
  },
}
