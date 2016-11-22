//Material UI
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// React
import React, {Component} from 'react';

// Other External Dependencies
import Baby from 'babyparse';
import $ from 'jquery';

// Internal Dependencies
import Project from './project'

var DonePage = React.createClass({
    getInitialState() {
        return ({projects: []});
    },
    componentDidMount() {
        $.get("data/projects.csv").then(function(data) {
            var parsedData = Baby.parse(data, {header: true});
            this.setState({projects: parsedData.data.slice(0, parsedData.data.length-1)});
        }.bind(this), function(error) {
            alert("Try again")
        });
    },
    render() {
        console.log(this.state.projects);
        return (
            <div className='flex-container'>
                {this.state.projects && this.state.projects.map((d,i)=><Project key={'project-' + i} data={d}/>)}
            </div>
        );
    }
});

export default DonePage;
