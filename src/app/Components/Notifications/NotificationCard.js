import React from 'react'

export default function NotificationCard() {
    return (
        <div className="notification--card d-flex flex-column justify-content-between">
            <div className="notification--card__userinfo d-flex justify-content-start align-items-center">
            <img className="notification--card__userinfo__avatar" src="https://e5ap8jfucp-flywheel.netdna-ssl.com/wp-content/uploads/2019/10/Student-reviewing-personal-statement-template-1024x683.jpeg" alt="avatar" />
            <div className="notification--card__userinfo__details d-flex flex-column justify-content-between">
                <h4>John Smith</h4>
                <h6>10h ago</h6>
            </div>
            </div>
            <div className="notification--card__notificationinfo">
                <h6>Placed an order</h6>
                <p>Sit id in exercitationem facere. Et modi necessitatibus aperiam id qui quod doloribus.</p>
            </div>
            <div className="notification--card__status d-flex justify-content-center align-items-center">
                <span className="notification--card__status__container d-flex justify-content-center align-items-center">Processing</span>
            </div>
        </div>
    )
}
