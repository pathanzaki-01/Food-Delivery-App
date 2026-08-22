import axios from "axios";

const BASE_URL = 'https://dummyjson.com';



export const loginUser = async (credentials)=>{
   const respones =  await axios.post(`${BASE_URL}/auth/login`,credentials)
   return respones.data;
};