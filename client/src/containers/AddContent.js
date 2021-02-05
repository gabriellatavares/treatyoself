import React, { useEffect, useState } from 'react'


const AddContent = (props) => {
  
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') || '[]'))
  
  
  useEffect(() => {
    const data = localStorage.getItem("shopping-cart");
    if (data) {
      setCart(JSON.parse(data));      
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(cart))
    let count = cart.length
    localStorage.setItem('count', JSON.stringify(count))
    props.setCounter(count)// <================== 
  })

return (
  <div className='addtocart'>
    <button onClick={() => {
      let inThere = false;
      for(var ele of cart){
        if (ele.name === props.name){
          inThere = true;
          alert('Item is already in the cart! If you want to purchase more than one, you can change the quantity on the check-out.')
        } 
      } 
      if (inThere === false){
        setCart ([
          {
            name: props.name,
            id: props._id,
            price: props.price,
            image: props.image,
            description: props.description,
            stock: props.stock,
          },
          ...cart
        ])
        
        
      }
      
    }
    
    }>
      Add to cart! <i className="fas fa-cart-plus"></i></button>

 </div> 
 )
}
export default AddContent

