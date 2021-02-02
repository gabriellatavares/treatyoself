import React from 'react'
import Axios from 'axios';
import { URL } from '../config';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

 const CheckoutForm = () => {

  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })
    if(!error){
      console.log('Stripe 23 | token generated!', paymentMethod)
      try {
        const { id } = paymentMethod;
        const response = await Axios.post(`${URL}/payment/charge`, 
        {
          id: id,
          amount: localStorage.getItem('amount'),

      }
      );
      console.log('Stripe 35 | data', response.data.success)
      if (response.data.success){
        console.log('CheckoutForm.js 25 | payment succesful!')
        localStorage.setItem('amount', JSON.stringify(0));
        localStorage.setItem('count', JSON.stringify(0));
        localStorage.setItem('shopping-cart', JSON.stringify([]))
        window.location = '/payment/success' 
      }
      } catch (error){
        console.log('CheckoutForm.js 28 |', error)
      }
    } else {
      console.log(error.message)
      window.location = '/payment/error' 

    }
  }
  return (
    <div>
    <form className="checkout_container" onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <h1>Complete your order!</h1>
      <CardElement />
      <button>Pay {localStorage.getItem('amount')}€</button>
    </form>
    </div>
  )
}
export default CheckoutForm;