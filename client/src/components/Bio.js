import React, { Component } from 'react';
import axios from 'axios';
import { Header, Button, Segment, Form } from 'semantic-ui-react';
import { setFlash } from '../actions/flash';
import { updateBio, getBio } from '../actions/bio';
import { fetchPhotos } from '../actions/photos';
import { connect } from 'react-redux';
import Photos from './Photos'
import { Card, Icon, Image, Input, Grid } from 'semantic-ui-react'
import '../styles/bio.css';


const genderOption = [
  { key: 'Male', text: 'Male', value: 'Male'},
  { key: 'Female', text: 'Female', value: 'Female'},
  { key: 'Other', text: 'Other', value: 'Other'}
]
class Bio extends Component {
  state = {  name: '', body: '', age: '', gender: '', st: '', edit: false };

  componentDidMount() {
    this.props.dispatch(getBio());
    this.props.dispatch(fetchPhotos());
  }
  toggleEdit = () => {
    const { name, age, state, gender, body } = this.props.bio;
    this.setState({ name, age, st: state, gender, body, edit: !this.state.edit });
  }
  displayBio = () => {
    let { name, age, gender, state, body} = this.props.bio
    return(


<Segment textAlign='center'>
    <br />
  <Grid centered style={styles.theGrid}>
    <Card style={styles.bio}>
      <Card.Content>
        { this.props.photos.length > 0 &&
          <Image src={this.props.photos[0].url} />
        }
      </Card.Content>
    </Card>

  <Card style={styles.bio} className="rightCard">
    <br />
    <Header style={{ fontSize: '40px', fontFamily: 'Rock Salt'}}>
        {name}
    </Header>
      <a>
        #
        {body}
      </a>
        <br />
        <br />
      <a className="labels">
        <Icon name='heterosexual'/>
        <br />
        Gender:
        {gender}
      </a>
        <br />
        <br />
        <br />
      <a className="labels">
        <Icon name='dribble'/>
        <br />
        Age:
        {age}
      </a>
        <br/>
        <br />
        <br />
      <a className="labels">
        <Icon name='marker'/>
        <br />
        Location:
        {state}
      </a>
  </Card>
  </Grid>
        <br />
        <br />
        <Button primary onClick={this.toggleEdit}>Edit Bio</Button>
</Segment>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, st, gender, body } = this.state;
    const { dispatch } = this.props;
    dispatch(updateBio(name, age, st, gender, body));
    this.setState({ edit: false })
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  editBio = () => {
    return(
      <Segment inverted textAlign='center'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input
              label='Name'
              placeholder='Name'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Form.Input
              label='Age'
              placeholder='Age'
              name='age'
              value={this.state.age}
              onChange={this.handleChange}
            />
            <Form.Input
              label='State'
              placeholder='State'
              name='st'
              value={this.state.st}
              onChange={this.handleChange}
            />
            <Form.Select
              label='Gender'
              options={genderOption}
              placeholder='Gender'
              name='gender'
              value={this.state.gender}
              onChange={ (e, data) => this.setState({ gender: data.value }) }
            />
          </Form.Group>
          <Form.Field>
            <Form.Input
              label='Personal Tag'
              placeholder='Enter a personal tag...'
              name='body'
              value={this.state.body}
              onChange={ (e, data) => this.setState({ body: data.value }) }
            />
          </Form.Field>
          <Button primary type='submit'>Submit</Button>
          <Button onClick={this.toggleEdit}>Cancel</Button>
        </Form>
        <Photos/>
      </Segment>
    )
  }
  render() {
    return(
      <Segment inverted basic>
        <Header textAlign='center' style={{ fontFamily: 'Rock Salt', fontSize: '30px' }}>--- My Bio ---</Header>
        { this.state.edit ? this.editBio() : this.displayBio() }
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { bio: state.bio, photos: state.photos  }
}
const styles = {
  bio:{ width: '600px', margin: 0},
  theGrid: {width: '100%', height: '100%'}
}



export default connect(mapStateToProps)(Bio);
