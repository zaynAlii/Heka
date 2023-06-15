import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  items:Array<any>
  TotalAmount:number
  TotalQuantity:number
  
}

const initialState: CounterState = {
  items:[],
  TotalAmount:0
  ,
  TotalQuantity:0

}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddtoCart: (state,action:PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
       state.TotalQuantity+=action.payload.quantity;
    },
    removeFromcart: (state,action:PayloadAction<any>) => {
        console.log(action);
    },
    clear: (state) => {
      state =initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = counterSlice.actions

export default counterSlice.reducer