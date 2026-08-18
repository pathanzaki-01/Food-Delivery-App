import React, { useEffect, useState } from 'react'
import { getAllRecipes } from '../services/recipeService';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../features/cart/cartSlice';
import { toast } from 'react-toastify';

const RestaurantDetailsPage = () => {

    const { cuisine } = useParams();
    const [dishes, setDishes] = useState([]);
    const [loding , setLoding] = useState(true);

    const dispatch = useDispatch();
    const cartRestaurant = useSelector( (state)=> state.cart.restaurantName)

    useEffect(()=>{
        const fetchDishes = async() =>{
            try{
                const allRecipes = await getAllRecipes();
                const filtered = allRecipes.filter((r)=> r.cuisine === cuisine)
                setDishes(filtered)
            }catch(error){
                console.log("Failed to fetch dishes:",error)
            }finally{
                setLoding(false)
            }
        };
       fetchDishes();
    },[cuisine])


    const handleAddToCart = (dish) => {
            if( cartRestaurant && cartRestaurant !== cuisine){
                toast.error(`Your cart has items from ${cartRestaurant}. Clear cart to order from ${cuisine}
  `); 
      return ;
            }
            dispatch(addToCart({ item: dish , restaurantName:cuisine}));
            toast.success(`${dish.name} added to cart!`);
    }

    if(loding){
        return <p className='p-6 text-gray-500 dark:text-gray-400'>Loding menu...</p>
    }

  return (
    <div className='p-6'>
        <h1 className='text-3xl text-orange-700  dark:text-orange-700 font-bold mb-6'>{cuisine} Cuisine Menu</h1>
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' >
                
                {dishes.map((dish) => (
                    <div 
            key={dish.id}
            className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-800"
          > <img src={dish.image} alt={dish.name} className='w-full h-40 object-cover' />
          <div className='p-4'>
             <p className="text-gray-500 dark:text-gray-400 text-sm">
                {dish.caloriesPerServing} cal · ⭐ {dish.rating}
              </p>
                <button onClick={()=>{
                    handleAddToCart(dish)
                }}className='mt-3 w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700'>Add to cart</button>

                    </div>
                    </div>
                ))}
             </div>
    </div>
  )
}

export default RestaurantDetailsPage
