import React from "react";
import '../index.css'

const PaymentError = props => {
  return (
      <div className='paymentFail'>
        <h1>Oops! Something went wrong with your payment. <span role='img' aria-label='scareeface'>😰</span></h1>
        <p>We regret to inform that your payment has been declined.</p>
      </div>
  );
};

export default PaymentError;
