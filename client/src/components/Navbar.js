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
			Home
		</NavLink>
		<NavLink exact style={styles.default} activeStyle={styles.active} to={'/about'}>
			About us
			</NavLink>
		<NavLink exact style={styles.default} activeStyle={styles.active} to={'/cart'}>
			 Cart: {this.props.counter}
		</NavLink>

	</div>
	)
}
};

export default Navbar;

const styles = {
	active: {
		color: 'gray'
	},
	default: {
		textDecoration: 'none',
		color: 'white'
	}
};

