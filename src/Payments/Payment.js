import  React, {useState, useEffect} from 'react'
import './Payment.css'
import {useStateValue} from '../Actions/Provider'
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from '../Checkout/CartProducts.js'
import { getBasketTotal } from "../Actions/reducer.js";
import {CardElement,  useStripe, useElements, injectStripe} from "@stripe/react-stripe-js";
import {Link, useHistory} from 'react-router-dom'
import axios from './axios';
import {db} from "./firebase.js";



function Payment() {

  const stripe = useStripe()


  const history = useHistory()
  const [{basket,userDetails}, dispatch] = useStateValue()
  const stripeUse = useStripe();
  const elements = useElements();
  const [succeeded, setSucceed] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {

    const getSecret = async () => {
      console.log('submit')
      const resp = await axios({
        method: 'post',
        //times by 100 cause stripe asks for cents
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      })
      setClientSecret(resp.data.clientSecret)
    }
    getSecret();
   }, [basket])

   console.log('secret:',clientSecret)

   const handleSubmit = async (e) =>{
     e.preventDefault()
     setProcessing(true)

     const payload = await stripe.confirmCardPayment(clientSecret, {
       payment_method: {
         card: elements.getElement(CardElement)
       }
     })
     .then(fetch())
     .then(({paymentIntent}) =>{
       // payment = paymentConfirmation
        setSucceed(true)
        setError(null)
        setProcessing(false)

        dispatch({
          type: "EMPTY_BASKET",

        })
        history.replace('/orders')
     })
   }


  const handleChange = (e) =>{
    console.log('change')
    setDisabled(e.empty)
    setError(e.error ? e.error.message : '')

  }

    return(
      <div className='payment'>
        <div className='paymentCont'>
          <h1>Checkout(<Link className='checkoutLink' to='/checkout'>{basket.length} Items</Link>)</h1>
        <div className="paymentSec">
          <div className="PaymentTitle">
            <h3>Delivery Adress</h3>
          </div>
          <div className='paymentAdress'>
            <p>Email: {userDetails?.email}</p><br/>
            <p>Adress: {userDetails?.adress}</p>
          </div>
        </div>

        <div className="paymentSec">
          <div className='paymentTitle'>
               <h3>Review items and delivery</h3>
          </div>
          <div className='paymentItems'>
          {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                  ))}
          </div>
        </div>

        <div className="paymentSec">
          <div className='PaymentTitle'>
          <h3>Payment Method</h3>
          </div>
          <div className='paymentDetails'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
               <div className='paymentPriceContainer'>
                 <CurrencyFormat
                renderText={(value) => (
                  <h3>Order Total: {value}</h3>
                                        )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
              displayType={"text"}
          thousandSeparator={true}
                    prefix={"$"}
                                    />

                <button className="" disabled={processing |disabled| succeeded} type="submit"> <span>{processing ? <p>Processing</p> : "Buy Now"}</span></button>
               </div>
               {error && <div>{error}</div>}
            </form>

          </div>
        </div>
        </div>
      </div>
    )

}

export default Payment;
