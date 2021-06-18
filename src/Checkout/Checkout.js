import React from 'react'
import Subtotal from '../Components/Subtotal.js'
import {useStateValue} from '../Actions/Provider.js'
import CheckoutProduct from './CartProducts.js'
import './Checkout.css'

function Checkout(){

    const [{ basket, user,userDetails}] = useStateValue();
    console.log(userDetails,'[user]')
    return(
      <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {userDetails.name}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              key={item.id}
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
