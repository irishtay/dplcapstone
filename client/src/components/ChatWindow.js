import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { addMessage, fetchMessages } from '../actions/messages';
import { Segment, Header, Form, TextArea, Button, Icon } from 'semantic-ui-react';
<<<<<<< HEAD
import ChatMessage from './ChatMessage';
=======
import ChatMessage from './ChatMessages';
>>>>>>> massagebus
import axios from 'axios';

class ChatWindow extends Component {
  state = { newMessage: '', loaded: false };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(setFlash('Welcome To React Chat!', 'success'));
<<<<<<< HEAD
    dispatch(fetchMessages());

    window.MessageBus.subscribe('/chat_channel', data => {
=======
    dispatch(fetchMessages(this.props.match.params.post_id));

    window.MessageBus.subscribe('/chat_channel/1', data => {
>>>>>>> massagebus
      dispatch(addMessage(data));
      this.scrollToBottom('chat-window');
    });

    setTimeout(() => {
      this.setState({ loaded: true }, () => {
        this.scrollToBottom('chat-window');
      });
    }, 3000);
  }

  scrollToBottom = (id) => {
    let chatWindow = document.getElementById(id);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  displayMessages = () => {
    let { messages } = this.props;
    if(this.state.loaded) {
      if(messages.length) {
        return messages.map( (message, i) => {
          return(<ChatMessage key={i} message={message} />)
        });
      } else {
        return(
          <Segment inverted textAlign='center'>
            <Header as='h1'>No Chat Messages Yet!</Header>
          </Segment>
        )
      }
    } else {
      return(
        <Segment inverted textAlign='center'>
          <Header as='h2'>Loading Chat...</Header>
          <Icon loading size='massive' name='spinner' />
        </Segment>
      )
    }
  }

  addMessage = () => {
<<<<<<< HEAD
    const { user: { email }, dispatch } = this.props;
    axios.post('/api/messages', { chat_message: { email, body: this.state.newMessage }})
=======
    const { messages: { comment }, dispatch, post, match: { params: { post_id } } } = this.props;

    axios.post(`/api/posts/${post_id}/messages`, { message: { comment: this.state.newMessage, post_id: post_id }})
>>>>>>> massagebus
      .then( res => {
        this.setState({ newMessage: '' });
      })
      .catch( error => {
        dispatch(setFlash('Error posting message', 'error'));
    });
  }

  setMessage = (e) => {
    this.setState({ newMessage: e.target.value });
  }

<<<<<<< HEAD
=======
  // submitMessage = (e) => {
  //
  // }

>>>>>>> massagebus
  render() {
    return(
      <Segment basic>
        <Header as='h2' textAlign='center' style={styles.underline}>React Chat!</Header>
        <Segment basic style={styles.mainWindow} id='chat-window'>
          <Segment basic>
            { this.displayMessages() }
          </Segment>
        </Segment>
        <Segment style={styles.messageInput}>
          <Form onSubmit={ this.addMessage }>
            <TextArea
              value={ this.state.newMessage }
              onChange={ this.setMessage }
<<<<<<< HEAD
=======
              onKeyUp={this.submitMessage}
>>>>>>> massagebus
              placeholder='Write Your Chat Message Here!'
              autoFocus
              required
            />
            <Segment basic textAlign='center'>
              <Button type='submit' primary>Send Message</Button>
            </Segment>
          </Form>
        </Segment>
      </Segment>
    )
  }
}

const styles = {
  underline: {
    textDecoration: 'underline',
  },
  mainWindow: {
    border: '3px solid black',
    height: '60vh',
    overflowY: 'scroll',
    backgroundColor: 'lightgrey',
    borderRadius: '10px',
  },
}

const mapStateToProps = (state) => {
  return { user: state.user, messages: state.messages }
}

export default connect(mapStateToProps)(ChatWindow);
