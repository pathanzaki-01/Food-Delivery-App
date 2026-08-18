import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
    name:"cart",
    initialState:{
        restaurantName: null, // which cuisine/restaurant the current cart belongs to
    items: [],
    },

    reducers:{

        addToCart:(state,action)=>{
        const {item , restaurantName } = action.payload


         if(state.items.length===0){

            state.restaurantName  = restaurantName;
            
            const existingItem = state.items.find((i)=>i.id===item.id);

            if(existingItem){
                existingItem.quantity += 1;
            }else{
                state.items.push({...item ,quantity:1});
            }

         }
         
          removeFromCart:(state,action)=>{
                     state.items = state.items.filter((i) => i.id !== action.payload)

                     if(state.items.length==0){
                        state.restaurantName=null;
                     }

                     
          }   
          clearCart:(state)=>{
            state.items=[];
            state.restaurantName = null;
          }
 }
    

    }
})

export const {addToCart , removeFromCart , clearCart} = cartSlice.actions;
export default cartSlice.reducer;