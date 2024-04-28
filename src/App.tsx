import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home, NotFound, Search } from './pages'
import { Layout } from '@/layout/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/search/:query',
    element: <Search />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

function App() {
  return (
    <>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  )
}

export default App
