import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import UserSports from './UserSports';
import UserSportView from './UserSportView';
import { getUserSports } from '../actions/user_sports';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchUserSports extends React.Component {
  // TODO: change to false
  state = { loaded: true }

  componentDidMount() {
    this.props.dispatch(getUserSports(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    let { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/user_sports" component={UserSports} />
          <Route exact path="/user_sports/:id" component={UserSportView} />
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

export default connect()(FetchUserSports);
