import React from 'react';
import Chat from '../Components/Chat/Chat';
import OrderCard from '../Components/OrderCard/OrderCard';
import Notifications from '../Components/Notifications/Notifications';

const Dashboard = () => {
  const orders = [1, 2, 3, 4, 5]
    return (
      <div className="dashboard page">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <Chat />
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="row">
      {orders.map((order, index) => (
            <div className="col-xl-6 col-lg-12" key={index}>
              <OrderCard />
              </div>
      ))}
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12"><Notifications /></div>
          </div>
      </div>
    )
}

export default Dashboard;
