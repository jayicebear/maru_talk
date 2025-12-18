import React, { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMsg = { sender: "user", text: message };
    setMessages((prev) => [...prev, userMsg]);

    const response = await fetch("http://localhost:3001/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    const botMsg = { sender: "bot", text: data.reply };

    setMessages((prev) => [...prev, botMsg]);
    setMessage("");
  };

  return (
    <div className="chat-container">
      {/* <div className="chat-header">카카오톡 GPT </div> */}
      <div className="chat-header">
      <img src="/dog.png" alt="로고" className="header-logo" />
      댕댕이톡
    </div>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            <div className="bubble">{msg.text}</div>
          </div>
        ))}
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="메시지를 입력하세요"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          // onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          sendMessage();
                        }
        }}
        />
        <button onClick={sendMessage}>전송</button>
      </div>
    </div>
  );
}

export default App;
