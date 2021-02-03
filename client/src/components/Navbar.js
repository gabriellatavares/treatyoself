import React  from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component {	
	constructor(props){
		super(props)

		console.log(this.props.counter)
	}

	render(){
		
	return(
	<div className="navbar">
		<NavLink exact style={styles.default} activeStyle={styles.active} to={'/'}>
		<h1>Treat yo self store</h1>
		</NavLink>
		
			<NavLink exact style={styles.default} activeStyle={styles.active} to={'/about'}>
			About us
			</NavLink>

		<NavLink exact style={styles.default} activeStyle={styles.active} to={'/products'}>
			Products
			</NavLink>
	
		<NavLink exact style={styles.default} activeStyle={styles.active} to={'/cart'}>
		<i className="fas fa-shopping-cart"></i> <span></span> 
		Cart	{this.props.counter}	 
		</NavLink>

	</div>
	)
}
};

export default Navbar;

const styles = {
	active: {
		color: '#e99f4c'
	},
	default: {
		textDecoration: 'none',
		color: '#264143'
	}
};

