import React, {useState, useEffect} from 'react'
import './Orders.css'
import { useStateValue } from "../Actions/Provider";
import OrderList from './Orderlist.js'
import CheckoutProduct from "../Checkout/CartProducts.js";


function Orders() {

  const [{user, userDetails}] = useStateValue()
  const [order, setOrders] = useState([])


  useEffect(() => {
    if(user){
      fetch(`http://localhost:3001/users/${localStorage.user}/orders`,{
         credentials: "same-origin",
         headers: {
           'Content-Type': 'application/json',
           Accept: 'application/json',
         },
      })
      .then(res => res.json())
      .then((obj) => {
        console.log(obj)
        setOrders(obj)
        console.log(order, "orders")
      })

    }
  },[user])

const listings = order.map(o => <OrderList {...o}/>)

    return(
      <div className="orders">
        <h1>Your Orders,</h1>

        {order.map(o => {o.map(o.products.map(p => (
            <CheckoutProduct {...p}/>
        )))})}
      </div>
    )

}

export default Orders;
