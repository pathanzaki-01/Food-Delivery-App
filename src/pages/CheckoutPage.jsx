import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';

const CheckoutPage = () => {
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const {items ,restaurantName} = useSelector((state)=>state.cart)
        const [formData , setFormData] =useState({
             fullName: '',
             address: '',
             city: '',
             phone: '',

        });
        

        const totalPrice = items.reduce(
            (sum ,item) => sum + (item.price || 5 ) *item.quantity,0
        );

        const  handlechange = (e)=>{
            const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
    const handlePlaceOrder = (e)=>{
        e.preventDefault();
        dispatch(clearCart());
        toast.success('Order placed! Your food is on the way 🍽️')
        navigate('/')
    };

    if(items.length==0){
        return(
            <p className='font-semibold text-orange-400 p-6'>
                Your cart is empty. Add items before checking out.
            </p>
        )
    }

  return (
    <div className='p-6 max-w-3xl mx-auto'>
        <h1 className='font-bold text-orange-400 text-3xl mb-6'>Check out page</h1>
        <div className='grid md:grid-cols-2 gap-8'>
        <div>
            <h2 className='font-bold text-orange-400 text-lg mb-6 mt-6'>Order from {restaurantName}</h2>
            <div className='flex flex-col gap-4'>
                {items.map((item)=>(
                    <div key={item.id} className='text-gray-800 font-semibold flex justify-between'>
                          <span>{item.name} × {item.quantity}</span>
                          <span>${((item.price || 5) * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
                
            </div>
            <div className="mt-4 pt-4 border-t text-black">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
        <div>
            <h2 className='font-bold text-lg text-orange-400'>Delivery details</h2>
            <form onSubmit={handlePlaceOrder} className="flex flex-col gap-2">

  <input
    type="text"
    name="fullName"
    value={formData.fullName}
    onChange={handlechange}
    placeholder="Full name"
    className="border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
    required
  />

  <input
    type="text"
    name="address"
    value={formData.address}
    onChange={handlechange}
    placeholder="Delivery Address"
    className="border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
    required
  />

  <input
    type="text"
    name="city"
    value={formData.city}
    onChange={handlechange}
    placeholder="City"
    className="border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
    required
  />

  <input
    type="text"
    name="phone"
    value={formData.phone}
    onChange={handlechange}
    placeholder="Phone"
    className="border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
    required
  />

  <button
    type="submit"
    className="mt-4 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700"
  >
    Place Order
  </button>

</form>
        </div>
        </div>
      
    </div>
  )
}

export default CheckoutPage
