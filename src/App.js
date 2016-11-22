import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import '../node_modules/font-awesome/css/font-awesome.css'


import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
        <div className="App">
          <AppBar
            iconElementLeft={
              <ul className='flex-container'>
                <Link className="link" activeClassName='active' to="/who"><FlatButton label="Who I Am" /></Link>
                <Link className="link" activeClassName='active' to="/done"><FlatButton label="What I've Done" /></Link>
                <Link className="link" activeClassName='active' to="/contact"><FlatButton label="Reach Out" /></Link>
              </ul>
            }
            iconElementRight={
              <ul className='flex-container'>
                <a href='https://www.facebook.com/daniel.snitkovskiy/' target='_blank' ><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                <a href='https://www.linkedin.com/in/danielsnitkovskiy' target='_blank' ><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href='https://github.com/snitkdan' target='_blank' ><i className="fa fa-github" aria-hidden="true"></i></a>
              </ul>
            }

          />
          <br></br>
          <div className="children">
            {this.props.children}
          </div>
        </div>

    );
  }
}

export default App;
