import React from "react";
import './popup.css'

const Popup = () => {
    // const keywordsAIDomain = 'wss://keywordai.co';
const keywordsAIDomain = 'ws://localhost:8000';
const ws = new WebSocket(`${keywordsAIDomain}/ws/autofill-ai`);

ws.onopen = () => {
    console.log('WebSocket Client Connected');
    ws.send(JSON.stringify({
        message: "Test message",
    }));
};
  
ws.onmessage = (messageEvent) => {
    const data = JSON.parse(messageEvent.data);
  
    if (data.message) {
      console.log('Received message from server: ', data.message);
    } else {
      console.log('Received data from server, but no message key: ', data);
    }
};
  
  
ws.onerror = (error) => {
    console.log('WebSocket Error: ', error);
};
  
ws.onclose = () => {
    console.log('WebSocket Connection Closed');
};
  


    return (
        <div>
            <h1 className="text-4xl text-black-500">Keywords AI</h1>
        </div>
    )
};

export default Popup;