import React , { useState , useEffect } from 'react'
import axios from 'axios' 
import { BrowserRouter as Router , Route , Redirect } from 'react-router-dom'
import Login from './containers/Login.js'
import Register from './containers/Register.js'
import SecretPage from './containers/SecretPage.js'
import Navbar from './components/Navbar.js'

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const token = JSON.parse(localStorage.getItem('token'))

  const verify_token = async () => {
   if( token === null )return setIsLoggedIn(false)
     try{
          axios.defaults.headers.common['Authorization'] = token
          const response = await axios.post(`http://localhost:8080/users/verify_token`)
          return response.data.ok ? setIsLoggedIn(true) : setIsLoggedIn(false)
     }
     catch(error){
        console.log(error)
     }
  }
  useEffect( () => {
     verify_token()
  },[verify_token])


  const login  = (token) => {
     localStorage.setItem('token',JSON.stringify(token)) 
     setIsLoggedIn(true)
  }
  const logout = () => {
     localStorage.removeItem('token');
     setIsLoggedIn(false)
  }
  return (
     <Router>
        <Navbar/>
        <Route exact path='/'      render={ props => <Login login={login} {...props}/>} />
        <Route path='/register'    component={Register}/>
        <Route path='/secret-page' render={ props => {
                                            return !isLoggedIn 
                                            ? <Redirect to={'/'}/>
                                            : <SecretPage logout={logout} {...props}/>   
        }}/>
     </Router>
  );
}

export default App;
