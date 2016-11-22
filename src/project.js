// Page of quotes to show
import React, {Component} from 'react';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

var Project = React.createClass({
    // Render a <Quote> element for each element in the state
    render() {
        var img_path = 'imgs/project_images/' + this.props.data.img_path;
        return (
          <Card className='card'>
              <CardMedia>
                  <img id='card_image' src={img_path}/>
              </CardMedia>
              <CardTitle title={this.props.data.title} subtitle={this.props.data.subtitle}/>
              <CardText>
                {this.props.data.description}
              </CardText>
              <CardActions>
                  <FlatButton target='_blank' label="See More" href={this.props.data.url}/>
              </CardActions>
          </Card>
        );
    }
});

export default Project;
