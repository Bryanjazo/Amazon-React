import React, {useState, useEffect} from 'react'
import './Orders.css'
import { useStateValue } from "../Actions/Provider";
import OrderList from './Orderlist.js'
import {useSelector, useDispatch} from 'react-redux'


function Orders() {

  const {basket, user, userDetails } = useSelector((state) => state.basket)
  // const [{user, userDetails}] = useStateValue()
  const [order, setOrders] = useState([])


  useEffect(() => {
    if(user){
      fetch(`https://amzn-back-end.herokuapp.com/users/${localStorage.user}/orders`,{
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

  // const orderIt = order.map(p => p.products <ordelist {...p}/>)


  // console.log(orderIt)
  // filter




    return(
      <div className="orders">
        <h1>Your Orders:</h1>
          <div className='orders__order'>
            {order?.map(o => <OrderList order={o}/>)}
            </div>
      </div>
    )

}

export default Orders;
