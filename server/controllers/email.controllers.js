require('dotenv').config();
const nodemailer = require('nodemailer')
// selecting mail service and authorazing with our credentials
const transport = nodemailer.createTransport({
// you need to enable the less secure option on your gmail account
// https://myaccount.google.com/lesssecureapps?pli=1
	service: 'Gmail',
	auth: {
		user: process.env.NODEMAILER_EMAIL,
		pass: process.env.NODEMAILER_PASSWORD,
	}
});
const send_email = async (req,res) => {
    const { name , email } = req.body
    const subject = 'Thanks for ordering with us!'
    const message = 'Hello there! Thanks for placing your order with us. Seems like the nodemailer is working well.'
	  const mailOptions = {
		    to: email,
		    subject: "Hello " + name + "! " + subject,
		    html: '<p><pre>' + message + '</pre></p>'
	   }
      try{
           const response = await transport.sendMail(mailOptions)
           console.log('=========================================> Email sent !!')
           return res.json({ok:true,message:'email sent'})
      }
      catch( err ){
           return res.json({ok:false,message:err})
      }
}
const receive_email = async (req, res) =>{
	const {name, email, subject, message} = req.body
	const mailOptions = {
			to: process.env.NODEMAILER_EMAIL,
			subject: 'New message from ' + name + ' from: ' + email,
			html: '<p>'+ 'Subject: '+ subject + '</p><p><pre>' + message + '</pre></p>'
	   }
      try{
           const response = await transport.sendMail(mailOptions)
           console.log('==> Email received !!')
           return res.json({ok:true,message:'email sent'})
      }
      catch( err ){
           return res.json({ok:false,message:err})
      }

	}


module.exports = { send_email, receive_email }