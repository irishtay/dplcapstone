import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Sports from './Sports';
import SportView from './SportView';
import { getSports } from '../actions/sports';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchSports extends React.Component {
  // TODO: change to false
  state = { loaded: true }

  componentDidMount() {
    this.props.dispatch(getSports(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    let { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/sports" component={Sports} />
          <Route exact path="/sports/:id" component={SportView} />
        </div>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchSports);
