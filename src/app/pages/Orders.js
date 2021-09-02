import React from "react";
import {SubHeader} from "../Components/Subheader/Subheader";
import OrderCard from "../Components/OrderCard/OrderCard";

export function DashboardPage() {
  const orders = [1, 2, 3, 4, 5]
  return (
    <>
    <SubHeader />
    <div className="row">
      {orders.map((order, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12" key={index}>
              <OrderCard />
              </div>
      ))}
              </div>
</>
)
}
