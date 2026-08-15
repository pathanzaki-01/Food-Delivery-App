import React from 'react'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import RestaurantsPage from './pages/RestaurantsPage'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/restaurants' element={<RestaurantsPage/>}/>
        </Routes>

      <ToastContainer position='bottom-right' autoClose={2000} />
     
    </div>
  )
}

export default App
