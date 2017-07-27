import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Icon,
  Grid,
  Header,
  Card,
  Image,
  Dropdown,
  Divider,
  Modal,
  Rating,
  Button,
  Segment,
} from 'semantic-ui-react';
import { getUsers } from '../actions/users';


class Users extends React.Component {

  componentDidMount() {
    this.props.dispatch(getUsers());
  }

<<<<<<< HEAD
=======
  displayUsers = () => {
    return this.props.users.map(user => {
      return(
        <Segment>
          { user.email }
        </Segment>
      );
    });
  }

>>>>>>> user to user start
  render() {
    return(
      <Segment basic>
        <Header as='h1' style={{ color: 'blue' }} textAlign='center'>Users!</Header>
        <Grid>
          <Grid.Row>
<<<<<<< HEAD
            { this.users() }
=======
            { this.displayUsers() }
>>>>>>> user to user start
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
<<<<<<< HEAD
  const users = state.users;
  return { users }
=======
  return { users: state.userList };
>>>>>>> user to user start
}

export default connect(mapStateToProps)(Users);
