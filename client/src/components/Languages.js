import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Segment, Form, Button, Divider, List } from 'semantic-ui-react';
import { addLanguage, getLanguages } from '../actions/languages';
import Language from './Language';

class Languages extends Component {
  state = { language: '' };

  componentDidMount() {
    this.props.dispatch(getLanguages());
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // get the language value from  state
    // dispatch the addLanguage action
    this.props.dispatch(addLanguage(this.state.language));
    this.setState({ language: '' });
  }

  handleChange = (e) => {
    // set component state of language to whatever the user is typing
    this.setState({ language: e.target.value });
  }

  displayLanguages = () => {
    return this.props.languages.map( language => {
      return(
        <Language key={language.id} language={language} />
      );
    });
  }

  render() {
    return(
      <Segment basic>
        <Header as='h2' textAlign='center'>My Languages</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Language</label>
            <input
              required
              placeholder='New Language Name'
              value={this.state.language}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button primary type='submit'>Add Language</Button>
        </Form>
        <Divider horizontal>Languages</Divider>
        <List>
          { this.displayLanguages() }
        </List>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { languages: state.languages };
}

export default connect(mapStateToProps)(Languages);
