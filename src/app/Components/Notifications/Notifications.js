import React from 'react';
import NotificationCard from './NotificationCard';

import "./style.scss";

export default function Notifications() {
    const notifications = [1, 2, 3, 4, 5]
    return (
        <div className="notifications">
            <h1 className="notifications--title">Notifications</h1>
            <h6 className="notifications--subtitle">Maiores dicta atque dolore</h6>
            {notifications.map((item) => <NotificationCard key={item} />)}
        </div>
    )
}
