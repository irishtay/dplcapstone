import React, { Component } from 'react';
import axios from 'axios';
import { Header, Button, Segment, Form } from 'semantic-ui-react';
import { setFlash } from '../actions/flash';
import { setHeaders } from '../actions/headers';
import { connect } from 'react-redux';

class Bio extends Component {
  state = { bio: '', edit: false };

  componentDidMount() {
    axios.get('/api/bio')
      .then( res => {
        this.setState({ bio: res.data.body });
        this.props.dispatch(setHeaders(res.headers))
      })
      .catch( res => {
        console.log(`Bio GET Fail: ${res}`);
      });
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  displayBio = () => {
    return(
      <Segment textAlign='center'>
        <Header as='h4'>{this.state.bio}</Header>
        <Button primary onClick={this.toggleEdit}>Edit Bio</Button>
      </Segment>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;

    axios.put('/api/bio', { bio: { body: this.state.bio } })
      .then( res => {
        this.setState({ bio: res.data.body, edit: false });
        dispatch(setFlash('Bio Updated Successfully!', 'success', { headers: res.headers }));
      })
      .catch( res => {
        dispatch(setFlash('Bio Failed To Update!', 'error'), { headers: res.headers });
      });
  }

  handleChange = (e) => {
    this.setState({ bio: e.target.value });
  }

  editBio = () => {
    return(
      <Segment textAlign='center'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Editing Bio</label>
            <textarea
              value={this.state.bio}
              onChange={this.handleChange}
              placeholder='Your Bio Here!'
            />
          </Form.Field>
          <Button primary type='submit'>Submit</Button>
          <Button onClick={this.toggleEdit}>Cancel</Button>
        </Form>
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

export default connect()(Bio);
