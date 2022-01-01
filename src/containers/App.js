import React, { useEffect, useState } from 'react';
import MessageList from '../components/MessageList/MessageList';
import MessageForm from '../components/MessageForm/MessageForm';
import './App.css';

function App() {
  const [input, setInput] = useState([]);

  useEffect(() => {
    if (input.length && input[input.length - 1].me) {
      fetch(`http://localhost:3001/message/${input[input.length - 1].body}`)
        .then((res) => res.json())
        .then((data) => setInput([...input, { body: data.message }]));
    }
  }, [input]);

  function onMessageSend(inputVal) {
    setInput([...input, inputVal]);
  }

  return (
    <div className="App">
      <MessageList messages={input}></MessageList>
      <MessageForm onMessageSend={onMessageSend}></MessageForm>
    </div>
  );
}

export default App;
