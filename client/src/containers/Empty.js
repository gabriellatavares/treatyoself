import React from 'react'
import { NavLink } from 'react-router-dom'

class EmptyCart extends React.Component {
  render () {
      return (
         <div className='EmptyCart'>
             <h2>Your cart is currently empty <span>🥺</span></h2>
             <h4>Check-out our products <NavLink to = {`/products/`}>here</NavLink></h4>
           </div> 
      )
  }
}

export default EmptyCart;
