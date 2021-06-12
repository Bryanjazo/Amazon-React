import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from "./Provider";
import './CartProducts.css'

  function CartProducts({id, title, image, price, rating, hideButton}){

const [{ basket }, dispatch] = useStateValue();


  const handleCart = () =>{
    console.log('remove item:')
    dispatch({
      type: "REMOVE_FROM_CART",
        id: id,

    });
  }

    return(
      <div className='checkoutProduct'>
           <img className='checkoutProduct__image' src={image} />

           <div className='checkoutProduct__info'>
               <p className='checkoutProduct__title'>{title}</p>
               <p className="checkoutProduct__price">
                   <small>$</small>
                   <strong>{price}</strong>
               </p>
               <div className="checkoutProduct__rating">
                   {Array(rating)
                   .fill()
                   .map((_, i) => (
                       <StarRateIcon />
                   ))}
               </div>
               {!hideButton && (
                   <button onClick={handleCart}>Remove from Basket</button>
               )}
           </div>
       </div>
    )

}

export default CartProducts;
