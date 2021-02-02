import React from 'react';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import CheckoutForm  from "./CheckoutForm";

const PUBLICK_KEY = 'pk_test_51IG1VOEezwxOFQkNsF7mQG99GvZ7NzWxzVprkT35YvKrMAg1wKrTYSBNM5nmgaXCf1D4HxkLsinewnu2nlKXAbdX00UbaGajE5';

const stripeTestPromise = loadStripe(PUBLICK_KEY)

const Checkout = () => {
  return (
    <div>


    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
    </div>
  )
}

export default Checkout;
