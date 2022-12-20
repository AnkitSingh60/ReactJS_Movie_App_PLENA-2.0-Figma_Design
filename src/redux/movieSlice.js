import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[]
}

export const movieSlice = createSlice({
  name: "movieApp",
  initialState: initialState,
  reducers:{
    addProducts: (state, action)=>{
        state.products.push(action.payload)
    }
  }
});

export const {addProducts}  = movieSlice.actions;
export default movieSlice.reducer;
