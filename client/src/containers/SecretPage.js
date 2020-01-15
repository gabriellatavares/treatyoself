import React from 'react'

const SecretPage = (props) => {

	return <div className='secret_page'>
	          <h1>This is the secret page</h1>
	          <h2>You can access here only after verify the token</h2>
	          <button onClick={()=>{
				  props.history.push('/');
				  props.logout()
				  }}>logout</button>
	       </div>
}

export default SecretPage










