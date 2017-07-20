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
import { getUserSports, deleteUserSport } from '../actions/user_sports';

class UserSports extends React.Component {

  componentDidMount() {
    this.props.dispatch(getUserSports());
  }

  state = { modalOpen: false, activeSport: {} }

  handleOpen = (sport) => this.setState({
    modalOpen: true,
    activeSport: sport,
  })

  handleClose = (e) => {
    this.props.dispatch(deleteUserSport({sport_id: e.target.id}));
    this.setState({modalOpen: false})
  }

sports = () => {
    let { sports } = this.props;
    debugger;
    return sports.map( sport => {
      let { id, name, image, skill_level } = sport;
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
                trigger={<Button onClick={ () =>this.handleOpen(sport)} >Unsubscribe</Button>}
                closeIcon='close'
                open={this.state.modalOpen}
                onClose={this.handleClose}
              >
                <Header icon='user x' content="Unsubscribe" />
                <Modal.Content>
                  <p>Are you sure you want to unsubscribe from { this.state.activeSport.name }?</p>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='red'
                    id={this.state.activeSport.id}
                    onClick={ (e) => this.handleCancel(e) }
                    inverted
                  >
                  <Icon name='x' /> Cancel
                  </Button>
                  <Button color='red'
                    id={this.state.activeSport.id}
                    onClick={ (e) => this.handleClose(e) }
                    inverted
                  >
                  <Icon name='user x' /> Unsubscribe
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
        </Grid.Column>
      )
    })
  }

  render() {
    return(
      <Segment basic>
        <Header as='h1' style={{ color: 'green' }} textAlign='center'>Subscribed Sports</Header>
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
  const usersports = state.usersports;
  return { usersports }
}

export default connect(mapStateToProps)(UserSports);
