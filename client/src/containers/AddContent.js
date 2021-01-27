import React from 'react'
import Axios from 'axios'
import { URL } from '../config'

class AddContent extends React.Component {


	state = {
		userID: localStorage.getItem('userID'),
		product_id: this.props.product_id,
		quantity: 1,
	}

	handleClick = () => {
		let { userID, product_id, quantity } = this.state;
		this.add(userID, product_id, quantity);
	}

	async add(){
		let { userID, product_id, quantity } = this.state;
		try {
			const response = await Axios.post(`${URL}/cart/add`, {
				userID: userID,
				product_id: product_id, 
				quantity: quantity
            });
			console.log(response);		
		}
		catch(error) {
			console.log(error);
		}
		// window.location = '/cart';
	}

	render() {
 		return (
			<div>
				
				<button onClick = {this.handleClick}>Add to Cart</button>
		
			</div>
		);
	}

}


export default AddContent