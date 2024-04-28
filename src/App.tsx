import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home, NotFound } from './pages'
import { Layout } from '@/layout/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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
