import React from 'react';
import ChatWindow from './chat-window/chatWindow';
import Chatbot from "./chatbot/chatbot";
import './dashboard.css';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Chatbot />
        </div>
    );
};

export default Dashboard;
