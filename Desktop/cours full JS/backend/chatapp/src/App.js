// Ce fichier contient les composants et la logique de l'application

import React from 'react';
import { firebase, database } from './firebase';
import MessageChat from './components/MessageChat'
import InputMsj from './components/InputMsj';

function App() {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    const messagesRef = database.ref('messages');

    messagesRef.on('value', (snapshot) => {
      const messages = [];
      snapshot.forEach((childSnapshot) => {
        const message = childSnapshot.val();
        messages.push(message);
      });
      setMessages(messages);
    });

    return () => {
      messagesRef.off(); // Nettoie le listener Firebase lors du démontage
    };
  }, []);

  function sendMessage(message) {
    database.ref('messages').push({
      text: message,
      timestamp: firebase.database.ServerValue.TIMESTAMP // ou new Date() pour Firestore
    });
  }

  return (
    <div>
      <h1>Application de Chat</h1>
      <MessageChat messages={messages} />
      <InputMsj sendMessage={sendMessage} />
    </div>
  );
}

export default App;
