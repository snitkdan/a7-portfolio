import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import App from './App';
import HomePage from './home';
import WhoPage from './who';
import DonePage from './done';
import ContactPage from './contact';

import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage}/>
                <Route path="who" component={WhoPage}/>
                <Route path="done" component={DonePage}/>
                <Route path="contact" component={ContactPage}/>
            </Route>
        </Router>
    </MuiThemeProvider>,
  document.getElementById('root')
);
