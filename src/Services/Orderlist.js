import React from 'react'
import PropTypes from 'prop-types'
import './Orderlist.css'
import moment from "moment";
import CheckoutProduct from "../Checkout/CartProducts.js";
import CurrencyFormat from "react-currency-format";

function OrderList({order}){


console.log(order, "llll")
const listingsOrder = order.products.map(p => <CheckoutProduct {...p} image={p.product_image} hideButton/>)
const totalAmpount = order.products.reduce((amount, item) => item.price + amount, 0);
console.log(listingsOrder, "2222")

  return(
    <div className='order'>
            <h2>Order</h2>

            <p className="order__id">
                <small>{order.id}</small>
            </p>
                {listingsOrder}

            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={totalAmpount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
  )

}

export default OrderList;
