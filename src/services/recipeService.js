import axios from "axios";


const BASE_URL = 'https://dummyjson.com';


export const getAllRecipes = async ()=>{
    const response = await axios.get(`${BASE_URL}/recipes?limit=100`);
    return response.data.recipes;
}


export const  getRecipeById = async (id)=>{
    const response = await axios.get(`${BASE_URL}/recipes/${id}`)
    return response.data.recipes;
}

