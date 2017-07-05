/*eslint no-restricted-globals: 0 */
import React, { Component } from 'react';
import { Icon, List, Segment, Form, Button } from 'semantic-ui-react';
import { editLanguage, deleteLanguage } from '../actions/languages';
import { connect } from 'react-redux';

class Language extends Component {
  state = { languageName: this.props.language.name, edit: false };

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  handleDelete = (id) => {
    if(confirm('Really Delete?'))
      this.props.dispatch(deleteLanguage(id));
  }

  displayLanguage = () => {
    const { language } = this.props;

    return(
      <List.Item>
        <List.Content>
          <List.Header>
            {language.name}
            &nbsp;
            <Button basic size='mini' onClick={this.toggleEdit}>
              <Icon style={{ margin: '0 auto' }} name='write' />
            </Button>
            <Button basic size='mini' onClick={() => this.handleDelete(language.id)}>
              <Icon style={{ margin: '0 auto' }} name='trash' />
            </Button>
          </List.Header>
        </List.Content>
      </List.Item>
    )
  }

  handleChange = (e) => {
    this.setState({ languageName: e.target.value });
  }

  handleSubmit = (e, id) => {
    e.preventDefault();
    this.props.dispatch(editLanguage(id, { name: this.state.languageName }))
    this.setState({ edit: false });
  }

  editLanguageDisplay = () => {
    return(
      <List.Item>
        <List.Content>
          <List.Header>
            <Form onSubmit={(e) => this.handleSubmit(e, this.props.language.id)}>
              <Form.Field>
                <input
                  required
                  placeholder='First Name'
                  value={this.state.languageName}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Button primary size='mini'>Update</Button>
              <Button size='mini' onClick={this.toggleEdit}>Cancel</Button>
            </Form>
          </List.Header>
        </List.Content>
      </List.Item>
    )
  }

  render() {
    return(
      <Segment>
        { this.state.edit ? this.editLanguageDisplay() : this.displayLanguage() }
      </Segment>
    )
  }
}

export default connect()(Language);
