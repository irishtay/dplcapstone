import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SportView = ({ sport = {} }) => (
  <Container>
    <Link to="/sports">View All Sports</Link>
    <Header as="h3" textAlign="center">{sport.name}</Header>
    <Image src={sport.logo} />
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell>{sport.description}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Author</Table.Cell>
          <Table.Cell>{sport.author}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Version</Table.Cell>
          <Table.Cell>{sport.version}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Price</Table.Cell>
          <Table.Cell>${sport.price}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Category</Table.Cell>
          <Table.Cell>{sport.category}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { sport: state.sports.find( a => a.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(SportView);
