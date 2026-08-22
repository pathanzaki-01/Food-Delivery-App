import React from 'react'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import RestaurantsPage from './pages/RestaurantsPage'
import RestaurantDetailsPage from './pages/RestaurantDetailsPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './routes/ProtectedRoute'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/restaurants' element={<RestaurantsPage/>}/>
        <Route path="/restaurants/:cuisine" element={<RestaurantDetailsPage />} />
        <Route path='/cartpage'element={<CartPage/>} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/checkout' element={
          <ProtectedRoute>
            <div className="p-6">Checkout page coming Day 7</div>
            </ProtectedRoute>
            } />
        
        </Routes>

      <ToastContainer position='bottom-right' autoClose={2000} />
     
    </div>
  )
}

export default App
