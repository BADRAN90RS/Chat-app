import React from 'react';

function InputMsj({ sendMessage }) {
  const [message, setMessage] = React.useState('');

  function handleSendMessage() {
    if (message.trim() !== '') {
      sendMessage(message);
      setMessage('');
    }
  }

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Envoyer</button>
    </div>
  );
}

export default InputMsj;
