import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import Map from './Map';

class Home extends Component {
  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Home Component</Header>
        <Map />
      </Segment>
    );
  }
}

export default Home;
