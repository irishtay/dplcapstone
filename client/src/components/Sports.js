import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Header,
  Card,
  Image,
  Dropdown,
  Divider,
  Button,
  Segment,
} from 'semantic-ui-react';
import { getSports } from '../actions/sports';

class Sports extends React.Component {

  componentDidMount() {
    this.props.dispatch(getSports());
  }

  sports = () => {
    let { sports } = this.props;
    return sports.map( sport => {
      let { id, name, image } = sport;
      return (
        <Grid.Column key={id} computer={8} tablet={8} mobile={16}>
          <Card fluid>
            <Image src={image} />
            <Card.Content>
              <Card.Header>
                { name }
              </Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Link to={`/sports/${id}`}>View Sport</Link>
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    })
  }
  render() {
    return(
      <Segment basic>
        <Header as='h1' style={{ color: 'green' }} textAlign='center'>All Sports</Header>
        <Grid>
          <Grid.Row>
            { this.sports() }
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  const sports = state.sports;
  return { sports }
}

export default connect(mapStateToProps)(Sports);
