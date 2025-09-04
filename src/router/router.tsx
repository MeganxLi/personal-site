import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import { PUBLIC_URL } from '../constants/EnumType'
import PortfolioAll from '../page/PortfolioAll'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/portfolio',
    element: <PortfolioAll />,
  },
], {
  basename: `/${PUBLIC_URL}`,
})

export default router
