import React from 'react'

import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Actions/reducer";
import {Link, useHistory} from 'react-router-dom'
import { useStateValue } from "../Actions/Provider";
import './Subtotal.css'

// import { useHistory } from "react-router-dom";

function Subtotal() {


    const [{ basket}, dispatch] = useStateValue();
    console.log(basket, 'basket sub')

    const clearCart = () =>{
      console.log('remove item:')
      dispatch({
        type: "EMPTY_BASKET",
          basket
      });
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
        <button onClick={clearCart}>Delete All From Cart</button>

      </div>
    )

}

export default Subtotal;
