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
import { getSports } from '../actions/sports';
import { addUserSport } from '../actions/user_sports';

class Sports extends React.Component {

  componentDidMount() {
    this.props.dispatch(getSports());
  }

  state = { modalOpen: false, rating: 1, activeSport: {} }

  handleOpen = (sport) => this.setState({
    modalOpen: true,
    activeSport: sport,
  })

  handleClose = (e) => {
    const user_id = this.props.user.id
    this.props.dispatch(addUserSport(user_id, {sport_id: e.target.id, skill_level: this.state.rating}));
    this.setState({modalOpen: false})
  }

  handleRate = (e, { rating }) => this.setState({ rating })

  instructions = () => {
    let { usersports } = this.props;
    if ( usersports.length === 0 ) {
      return (
        <div>
          <Header as='h2' textAlign='center'
          style={{ fontFamily: 'Rock Salt' }}>Admin needs to add sports</Header>
          <br /><br />
        </div>
      )
    } else {
      return (
        <div>
          <Header as='h2' textAlign='center'
          style={{ fontFamily: 'Rock Salt' }}>Subscribe to sports to add them to your favorites</Header>
          <br /><br />
        </div>
      )
    }
  }

  sports = () => {
    let { sports } = this.props;
    return sports.map( sport => {
      let { id, name, image } = sport;
      return (
        <Grid.Column key={id} computer={4} tablet={8} mobile={16}>
          <Card center raised>
            <Card.Content>
              <Card.Header>
                { name }
              </Card.Header>
            </Card.Content>
          <Link to={`/sports/${id}`}>
            <Image src={image}/>
          </Link>
          <Card.Content extra>

            <div className='two choices'>
              <Modal
                trigger={<Button onClick={ () =>this.handleOpen(sport)} >Favorite</Button>}
                closeIcon='close'
                open={this.state.modalOpen}
                onClose={this.handleClose}
              >
                <Header icon='user circle outline' content="Subscribe" />
                <Modal.Content>
                  <p>What is your skill level for { this.state.activeSport.name }?</p>
                  <Rating icon='star' size='massive' maxRating={5} onRate={this.handleRate} />
                </Modal.Content>
                <Modal.Actions>
                  <Button color='green' id={this.state.activeSport.id} onClick={ (e) => this.handleClose(e) } inverted >
                    <Icon name='checkmark' /> Favorite
                  </Button>
                </Modal.Actions>
              </Modal>
              <Button basic color='white' >
                <Icon name='talk' size='large' />
                <Link to={`/sports/${id}`}>ViewPosts</Link>
              </Button>
            </div>
          </Card.Content>
          </Card>
          <br />
        </Grid.Column>
      )
    })
  }
  render() {
    return(
      <Segment basic>
        <Header textAlign='center' style={{ fontFamily: 'Rock Salt', fontSize: '40px' }}>--- All Sports ---</Header>
        <br /><br />
        <Link to='/PostForm'>Add Post</Link>
        <Grid>
          <Grid.Row>
            { this.sports() }
          </Grid.Row>
        </Grid>
        { this.instructions() }
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  const sports = state.sports;
  const user = state.user;
  const usersports = state.usersports;
  return { sports, user, usersports }
}

export default connect(mapStateToProps)(Sports);
