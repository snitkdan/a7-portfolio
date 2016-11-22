// Page of quotes to show
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

const style = {
    height: 500,
    width: 500,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
};

var WhoPage = React.createClass({
    render() {
        return (
            <div className='flex-container'>
                  <Paper id='who_image' style={style} zDepth={5}/>
									<div>
										<p>Hi! My name is Daniel Snitkovskiy, and I'm pursuing my Bachelor's at the University of Washington, Seattle.
										I'm studying Informatics and Computer Science with a focus on Data Science.
										I'm currently in my Junior year, and I'm hoping to find internship/research opportunities for the Summer and/or
										following school year!
										</p>
									</div>
            </div>
        );
    }
});

export default WhoPage;

/*
<div className='flex-container2' id='who_image' className='App-logo-spin' src='imgs/Best.jpg'>

</div>
*/
