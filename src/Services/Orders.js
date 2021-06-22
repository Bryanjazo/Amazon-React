import React, {useState, useEffect} from 'react'
import './Orders.css'
import { useStateValue } from "../Actions/Provider";


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
      .then(function(obj){
        console.log(obj)
        // window.location.reload()
        setOrders({order: obj})
        console.log(order, "orders")
      })
    }
  },[user])


    return(
      <div className="orders">
        <h1>Your Orders,</h1>
      </div>
    )

}

export default Orders;
