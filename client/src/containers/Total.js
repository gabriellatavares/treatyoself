import React from 'react';
import EmptyCart from './Empty'

class Total extends React.Component {

  clearCart = () => {
    localStorage.clear()
    window.location = '/cart'
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
        return null;
      })
      }
          {
          total === 0 ?
           <EmptyCart /> :
          <div> 
              <h2>Cart Total: {total.toFixed(2)}€
              <div><button onClick={this.clearCart}>Clear cart!</button></div>             
              </h2>
          </div>
          }
       
      </div>
    )
  }
}


export default Total;