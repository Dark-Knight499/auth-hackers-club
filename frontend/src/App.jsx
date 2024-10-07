import { useState } from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout';
import ValidateGithubPage from './pages/ValidateGithubPage'


const Router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage/>}/>
    <Route path='/validate' element={<ValidateGithubPage/>}/>
  </Route>
)
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
