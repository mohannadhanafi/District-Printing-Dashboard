import React from 'react';
import HeaderConversation from './HeaderConversation';
import HorzintalLine from '../../HorzintalLine/HorzintalLine';
import ConversationBody from './ConversationBody';

import "../style.scss";

export default function Conversation() {
    return (
        <div className="conversation">
            <div>
                <HeaderConversation />
                <HorzintalLine  borderColor="#ECEAF3" />
            </div>
            <ConversationBody />
        </div>
    )
}
