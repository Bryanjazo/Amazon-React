import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import {useSelector, useDispatch} from 'react-redux'
import {removeFromCart, emptyBasket} from '../redux/reducerRedux.js'
import { useStateValue } from "../Actions/Provider";
import './CartProducts.css'

  function CartProducts({id, title, image, price, rating, hideButton}){

// const [{ basket }, dispatch] = useStateValue();

const dispatch = useDispatch()

  const handleItems = () =>{
    console.log(id, 'remove item:')
    dispatch(removeFromCart(id));
  }

  const handleCart = () =>{
    console.log('remove item:')
    dispatch(emptyBasket());
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
               {!hideButton && (
                    <button onClick={handleItems}>Remove Item Cart</button>
                )}
           </div>

       </div>

    )

}

export default CartProducts;
