import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          <Grid container centered stackable columns={2}>
            <Grid.Column>
              <Header as='h1' color='blue'>Welcome to the Hawaii Covid-19 Chat-bot!</Header>
              <Header as='h3' color='blue'> Our goal is simple. Provide a simple, easy to use Chat-bot for those concerned with COVID-19 during
                these scary times. We hope to provide users helpful information that will not only help answer all their
                questions, but also give them a peace of mind. </Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon color='blue' name='comment outline' size='huge'/>
              <Header as='h3' color='blue'><a href=''>Ask me something!</a></Header>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
