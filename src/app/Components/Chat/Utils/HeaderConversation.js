import React from 'react';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

import "../style.scss";

export default function HeaderConversation() {
    return (
        <div className="header--conversation d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
                <img src={toAbsoluteUrl("/media/users/300_21.jpg")} alt="avatar" className="avatar" />
                <h6 className="username">Mohannad Hanafi</h6>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <img src="https://i.ibb.co/VCDh5gR/minimize-1.png" alt="minimize-1" border="0" />
                <img style={{ marginLeft: 12 }} src="https://i.ibb.co/LNMYW6g/016-menu.png" alt="016-menu" border="0" />
            </div>
        </div>
    )
}
