import React from 'react'
import PropTypes from 'prop-types'
import List from './List.js'
import moment from "moment";

function OrderList({products, created_at}){


console.log(products, "llll")
 const productListing = products.map(p => <List {...p}/>)
  return(
    <div>
    {productListing}
    </div>
  )

}

export default OrderList;
