import React from 'react';
import EmptyCart from './Empty'
import { NavLink } from 'react-router-dom'

class Total extends React.Component {

 
  render () {
    let total = 0;
    return (
      <div> {this.props.items.map ((item, i) => {
        let quantity = this.props.quantity[i]
        if (quantity === undefined){
          quantity = 1;
        } else {       
        quantity = quantity.quantity
        }    
        total += this.props.items[i].price * quantity
        localStorage.setItem('amount', total);
        return null;
      })
      }
          {
          total === 0 ?
           <EmptyCart /> :
          <div> 
              <h2 className='clear'>Cart Total: {total.toFixed(2)}€ </h2>
              <NavLink  to = {'/payment'}><button className='payUs bigger'>Proceed to checkout</button></NavLink>  

              
          </div>
          }
      </div>
    )
  }
}


export default Total;