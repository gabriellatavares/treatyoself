import React from 'react'
import axios from 'axios'
import { URL } from '../config';

class Contact extends React.Component {
  constructor(){
    super()
    this.state = {
      title: 'How can we help?',
    }
  }
  handleSubmit(e){
    var that = this;
    var subject = 'Here is the message: ' 
    e.preventDefault();
    const nameInput = e.target.elements.name;
    const emailInput = e.target.elements.email;
    const messageInput = e.target.elements.message;
    const subjectInput = e.target.elements.subject;
    var data = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
      subject: subjectInput.value,
    }
    axios.post(`${URL}/emails/contact`, data)
    .then((response) => {
      nameInput.value = ' '
      emailInput.value = ' '
      messageInput.value = ' '
      subjectInput.value = ' '
            alert('Your e-mail has been received. We will reply shortly. Thanks!')
    })
    .catch(function (error){
      console.log(error)
    })
  }
  render(){
    return (
      <div style={{height: '80vh',}}>

			<h1 >{this.props.title || this.state.title}</h1>
			<form onSubmit={this.handleSubmit.bind(this)}>
      <input style={style.form} required = {true} type = 'text' placeholder = 'Subject' name = 'subject'/>
			<textArea required={true} style = {{
							border: '1px solid grey',
							width: "50%",
							paddingTop: '.5em',
							paddingLeft: "0.5em",
							display: "block",
							margin: "0 auto",
							minHeight: "20vh",
              marginBottom: "1em",
              fontFamily: 'Merriweather',
      }} 
			placeholder="Please write your message"
			name="message"
			/>
			<input required={true} style={style.form} type="text" placeholder="What is your name?" name="name" />

			<input required={true}
			style={style.form}
			type="email" placeholder="Your contact email?" name="email" />
			<button type="submit" label="Send" >Send!</button>
			</form>

			</div>

    )
  }
}

export default Contact

const style = {
  form: {
  border: '1px solid grey',
	width: "50%",
	display: "block",
	margin: "0 auto",
  marginBottom: "1em",
  fontFamily: 'Merriweather',
}
  
}