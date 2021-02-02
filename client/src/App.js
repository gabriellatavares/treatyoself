import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home.js';
import Login from './containers/Login.js';
import Register from './containers/Register.js';
import SecretPage from './containers/SecretPage.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import About from './components/Aboutus'
import Header from './components/Header'
import { URL } from './config';
import AddProduct from './containers/AddProduct'
import DeleteProduct from './containers/DeleteProduct'
import UpdateProduct from './containers/UpdateProduct'
import Product from './containers/Product'
import Products from './containers/Products'
import Cart from './containers/Cart'
import Checkout from './containers/Checkout'
import PaymentError from './components/Failure'
import PaymentSuccess from './components/Success'

function App() {

	const [ isLoggedIn, setIsLoggedIn ] = useState(false);
	

	const token = JSON.parse(localStorage.getItem('token'));

	const verify_token = async () => {
		if (token === null) return setIsLoggedIn(false);
		try {
			axios.defaults.headers.common['Authorization'] = token;
			const response = await axios.post(`${URL}/admin/verify_token`);
			return response.data.ok ? setIsLoggedIn(true) : setIsLoggedIn(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		verify_token();
	}, []);

	const login = (token) => {
		console.log('token ===>', token);
		localStorage.setItem('token', JSON.stringify(token));
		setIsLoggedIn(true);
	};
	const logout = () => {
		localStorage.removeItem('token');
		setIsLoggedIn(false);
	};
	return (
		<Router>
			<Navbar />
			{/* <Header /> */}
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route
				exact
				path="/login"
				render={(props) => (isLoggedIn ? <Redirect to={'/secret-page'} /> : <Login login={login} {...props} />)}
			/>
			<Route
				path="/register"
				render={(props) => (isLoggedIn ? <Redirect to={'/secret-page'} /> : <Register {...props} />)}
			/>
			<Route
				path="/secret-page"
				render={(props) => (!isLoggedIn ? <Redirect to={'/'} /> : <SecretPage logout={logout} {...props} />)}
			/>
			
			  <Route exact path = "/products" component = {Products}/>
        <Route exact path = "/product/:id" component = {Product}/>
				<Route exact path = "/products/add" component = {AddProduct}/>
				<Route exact path = "/products/delete/:id" component = {DeleteProduct}/>
				<Route exact path = "/products/update" component = {UpdateProduct}/>
				<Route exact path = "/cart" component = {Cart}/>
				<Route exact path = "/payment" component = {Checkout}/>
				<Route
        exact
        path="/payment/success"
        render={props => <PaymentSuccess {...props} />}
      	/>
      	<Route
        exact
        path="/payment/error"
        render={props => <PaymentError {...props} />}
      	/>
			<Footer isLoggedIn={isLoggedIn} />

		</Router>
	);
}

export default App;
