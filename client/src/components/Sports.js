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
} from 'semantic-ui-react';
import { getSports } from '../actions/sports'

class Sports extends React.Component {

  componentDidMount () {
    this.props.dispatch(getSports())
  }

  sports = () => {
    let { sports } = this.props;
    return sports.map( sport => {
      let { id, name, image } = sport;
      return (
        <Grid.Column key={id} computer={4}>
          <Card>
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
      <div>{this.sports()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  const sports = state.sports;
  return { sports }
}

export default connect(mapStateToProps)(Sports);
