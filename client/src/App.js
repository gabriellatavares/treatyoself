import React , { useState , useEffect } from 'react'
import axios from 'axios' 
import { BrowserRouter as Router , Route , Redirect } from 'react-router-dom'
import Home from './containers/Home.js'
import Login from './containers/Login.js'
import Register from './containers/Register.js'
import SecretPage from './containers/SecretPage.js'
import Navbar from './components/Navbar.js'
import { URL } from './config'

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  
  const token = JSON.parse(localStorage.getItem('token'))

  const verify_token = async () => {
   if( token === null )return setIsLoggedIn(false)
     try{
          axios.defaults.headers.common['Authorization'] = token
          const response = await axios.post(`${URL}/users/verify_token`)
          return response.data.ok ? setIsLoggedIn(true) : setIsLoggedIn(false)
     }
     catch(error){
        console.log(error)
     }
  }
  useEffect( () => {
     verify_token()
  },[])


  const login  = (token) => {
     console.log('token ===>')
     localStorage.setItem('token',JSON.stringify(token)) 
     setIsLoggedIn(true)
  }
  const logout = () => {
     localStorage.removeItem('token');
     setIsLoggedIn(false)
  }
  return (
     <Router>
        <Navbar isLoggedIn={isLoggedIn}/>
        <Route exact path='/'      component={Home}/>
        <Route exact path='/login' render={ props => 
                                             isLoggedIn 
                                             ? <Redirect to={'/secret-page'}/>
                                             : <Login login={login} {...props}/>
        }/>       
        <Route path='/register'    render={ props => 
                                             isLoggedIn 
                                             ? <Redirect to={'/secret-page'}/>
                                             : <Register {...props}/>
        }/>
        <Route path='/secret-page' render={ props => 
                                            !isLoggedIn 
                                            ? <Redirect to={'/'}/>
                                            : <SecretPage logout={logout} {...props}/>   
        }/>
     </Router>
  );
}

export default App;
