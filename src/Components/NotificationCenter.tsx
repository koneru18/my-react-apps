import React, { useState, useEffect } from 'react';

// run websocket server in my-express-app/utils/WebSocket.js

const NotificationCenter = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    let isStopped = false; // Guard flag
    const websocket = new WebSocket('ws://localhost:8080');

    websocket.onopen = () => {
      if (isStopped) {
        websocket.close();
      } else {
        console.log('Connected');
        setWs(websocket);
      }
    };

    websocket.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    return () => {
      isStopped = true;
      if (websocket.readyState === WebSocket.OPEN || websocket.readyState === WebSocket.CONNECTING) {
        websocket.close();
      }
    };
  }, []);


  const sendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(input);
      setInput('');
    }
  };

  return (
    <div className="websocket">
      <h2>WebSocket Chat</h2>
      <div className="messages">
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default NotificationCenter;