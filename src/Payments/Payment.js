import  React, {useState, useEffect} from 'react'
import './Payment.css'
import {useStateValue} from '../Actions/Provider'
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from '../Checkout/CartProducts.js'
import { getBasketTotal } from "../Actions/reducer.js";
import {CardElement,  useStripe, useElements, injectStripe} from "@stripe/react-stripe-js";
import {Link, useHistory} from 'react-router-dom'
import {setUser} from '../redux/reducerRedux.js'
import {useSelector, useDispatch} from 'react-redux'
import axios from './axios';
import {emptyBasket} from '../redux/reducerRedux.js'
import {db} from "./firebase.js";
import { Alert } from '@material-ui/lab';
// current_user ? `${userDetails?.adress}` : <input type='text' name='adress'/>


function Payment() {



  const {basket, user, userDetails } = useSelector((state) => state.basket)
  const history = useHistory()
  const dispatch = useDispatch()
  // const [{basket,userDetails}, dispatch] = useStateValue()
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceed] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const current_user = localStorage.user


     useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])


    console.log(clientSecret, 'secret')
   const handleSubmit = async (e) =>{
     e.preventDefault()
     setProcessing(true)

     const payload = await stripe.confirmCardPayment(clientSecret, {
       payment_method: {
         card: elements.getElement(CardElement)
       }
     })

     .then(({paymentIntent}) =>{
       // payment = paymentConfirmation
        setSucceed(true)
        setError(null)
        setProcessing(false)
        fetch('https://amzn-back-end.herokuapp.com/orders',{
          method: 'POST',
           credentials: "same-origin",
           headers: {
             'Content-Type': 'application/json',
             Accept: 'application/json',
           },
           body: JSON.stringify({
             order:{
              product_ids: productKeys,
              user_id: localStorage.user
              }
             })
        })

        dispatch(emptyBasket())
        history.replace(`/user/${localStorage.user}/orders`)
     })
   }


  const handleChange = (e) =>{
    console.log('change')
    setDisabled(e.empty)
    setError(e.error ? e.error.message : '')

  }

  const productKeys = basket.map(p => p.id)

    return(
      <div className='payment'>
        <div className='paymentCont'>
          <h1>Checkout(<Link className='checkoutLink' to='/checkout'>{basket.length} Items</Link>)</h1>
        <div className="paymentSec">
          <div className="PaymentTitle">
            <h3>Delivery Adress</h3>
          </div>
          <div className='paymentAdress'>
            <p>Email:{current_user ? `${userDetails?.email}` : <input type='text' name='email'/>}</p><br/>

          <div >{userDetails?.adress === null ? <p class="alrt-flash">please head to prime to fill adress out.</p> : ''}</div><br></br>

          <p>Adress:{current_user ? `${userDetails?.adress}` : <input type='text' name='email'/>}</p>

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
        <div className="warningPayment">
        <h1>WARNING!</h1>
        <p>Any payment done with an actual credit/debit card will be considered a donation.</p>
        <p>Please Use 4242 4242 4242 4242 date: 04/24, CVC:242, ZIP: Your designated zip code such as: 91764</p>
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
