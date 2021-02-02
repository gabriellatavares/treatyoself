import React from "react";

const PaymentSuccess = props => {
  return (
      <div className='paymentSuccess'>
        <h1>Your payment has been succesfully made!<span role='img'>🥳</span></h1>
        <p>Your order will be sent to you in a few working days!</p>
      </div>
  );
};

export default PaymentSuccess;