import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUserSports } from '../actions/user_sports';
import { getBio } from '../actions/bio';
import { setFlash } from '../actions/flash';
import UserSports from './UserSports';
import Bio from './Bio';
import Sports from './Sports';
import axios from 'axios';
import { Segment, Header, Icon } from 'semantic-ui-react';

class Landing extends React.Component {
  state = { loaded: false, bio: {}, userSports: [] }

  componentDidMount() {
    axios.get('/api/landing')
      .then (res => {
        const { bio, user_sports: userSports } = res.data;
        this.setState({ bio, userSports }, () => {
          this.setLoaded();
        });
      })
      .catch (res => {
        this.props.dispatch(setFlash('Something went wrong.', 'error'));
        this.setLoaded()
      })
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    let { loaded, bio, userSports } = this.state;

    if (loaded) {
      if (bio.name === null)
        return (<Redirect to={{ pathname: '/bio' }} />);
      else {
        if (userSports.length === 0)
          return (<Redirect to={{ pathname: '/sports' }} />);
        else
          return (<Redirect to={{ pathname: '/user_sports' }} />);
      }
    } else {
      return(
        <Segment basic textAlign='center'>
          <Header as='h2'>Loading Your Experience!</Header>
          <Icon size='big' name='spinner' loading />
        </Segment>
      )
    }
  }
}

export default connect()(Landing);
