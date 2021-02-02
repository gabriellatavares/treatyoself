import React from 'react';
import EmptyCart from './Empty'
import { NavLink } from 'react-router-dom'

class Total extends React.Component {

  clearCart = () => {
    localStorage.setItem('shopping-cart', JSON.stringify([]))
    window.location = '/cart'
    localStorage.setItem('amount', JSON.stringify(0));
    localStorage.setItem('count', JSON.stringify(0));
  }

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
              <h2>Cart Total: {total.toFixed(2)}€
              <NavLink  to = {'/payment/'}><button>Proceed to checkout</button></NavLink>
</h2>              
              <div><button onClick={this.clearCart}>Clear cart!</button></div>

          </div>
          }
      </div>
    )
  }
}


export default Total;