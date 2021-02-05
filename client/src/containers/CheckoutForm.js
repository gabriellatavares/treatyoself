import React, { useState } from 'react'
import Axios from 'axios';
import { URL } from '../config';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import image from '../images/Payment.png'

 const CheckoutForm = (props) => {

  let orderProps = props
  let powerProps = Object.entries(orderProps)
  let futureLoop = ''
  let paymentOk = false
  


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  let handleName = (e) => { setName({ name: e.target.value })}
  let handleEmail = (e) => { setEmail( {email: e.target.value})}



  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post(`${URL}/emails/send_email`, {
        name: name.name,
        email: email.email,
      })
      setEmail({
        email: '',
      })
      setName({
        name: '',
      })
      console.log(response)
    } 
    catch(error){
    } 
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
        paymentOk = true 
        console.log(paymentOk) 
        window.location = '/payment/success' 
        updateStock()
        

      }
      } catch (error){
        console.log('CheckoutForm.js 28 |', error)
      }
    } else {
      console.log(error.message)
      window.location = '/payment/error' 

    }
  }

  const updateStock = () => {
    if (paymentOk === true){
      let sameId = ''
      let name = ''
      let image = ''
      let description = ''
      let price = ''
      let stock = ''
      powerProps.forEach(([key, value]) => {
        futureLoop = value.stockUpdate
        futureLoop.forEach(([key1, value1]) =>{
        ///key1 é o objeto e a value1 é a quantidade
        sameId = key1.id
        name = key1.name
        image = key1.image
        description = key1.description
        price = key1.price
        stock = key1.stock - value1
        console.log(stock)

        const stocking  = async () => {
        try {
          await Axios.post(`${URL}/products/update`, {
            _id: sameId,
            nameUp: name,
            imageUp: image,
            descUp: description,
            priceUp: price,
            stockUp: stock,
            })
            console.log('its working!!!! stock updated')
            }
            catch(error){
            console.log(error)
            }
          }
          stocking();
          })
          
          
      })
    }
    
  }
  
  return (
    <>
    <h1>Complete your payment here</h1>
    <div>     
          <div>
              <img className='payImg' src={image} alt="online-payment"/>
          </div> 
    <form className="checkout_container" onSubmit={handleSubmit} >
    <div style={styles.form}> 
  <input style={styles.input} placeholder='Please enter your name' type="text" size="30" required onChange = {handleName}></input>
  <input style={styles.input} placeholder='Please enter your e-mail here to complete the order' type="email" id="email" size="30" required onChange = {handleEmail}></input>
     </div>
   <CardElement />          
      <button className='payUs bigger'>Pay {localStorage.getItem('amount')}€</button>
      </form>
  
    </div>
    </>
  )
}
export default CheckoutForm;


const styles = {
  input: {
    display: 'flex',
    alignItems: 'left',
    width: '100%',
    background: 'transparent',
    border: 'none',
    fontSize: '90%',
    alignText: 'center'
  },
  form: {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-evenly'
  }
}