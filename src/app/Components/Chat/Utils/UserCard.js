import React from 'react';
import "../style.scss";

const UserCard = () => {
    return (
        <div className="usercard--messages">
            <h5 className="username--messages">James Blake</h5>
            <div className="d-flex justify-content-between align-items-center">
            <p className="body--messages">Hello, I hope you're doing well, how are you</p>
            <div className="notification--messages d-flex justify-content-center align-items-center">2</div>
            </div>
        </div>
    )
}

export default UserCard;
