import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Icon,
  Grid,
  Header,
  Card,
  Image,
  Modal,
  Button,
  Segment,
  Rating,
} from 'semantic-ui-react';
import { getUserSports, deleteUserSport } from '../actions/user_sports';

class UserSports extends React.Component {

  componentDidMount() {
    this.props.dispatch(getUserSports());
  }

  state = { modalOpen: false, activeSport: {} }

  handleOpen = (usersport) => this.setState({
    modalOpen: true,
    activeSport: usersport,
  })

  handleClose = (e) => {
    this.props.dispatch(deleteUserSport({sport_id: e.target.id}));
    this.setState({modalOpen: false})
  }

usersports = () => {
    let { usersports } = this.props;

    return usersports.map( usersport => {
      let { id, name, imageUrl, skillLevel } = usersport;
      return (
        <Grid.Column key={id} computer={4} tablet={8} mobile={16}>
          <Card center raised>
            <Card.Content>
              <Card.Header>
                { name }
                <br />
                Your Skill Level: &nbsp;
                <Rating icon='star' size='medium' maxRating={5} rating={skillLevel} disabled/>
              </Card.Header>
            </Card.Content>
          <Link to={`/user_sports/${id}`}>
            <Image src={imageUrl}/>
          </Link>
          <Card.Content extra>

            <div className='two choices'>
              <Modal
                trigger={<Button onClick={ () =>this.handleOpen(usersport)} >Unsubscribe</Button>}
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
                  <Button color=   'red'
                    id={this.state.activeSport.id}
                    onClick={ (e) => this.handleClose(e) }
                    inverted
                  >
                  <Icon name='user x' /> Unsubscribe
                  </Button>
                </Modal.Actions>
              </Modal>
              <Button basic color='white' >
                <Icon name='talk' size='middle' />
                <Link to={`/usersports/${id}`}>ViewPosts</Link>
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
        <Header as='h1' textAlign='center'
        style={{ fontFamily: 'Rock Salt' }}>---- Your Favorite Sports ----</Header>
        <br /><br />
        <Grid>
          <Grid.Row>
            { this.usersports() }
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
