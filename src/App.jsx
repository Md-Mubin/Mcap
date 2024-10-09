import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout1 from './Layouts/Layout1'
import Home from './Pages/Home'

function App() {

  const Mcap = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Layout1 />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={Mcap}/>
    </>
  )
}

export default App
