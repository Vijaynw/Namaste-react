import { createSlice,current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: { 
    addIteam: (state, action) => {
      // state.map((res)=>{
      //   if(res==action.payload)
      // })
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      // console.log(object)
      // console.log(current(state.items[1].card.info));
      // state.items.splice(id, 1);
      state.items.pop()
    },
    ClearAll: (state) => {
      state.items=[];
    },
    // clear all
  },
});
export const { addIteam, removeItem,ClearAll } = cartSlice.actions;

export default cartSlice.reducer;
