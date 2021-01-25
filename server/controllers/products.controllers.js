const Products = require('../models/products.models')

class ProductControl {
  //find all products
  async findAll (req, res){
    try {
      const products = await Products.find({});
      res.send({ products })
    }
    catch(error){
      res.send({ error })
    }
  }
  //find one product
  async findOne (req ,res){
    let { product_id } = req.params;
    try {
        const product = await Products.findOne({ _id: product_id });
        res.send({ product });
    }
    catch(error){
        res.send({ error });
    };
}


  //add new product
  async add (req, res){
    let { name, image, description, price, stock } = req.body;
    try {
      const added = await Products.create({
        name: name,
        image: image,
        description: description,
        price: price,
        stock: stock,
      })
      res.send({ added })
    }
    catch(error){
      res.send({error })
    }
  }
  //update producy
  async update(req, res){
    let { _id, nameUp, imageUp, descUp, priceUp, stockUp } = req.body;
    try {
          const updated = await Products.updateOne(
            { _id },
            { $set: {
                  name: nameUp,
                  image: imageUp,
                  description: descUp,
                  price: priceUp,
                  stock: stockUp,
            }
            }
          );
          res.send({ updated })
    }
    catch(error){
      res.send({ error })
    }
  }

  //delete product
  async remove (req, res){
    let { product_id } = req.params;
    try {
        const deleted = await Products.deleteOne({ _id: product_id })
        res.send({ deleted })
    }
    catch(error){
      res.send({ error })
    }
  }

};

module.exports = new ProductControl();