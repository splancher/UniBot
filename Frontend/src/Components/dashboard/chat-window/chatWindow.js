import React, {useEffect, useRef, useState} from 'react';
import './chatWindow.css';

const ChatWindow = () => {
    const initialized = useRef(false)

    const [messages, setMessages] = useState([
        { text: 'Welcome to UniBot, ask me any University related question and I will try to answer it!', sender: 'bot' },
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleInputChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;
        setMessages([...messages, { text: newMessage, sender: 'user' }]);
        //send new message to the Bot
        window.botpressWebChat.sendPayload({ type: 'text', text: newMessage });
        setNewMessage('');
    };

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true
            const script = document.createElement('script')
            script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
            script.async = true
            document.body.appendChild(script)

            script.onload = () => {
                window.botpressWebChat.init({
                    botId: 'a8c05c56-6565-4601-966f-680ae905670b',
                    hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
                    messagingUrl: 'https://messaging.botpress.cloud',
                    clientId: 'a8c05c56-6565-4601-966f-680ae905670b',
                    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/UniBZ-Logo.svg/1200px-UniBZ-Logo.svg.png',
                    showBotInfoPage: true,
                    enableConversationDelete: true,
                    botConversationDescription: "Thesis Chatbot by Simon Plancher",
                    useSessionStorage: true,
                    composerPlaceholder: "Chat with UniBot",
                    hideWidget: true,

                });

                window.botpressWebChat.onEvent(
                    (event) => {
                        if(event.type === 'MESSAGE.SENT'){
                            //setMessages([...messages, { text: event.value.payload.text, sender: 'user' }]);
                            console.log("Message sent to bot!");
                            //activate Typing animation here!
                        }
                        if(event.type === 'MESSAGE.RECEIVED') {
                            setMessages(prevMessages => [...prevMessages, { text: event.value.payload.text, sender: 'bot' }]);
                        }
                        if(event.type === 'LIFECYCLE.LOADED'){
                            //need to send an event for the webchat to emit the LIFECYCLE.READY event.
                            window.botpressWebChat.sendEvent({ type: 'hide' });
                        }
                    },
                    ['MESSAGE.RECEIVED','LIFECYCLE.LOADED', 'LIFECYCLE.READY', 'UI.OPENED', 'UI.CLOSED', 'UI.RESIZE', 'UI.SET-CLASS', 'CONFIG.SET', 'MESSAGE.SENT', 'MESSAGE.SELECTED', 'USER.CONNECTED']
                )

            }
        }

    }, [])

    return (
        <div className="ChatWindow">
            <h1 className="ChatTitle">UniBot</h1> {/* Moved the h1 here */}
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`Message ${
                        message.sender === 'bot' ? 'BotMessage' : 'UserMessage'
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
                    placeholder="Chat with UniBot..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatWindow;
