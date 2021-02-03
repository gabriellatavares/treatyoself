import React from 'react';
import { Link } from 'react-router-dom'

const SecretPage = (props) => {
	return (
		<div className='secret_page shortComp'>
			<h1>This is the admin page</h1>
		<h3><Link to='/products/add'>Add New Product</Link></h3>
		<h3><Link to='/products/update'>Update Product</Link> </h3>
		<h3><Link to='/products/delete/product_id'>Delete Product</Link></h3>	
			<button
				onClick={() => {
					props.history.push('/');
					props.logout();
				}}
			>
				logout
			</button>
		</div>
	);
};

export default SecretPage;
