import React  from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component {	
	
	state = {
		counter: 0,
	}
	componentDidMount(){
		this.setState({
			counter: localStorage.getItem('count')
		})
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
			 Cart: {this.state.counter}
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

