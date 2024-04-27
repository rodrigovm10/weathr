import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, NotFound } from './pages'

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
  return <RouterProvider router={router} />
}

export default App
