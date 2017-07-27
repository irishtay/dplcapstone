import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';

const ChatMessage = ({ message }) => (
  <Segment>
<<<<<<< HEAD
    <i>{message.email}</i>
    <Divider hidden />
    <blockquote>{ message.body }</blockquote>
=======
    <Divider hidden />
    <blockquote>{ message.comment }</blockquote>
>>>>>>> massagebus
  </Segment>
);

export default ChatMessage;
