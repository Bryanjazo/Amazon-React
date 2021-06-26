import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const setUserStatus = createAsyncThunk(
  'basket/setUserStatus',
  async(id) => {
      const response = await fetch(`http://localhost:3001/users/${id}`)
        const data = await response.json()
        return data
  }
)


const basketStore = createSlice({
  name: "basket",
  initialState:{
    basket: [],
    user: localStorage.user,
    userDetails: {}
  },
  reducers:{
    addToBasket: (state, action) => {
      state.basket.push(action.payload)
    },
    removeFromCart: (state, action) => {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload)
      if (index >= 0){
        state.basket.splice(index,1);
          }else{
       console.warn("No Items Found with the Id of:", action.payload)
      }
    },
    emptyBasket: (state, action) => {
      state.basket = []
    },
    setUser: (state, action) => {
      console.log(state,action, "kkk")
      state.user = action.payload
    },
    setUserDetails: (state, action) =>{
      state.userDetails = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(setUserStatus.fulfilled, (state, action) =>{
      state.userDetails = action.payload
    })
  }
})

export const {addToBasket, removeFromCart, setUserDetails, setUser, emptyBasket} = basketStore.actions

export default basketStore.reducer
