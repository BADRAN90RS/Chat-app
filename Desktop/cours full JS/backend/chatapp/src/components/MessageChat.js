// Ce fichier contient le composant pour afficher les messages

import React from 'react';

function MessageChat({ messages }) {
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>{message.text}</li>
      ))}
    </ul>
  );
}

export default MessageChat;
