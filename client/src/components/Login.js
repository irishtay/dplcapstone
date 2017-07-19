import React, { Component } from 'react';
import { Header, Segment, Form, Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;

    dispatch(handleLogin(email, password, history));
  }

  render() {
    const { email, password } = this.state;

    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Welcome to Athelete 2 Athlete. Please Login.</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Email</label>
            <input
              autoFocus
              required
              id='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              required
              id='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
          <Segment textAlign='center' basic>
            <Menu.Menu position='right'>
              <Link to='/register'>
              <Menu.Item name="New User Registration" />
              </Link>
            </Menu.Menu>
          </Segment>

        </Form>
      </Segment>
    );
  }
}

export default connect()(Login);
