import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import Sports from './Sports'
import { connect } from 'react-redux'
// import Map from './Map';

class Home extends Component {


  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Athlete 2 Athlete</Header>
        <Sports />
      </Segment>
    );
  }
}

// <Map location={{lat: 234, lng: 234}}/>
export default connect()(Home);
