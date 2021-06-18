import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from "../Actions/Provider";
import './CartProducts.css'

  function CartProducts({id, title, image, price, rating, hideButton}){

const [{ basket }, dispatch] = useStateValue();



  const handleItems = () =>{
    console.log('remove item:')
    dispatch({
      type: "REMOVE_FROM_CART",
        id: id,

    });
  }

  const handleCart = () =>{
    console.log('remove item:')
    dispatch({
      type: "EMPTY_BASKET",
        id: id,

    });
  }
    return(
      <div className='checkoutProduct'>
           <img className='checkoutProduct__image' alt='' src={image} />

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
                   <button onClick={handleItems}>Remove Item Cart</button><br/>

           </div>

       </div>

    )

}

export default CartProducts;
