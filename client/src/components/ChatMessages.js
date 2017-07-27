import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';

const ChatMessage = ({ message }) => (
  <Segment>
    <Divider hidden />
    <blockquote>{ message.comment }</blockquote>
  </Segment>
);

export default ChatMessage;
