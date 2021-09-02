import React from 'react';
import OrderCardHeader from './Utils/OrderCardHeader';
import OrderCardUserInfo from './Utils/OrderCardUserInfo';
import HorzintalLine from '../HorzintalLine/HorzintalLine';
import Invoice from './Utils/Invoice';
import Type from './Utils/Type';
import Time from './Utils/Time';
import AssignUser from './Utils/AssignUser';
import OrderFooter from './Utils/OrderFooter';
import "./style.scss";

const OrderCard = () => {
    return (
        <div className="card card-custom">
          <OrderCardHeader />
          <div className="card--content">
            <OrderCardUserInfo />
            <HorzintalLine />
            <Invoice />
            <HorzintalLine />
            <Type />
            <HorzintalLine />
            <Time />
            <HorzintalLine />
            <AssignUser />
          </div>
        <OrderFooter />
        </div>
    )
}

export default OrderCard;
