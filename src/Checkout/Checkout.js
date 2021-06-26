import React from 'react'
import Subtotal from '../Components/Subtotal.js'
import {useStateValue} from '../Actions/Provider.js'
import CheckoutProduct from './CartProducts.js'
import {removeFromCart, emptyBasket} from '../redux/reducerRedux.js'
import {useSelector, useDispatch} from 'react-redux'
import './Checkout.css'

function Checkout(){

    const {basket, user, userDetails } = useSelector((state) => state.basket)
    const dispatch = useDispatch()
    console.log(basket, '=======basket laura=======')

    // const handleItems = (id) =>{
    //   console.log(id, 'remove item:')
    //   dispatch(removeFromCart(id));
    // }

    console.log(userDetails,'[user]')
    return(
      <div className="checkout">
      <div className="checkout__left">
        <a href="https://www.linkedin.com/in/bryan-jazo-5a834a205/">
        <img
          className="checkout__ad"
          src="./BryanJazo.png"
          alt=""
        />
      </a>

        <div>
          <h3>Hello, {userDetails.name}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item, index) => (
            <CheckoutProduct

              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
          ))}
        </div>

      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>

    )

}

export default Checkout;
