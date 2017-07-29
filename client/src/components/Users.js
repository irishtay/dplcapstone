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
    const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']
    return this.props.users.map(user => {

      return(
      <div>
        {sizes.map(size => (
          <div key={'huge'}>
        <List divided vertical size={'huge'} celled>
        <List.Item>
        <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
          <Image avatar src={user.image_url} />
          <List.Content>
            <List.Header as='a'>{user.name}</List.Header>
            <List.Description>{user.body}</List.Description>
          </List.Content>
        </List.Item>
        </List>
        <br />
        </div>
      ))}
      </div>
      );
    });
  }

>>>>>>> user to user start
  render() {
    return(
      <Segment basic>
<<<<<<< HEAD
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
=======
        <Header as='h1' style={{ color: 'blue' }} textAlign='center'>Users</Header>
>>>>>>> friend model/controller added
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
    bios: state.bios,
    photos: state.photos,
   };
>>>>>>> Updated user list
}

export default connect(mapStateToProps)(Users);
