export const initialState = {
  basket: [],
  user: null
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }

    case "REMOVE_FROM_CART":

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      console.log(action.id, 'id')
      let newBasket = [...state.basket]
      if (index >= 0){
        console.log(newBasket.splice(index,1))
        newBasket.splice(index,1);



      }else{
        console.warn("No Items Found with the Id of:", action.id)
      }
      return{
        ...state,
        basket: newBasket
      }

    default:
      return state;
  }
};

export default reducer;
