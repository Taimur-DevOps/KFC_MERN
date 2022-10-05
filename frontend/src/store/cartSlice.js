import { createAsyncThunk } from "@reduxjs/toolkit";
import {PostOrders} from "./orderService";
const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  cartData: [],
};

export const postData = createAsyncThunk(
  '/postOrders',
  async (resData, _thunkAPI) => {
    console.log("ajsdhajksdhkja",resData)
    const response = await PostOrders(resData)
    return response.data
  }
)


const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    add(state, action) {
      // console.log(action.payload);
      state.cartData.push(action.payload);
    },

    increment: (state, action) => {
      const { id } = action.payload;
      const exist = state.cartData.find((data) => data.id === id);

      if (exist) {
        exist.quantity = exist.quantity + 1;
        exist.total = exist.total + exist.price;
      }
    },

    decrement: (state, action) => {
      // console.log(action.payload);
      const { id } = action.payload;
      const exist = state.cartData.find((data) => data.id === id);
      
      
      if (exist.quantity>1) {
        console.log(` the quntity is now ${exist.quantity}`);
        exist.quantity = exist.quantity - 1;
        exist.total = exist.total - exist.price;
      }
    },

    remove: (state, action) => {
      console.log(action.payload, " :id");
      // state.cartData = state.cartData.filter((item) => item.id !== action.payload);

      let index = state.cartData.map((item) => {
        return item.id;
      });

      state.cartData.splice(index, 1);
    },


    cartEmpty:(state)=>{
      state.cartData=[]
    }
  },
});

export const { add, remove, increment, decrement,cartEmpty } = cartSlice.actions;

export default cartSlice.reducer;
