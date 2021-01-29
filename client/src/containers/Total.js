import React from 'react';

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
        return null;
      })
      }
        <h2 className="total">Cart Total: {total.toFixed(2)}€</h2>
      </div>
    )
  }
}


export default Total;