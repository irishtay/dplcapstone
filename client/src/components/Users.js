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

  render() {
    return(
      <Segment basic>
        <Header as='h1' style={{ color: 'blue' }} textAlign='center'>Users!</Header>
        <Grid>
          <Grid.Row>
            { this.users() }
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  const users = state.users;
  return { users }
}

export default connect(mapStateToProps)(Users);
