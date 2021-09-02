import React, { useState } from 'react';
import MessageCard from './MessageCard';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";

export default function ConversationBody() {
    const [searchValue, setSearchValue] = useState("");
    const handleSearchChange = ({ target: { value } }) => setSearchValue(value);
    const messages = [
        { id: 2, messageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" },
        { id: 1, messageBody: "Lorem ipsum dolor sit amet, do" },
        { id: 1, messageBody: "Lorem ipsum dolor sit amet, do" },
        { id: 1, messageBody: "Lorem ipsum dolor sit amet, doLorem ipsum dolor sit amet, doLorem ipsum dolor sit amet, doLorem ipsum dolor sit amet, do" },
        { id: 1, messageBody: "Lorem ipsum dolor sit amet, do" },
        { id: 2, messageBody: "Lorem ipsum dolor sit amet, do" },
        { id: 2, messageBody: "Lorem ipsum dolor sit amet, doLorem ipsum dolor sit amet, doLorem ipsum dolor sit amet, doLorem ipsum dolor sit amet, do" },
        { id: 2, messageBody: "Lorem ipsum dolor sit amet, doLorem ipsum dolor sit amet, doLorem ipsum dolor sit amet, doLorem ipsum dolor sit amet, do" },
        { id: 2, messageBody: "Lorem ipsum dolor sit amet, doLorem ipsum dolor sit amet, doLorem ipsum dolor sit amet, doLorem ipsum dolor sit amet, do" },
        { id: 2, messageBody: "Lorem ipsum dolor sit amet, doLorem ipsum dolor sit amet, doLorem ipsum dolor sit amet, doLorem ipsum dolor sit amet, do" },
    ]
    return (
        <>
            <div className="conversation--body__content">
                {messages.map((message) => <MessageCard message={message} />)}
            </div>
            <div className="conversation--body__footer">
                <div className="sendmessage--container d-flex justify-content-between align-items-center">
                <input
                    type="text"
                    autoFocus={true}
                    placeholder="Type here..."
                    value={searchValue}
                    onChange={handleSearchChange}
                    className="form-control form-control-sendmessage"
                />
                <div className="sendmessage--buttons d-flex justify-content-between align-items-center">
                <img style={{  height: 20 }} src="https://i.ibb.co/34CrptB/066-attachment.png" alt="066-attachment" border="0" />
                <button style={{ marginLeft: 11 }} type="button" className="btn btn-primary font-weight-bold"><img src="https://i.ibb.co/RcbmyS9/080-send.png" alt="080-send" border="0" /></button>
                </div>
                </div>
            </div>
        </>
    )
}
