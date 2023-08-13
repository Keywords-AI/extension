// const keywordsAIDomain = 'ws://localhost:8000';
const keywordsAIDomain = 'wss://keywordsai.co';
const ws = new WebSocket(`${keywordsAIDomain}/ws/autofill-ai`);

console.log('Hello content.js');

ws.onopen = () => {
    console.log('WebSocket Client Connected');
    ws.send(JSON.stringify({}));
}

ws.onmessage = (message) => {
    const data = JSON.parse(message.data);
    console.log('Received data from server: ', data);
}

export const sendMessage = (message) => {
    if (ws.readyState == WebSocket.OPEN) {
        ws.send(JSON.stringify(message));
        console.log('Sent data to server: ', message);
    } else {
        console.warn('WebSocket is not open. Message not sent.');
    }
    
    
}