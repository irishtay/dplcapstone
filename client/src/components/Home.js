import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';

import { connect } from 'react-redux'
// import Map from './Map';

class Home extends Component {


  render() {
    if(this.props.user) {
      return(
        <Segment basic>
          <Header as='h1' textAlign='center'>Athlete 2 Athlete</Header>

        </Segment>
      );
    } else {
      return(
        <div>Log in to Athlete 2 Athlete</div>
      )
    }
  }
}

// <Map location={{lat: 234, lng: 234}}/>
const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Home);
