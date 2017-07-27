import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Icon,
  Grid,
  Header,
  Card,
  List,
  Image,
  Dropdown,
  Divider,
  Modal,
  Rating,
  Button,
  Segment,
} from 'semantic-ui-react';
import { getUsers } from '../actions/users';
import { getBio } from '../actions/bio';


class Users extends React.Component {

  componentDidMount() {
    this.props.dispatch(getUsers());
    this.props.dispatch(getBio());
  }

<<<<<<< HEAD
=======
  displayUsers = () => {
    return this.props.users.map(user => {

      return(
        <List.Item>
          <Image avatar src={user.image} />
          <List.Content>
            <List.Header as='a'>{user.name}</List.Header>
            <List.Description>{user.body}</List.Description>
          </List.Content>
        </List.Item>
      );
    });
  }

>>>>>>> user to user start
  render() {
    return(
      <Segment basic>
        <Header as='h1' style={{ color: 'blue' }} textAlign='center'>Users!</Header>
<<<<<<< HEAD
        <Grid>
          <Grid.Row>
<<<<<<< HEAD
            { this.users() }
=======
            { this.displayUsers() }
>>>>>>> user to user start
          </Grid.Row>
        </Grid>
=======
        <List>
          { this.displayUsers() }
        </List>
>>>>>>> Updated user list
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
<<<<<<< HEAD
<<<<<<< HEAD
  const users = state.users;
  return { users }
=======
  return { users: state.userList };
>>>>>>> user to user start
=======
  return {
    users: state.userList,
    bios: state.bios
   };
>>>>>>> Updated user list
}

export default connect(mapStateToProps)(Users);
