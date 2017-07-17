import React, { Component } from 'react';
import axios from 'axios';
import { Header, Button, Segment, Form } from 'semantic-ui-react';
import { setFlash } from '../actions/flash';
import { updateBio, getBio } from '../actions/bio';
import { fetchPhotos } from '../actions/photos';
import { connect } from 'react-redux';
import Photos from './Photos'
import { Card, Icon, Image } from 'semantic-ui-react'

const genderOption = [
  { key: 'Male', text: 'Male', value: 'male'},
  { key: 'Female', text: 'Female', value: 'female'},
  { key: 'Other', text: 'Other', value: 'other'}
]

class Bio extends Component {
  state = {  name: '', body: '', age: '', gender: '', zip: '', edit: false };

  componentDidMount() {
    this.props.dispatch(getBio());
    this.props.dispatch(fetchPhotos());
  }

  toggleEdit = () => {
    const { name, age, zip, gender,  body } = this.props.bio;
    this.setState({ name, age, zip, gender,  body, edit: !this.state.edit });
  }

  displayBio = () => {
    let { name, age, gender, zip } = this.props.bio
    return(
      <Segment textAlign='center'>

  <Card>
    <Card.Content>
      { this.props.photos.length > 0 &&
        <Image src={this.props.photos[0].url} />
      }
      <Card.Header>
        {name}
      </Card.Header>

      <Card.Meta>
      gender:

        {gender}
        <br/>
        age:
        {age}
        <br/>
        zip:
        {zip}

      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>

        <Button primary onClick={this.toggleEdit}>Edit Bio</Button>
      </Segment>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, zip, gender } = this.state;
    const { dispatch } = this.props;
    dispatch(updateBio(name, age, zip, gender));
    this.setState({ edit: false })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  editBio = () => {
    return(
      <Segment textAlign='center'>
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
              label='Zip Code'
              placeholder='Zip Code'
              name='zip'
              value={this.state.zip}
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
          <Button primary type='submit'>Submit</Button>
          <Button onClick={this.toggleEdit}>Cancel</Button>
        </Form>
        <Photos />
      </Segment>
    )
  }

  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>My Bio</Header>
        { this.state.edit ? this.editBio() : this.displayBio() }
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { bio: state.bio, photos: state.photos  }
}

export default connect(mapStateToProps)(Bio);
