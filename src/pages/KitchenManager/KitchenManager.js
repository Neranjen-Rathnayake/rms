import React from "react";
import "./KitchenManager.css";
import KMSideBar from "../../components/KitchenManagerCmponents/KMSideBar";
import KMOrderTable from "../../components/KitchenManagerCmponents/KMOrderTable";

const KitchenManager = () => {
  const dummyOrders = [
    {
      orderName: "AD123",
      orderItem: "FRENCH FRIES",
      quantity: 1,
      orderType: "TAKE AWAY",
      orderStatus: "ORDER",
      waiter: "SAMAN KUMARA",
    },
    {
      orderName: "AD124",
      orderItem: "BURGER",
      quantity: 2,
      orderType: "DINE IN",
      orderStatus: "COOKED",
      waiter: "KUMARA",
    },
    {
      orderName: "AD125",
      orderItem: "PIZZA",
      quantity: 1,
      orderType: "TAKE AWAY",
      orderStatus: "PACKED",
      waiter: "THUSHARI",
    },
  ];

  return (
    <div className="row m-2">
      <div className="col-2 p-0">
        <KMSideBar />
      </div>
      <div className="col-10 p-0">
        <KMOrderTable
          orderName={dummyOrders.orderName}
          orderItem={dummyOrders.orderItem}
          quantity={dummyOrders.quantity}
          orderType={dummyOrders.orderType}
          orderStatus={dummyOrders.orderStatus}
          waiter={dummyOrders.waiter}
        />
      </div>
    </div>
  );
};

export default KitchenManager;
