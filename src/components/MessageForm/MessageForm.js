import React, { useState } from 'react';
import './MessageForm.css';

const ME = 'me';

function MessageForm({ onMessageSend }) {
  const [myVal, setMyVal] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();
    if (myVal && !/^\s*$/.test(myVal)) {
      onMessageSend({ body: myVal.trim(), me: ME });
    }
  }

  return (
    <form
      className="MessageForm"
      onSubmit={handleFormSubmit}
      data-testid="submit-message"
    >
      <div className="input-container">
        <input
          onChange={(e) => setMyVal(e.target.value)}
          data-testid="input-message"
          type="text"
          placeholder="پیام خود را اینجا بنویسید..."
        />
      </div>
      <div className="button-container">
        <button type="submit">ارسال</button>
      </div>
    </form>
  );
}

export default MessageForm;
