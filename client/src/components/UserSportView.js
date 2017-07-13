import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UserSportView = ({ sport = {} }) => (
  <Container>
    <Link to="/user_sports">Subscribed Sports</Link>
    <Header as="h3" textAlign="center">{sport.name}</Header>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { sport: state.sports.find( a => a.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(UserSportView);
