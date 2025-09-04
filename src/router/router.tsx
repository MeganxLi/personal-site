import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import PortfolioAll from '../page/PortfolioAll'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/portfolio',
      element: <PortfolioAll />,
    },
  ],
)

export default router
