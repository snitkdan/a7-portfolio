// Page of quotes to show
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery'

var style = {
	color: 'black'
}

var ContactPage = React.createClass({
		processForm() {
			//Get the form.
			var form = $("#contact-form");
			//Get message
			var message = $('#message');
			$(form).submit(function(event) {
					// Stop the browser from submitting the form
					event.preventDefault();

					//Serialize the form data
					var formData = $(form).serialize();
					//Submit the form using AJAX
					$.ajax({
									type: 'POST',
									url: $(form).attr('action'),
									data: formData
							})
							.done(function(response) {
									//Make sure the message div has the 'success' class
									$(message).removeClass('error');
									$(message).addClass('success');

									//Set the message text.
									$(message).text(response);

									//Clear the form.
									$('#name').val('');
									$('#email').val('');
									$('#message').val('');
							})
							.fail(function(data) {
									//Make sure the message div has the 'error' class
									$(message).removeClass('success');
									$(message).addClass('error');

									//Set the message text
									if (data.responseText !== '') {
											$(message).text(data.responseText);
									} else {
											$(message).text("An error occured! Please try again.");
									}
							});
						});
		},

    render() {
        return (
            <div className='flex-container'>
								<h2>Contact</h2>
								<form id='contact-form' className='flex-container' method='post' action='mail.php'>
                	<TextField name='name' id='name' inputStyle={style} type='text' className='input' fullWidth={true} defaultValue="Name"/><br/>
									<TextField name='email' id='email' inputStyle={style} type='email' floatingLabelText="" className='input' fullWidth={true} defaultValue="Email"/>
									<TextField name='message' id='message' inputStyle={style} type='text' className='input' fullWidth={true} defaultValue="Message"/><br/>
									<RaisedButton onClick={this.processForm} backgroundColor='green' label="Submit" fullWidth={true} />
								</form>
            </div>
        );
    }
});

export default ContactPage;
