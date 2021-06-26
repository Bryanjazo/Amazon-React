import React from 'react'

import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Actions/reducer";
import {Link, useHistory} from 'react-router-dom'
import { useStateValue } from "../Actions/Provider";
import {useSelector, useDispatch} from 'react-redux'
import {emptyBasket} from '../redux/reducerRedux.js'
import './Subtotal.css'

// import { useHistory } from "react-router-dom";

function Subtotal() {


    const {basket, user, userDetails } = useSelector((state) => state.basket)
    const dispatch = useDispatch()
    // const [{ basket}, dispatch] = useStateValue();
    console.log(basket, 'basket sub')

    const clearCart = () =>{
      console.log('remove item:')
      dispatch(emptyBasket());
    }
    return(
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>

                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      <Link to='/Payment'>
        <button className='Checkout'>Proceed to Checkout</button>
        </Link>
        <button className='Checkout' onClick={clearCart}>Delete All From Cart</button>

      </div>
    )

}

export default Subtotal;
