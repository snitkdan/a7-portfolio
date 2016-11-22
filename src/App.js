import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Avatar from 'material-ui/Avatar';

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
