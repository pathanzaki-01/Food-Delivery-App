import React, { useEffect, useState } from 'react'
import { getAllRecipes } from '../services/recipeService';
import { Link } from 'react-router-dom';

const RestaurantsPage = () => {

    const [recipes,setRecipes] = useState([]);
    const [loding,setLoding]   = useState(true);

    useEffect(()=>{
        const fetchRecipes = async () =>{
            try{
                const data = await getAllRecipes();
                setRecipes(data)
            }
            catch(error){
                  console.log('Failed to fetch recipes:', error)
            }
            finally{
                setLoding(false)
            }
        }
        fetchRecipes();
    },[])

    const restaurants = recipes.reduce((acc,recipe)=>{
                    const cuisine = recipe.cuisine;

                    if(!acc[cuisine]){
                        acc[cuisine]=[];
                    }
                    acc[cuisine].push(recipe);
                    return acc;

    },{});

    if(loding){
        return <p className='p-6 text-gray-500 dark:text-gray-300'>Loading restaurants...</p>
    }

  return (
    <div className='p-6'>
          <h1 className='text-3xl text-orange-700  dark:text-orange-700 font-bold mb-6'>Restaurants</h1>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6' >

            {Object.keys(restaurants).map((cuisine)=>{
                          const firstItem = restaurants[cuisine][0];
                          return (
                           <Link
              to={`/restaurants/${cuisine}`}
              key={cuisine}
              className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition block bg-white dark:bg-gray-800"
            >
              <img src={firstItem.image} alt={cuisine} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">{cuisine} Cuisine</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {restaurants[cuisine].length} dishes available
                </p>
              </div>
            </Link>
                                
                          )
            })}
         </div>
    </div>
  )
}

export default RestaurantsPage
