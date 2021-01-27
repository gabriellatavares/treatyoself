
const Cart = require('../models/cart.models')

class CartController {
  //find items in cart
  async find (req, res){
    let { userID } = req.params;
    try {
      const items = await Cart.findOne({ userID: userID })
      .populate('items.product')
      res.send(items)
    }
    catch (error){
      res.send({ error })
    }
  }

  //adding item to cart
  async add (req, res){
    let { userID, product_id, quantity } = req.body;
    try {
      const foundCart = await Cart.findOne({ userID: userID })
      if (foundCart){
        const product = foundCart.items.find(item => item.product == product_id)
        if(product){
          await Cart.findOneAndUpdate(
            { userID: userID, items: {$elemMatch: {product: product_id}} },
            { $inc: {'items.$.quantity': quantity} }
          )
          res.send({ product  })
        } else {
          const newProduct = { quantity:quantity, product: product_id }
          await Cart.findOneAndUpdate(
            {userID: userID},
            {$addToSet: {items: newProduct}}
          )
          res.send({ newProduct })
        }

      } else {
        const newCart = await Cart.create({ userID: userID, items: [{quantity: quantity, product: product_id}] })
        res.send({ newCart })
      }
    }
    catch(error){
      res.send({ error })
    }
  }

  //clear cart
  async clear (req, res){
    let { userID } = req.body;
    try {
      const clearedCart = await Cart.findOneAndUpdate(
        { userID: userID }, { $set: { items: [] } }
      )
      res.send({ clearedCart })
    } 
    catch(error){
      res.send({ error })
    }
  }

  //delete item from cart 
  async remove (req, res){
    let { userID, product_id } = req.body
    try {
      const updatedCart = await Cart.findOneAndUpdate(
        {userID: userID},
        {$pull: {items: {product: product_id}}},
        {new: true}
      ).populate('items.product')
      res.send({ updatedCart })
    }
    catch(error){
      res.send({ error })
    }
  }
}


module.exports = new CartController();