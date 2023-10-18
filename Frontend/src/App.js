import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    setMessages([...messages, { text: newMessage, sender: "user" }]);
    setNewMessage("");
    // Here you can implement logic to handle user input, e.g., send it to a chatbot API.
  };

  return (
    <div className="App">
      <div className="ChatWindow">
        <h1 className="ChatTitle">UniBot</h1>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`Message ${
              message.sender === "bot" ? "BotMessage" : "UserMessage"
            }`}
          >
            {message.text}
          </div>
        ))}
        <form className="MessageInputForm" onSubmit={handleSubmit}>
          <input
            type="text"
            value={newMessage}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default App;
