import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { addMessage, fetchMessages } from '../actions/messages';
import { Segment, Header, Form, TextArea, Button, Icon } from 'semantic-ui-react';
import ChatMessage from './ChatMessages';
import axios from 'axios';

class ChatWindow extends Component {
  state = { newMessage: '', loaded: false };

  componentDidMount() {
    const { dispatch } = this.props;
    const { post_id } = this.props.match.params;
    dispatch(setFlash('Welcome To Chat!', 'success'));
    dispatch(fetchMessages());
    dispatch(fetchMessages(post_id));

    window.MessageBus.subscribe(`/chat_channel/${post_id}`, data => {
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
    const { messages: { comment }, dispatch, post, match: { params: { post_id } } } = this.props;

    axios.post(`/api/posts/${post_id}/messages`, { message: { comment: this.state.newMessage, post_id: post_id }})
      .then( res => {
        this.setState({ newMessage: '' });
        dispatch({type: "SET_HEADERS", headers: res.headers })
      })
      .catch( error => {
        dispatch(setFlash('Error posting message', 'error'));
    });
  }

  setMessage = (e) => {
    this.setState({ newMessage: e.target.value });
  }

  // submitMessage = (e) => {
  //
  // }

  render() {
    console.log(this.props)
    return(
      <Segment basic>
        <Header as='h2' textAlign='center' style={styles.underline}>Athlete 2 Athlete Chat!</Header>
        <Segment basic style={styles.mainWindow} id='chat-window'>
          <Segment basic>
            { this.displayMessages() }
          </Segment>
        </Segment>
        <Segment inverted style={styles.messageInput}>
          <Form onSubmit={ this.addMessage }>
            <TextArea
              value={ this.state.newMessage }
              onChange={ this.setMessage }
              onKeyUp={this.submitMessage}
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
    fontFamily: 'Rock Salt',
    fontSize: '40px'
  },
  mainWindow: {
    border: '3px solid black',
    height: '50vh',
    overflowY: 'scroll',
    backgroundColor: 'black',
    borderRadius: '10px',
  },
}

const mapStateToProps = (state) => {
  return { user: state.user, messages: state.messages }
}

export default connect(mapStateToProps)(ChatWindow);
