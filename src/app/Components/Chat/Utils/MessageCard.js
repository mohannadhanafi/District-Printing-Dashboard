import React from 'react'

export default function MessageCard({ message: { id: messageUserId, messageBody } }) {
    const userId = 1;
    return (
        messageUserId === userId ? (
            <div className="outgoing_msg">
                <div className="sent_msg">
                    <p>{messageBody}</p>
                </div>
            </div>
        ) : (
            <div className="incoming_msg">
                <div className="received_msg">
                    <div className="received_withd_msg">
                        <p>{messageBody}</p>
                    </div>
                </div>
            </div>
        )
        // <div style={{ marginBottom: 10 }}>
        // <div className={`messageCard ${messageUserId === userId ? "myMessageCard" : "otherMessageCard"}`}>
        //     <p>{messageBody}</p>
        // </div>
        // </div>
    )
}
