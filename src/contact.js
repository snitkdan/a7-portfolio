// Page of quotes to show
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery'
import firebase from 'firebase'

var style = {
    color: 'black'
}

var config = {
	 apiKey: "AIzaSyBWYlRWodwfRe9CKqb0piHiu_-I40pmjiQ",
	 authDomain: "portfolio-4c0ec.firebaseapp.com",
	 databaseURL: "https://portfolio-4c0ec.firebaseio.com",
	 storageBucket: "portfolio-4c0ec.appspot.com",
	 messagingSenderId: "12335692538"
 };
 firebase.initializeApp(config);

var ContactPage = React.createClass({
		getInitialState(){
			return({emails:null})
		},
		componentDidMount(){
			var database = firebase.database();
			var emails = database.ref('emails');
			this.setState({emails:emails});
			$('#submitMessage').empty();
		},
		sendMail(){
				var name = $('#name').val();
				var from = $('#email').val();
				var message = $('#message').val();
				this.state.emails.push({
						from:from,
						name:name,
						message:message
				})
			  $('#name').val('Name');
				$('#email').val('Email');
				$('#message').val('Message');
				$('#submitMessage').append('Thank you for your message!')
		},
    render() {
        return (
            <div id='contact-form' className='flex-container'>
						<div id='submitMessage' className='flex-container'></div>
                <h2>Contact</h2>
                    <TextField name='name' id='name' inputStyle={style} type='text' className='input' fullWidth={true} defaultValue="Name"/><br/>
                    <TextField name='email' id='email' inputStyle={style} type='email'  className='input' fullWidth={true} defaultValue="Email"/>
                    <TextField name='message' id='message' inputStyle={style} type='text' className='input' fullWidth={true} defaultValue="Message"/><br/>
                    <RaisedButton onClick={this.sendMail} backgroundColor='green' label="Submit" fullWidth={true}/>
            </div>
        );
    }
});

export default ContactPage;

// JavaScript file
