import React from 'react';
import ChatUsers from './Utils/ChatUsers';
import Conversation from './Utils/Conversation';

import "./style.scss";

export default function Chat() {
    
    return (
        <div className="chat">
            <div className="d-flex justify-content-center align-items-center">
                <ChatUsers/>
                <Conversation/>
            </div>
        </div>
    )
}
