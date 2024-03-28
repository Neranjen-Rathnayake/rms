import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Admin/Dashboard";
import CreditReport from "./pages/Admin/CreditReport";
import CustomerList from "./pages/Admin/CustomerList";
import DiningTable from "./pages/Admin/DiningTable";
import EmployeeList from "./pages/Admin/EmployeeList";
import Item from "./pages/Admin/Item";
import ItemReport from "./pages/Admin/ItemReport";
import Offers from "./pages/Admin/Offers";
import POSTableOrders from "./pages/Admin/POSTableOrders";
import PosOrderList from "./pages/Admin/PosOrderList";
import SalesReport from "./pages/Admin/SalesReport";
import Transactions from "./pages/Admin/Transactions";
import POSOrders from "./pages/POS/POSOrders";
import POSdashboard from "./pages/POS/POSdashboard";
import POSsidebar from "./pages/POS/POSsidebar";
import POS from "./pages/POS/POS";

import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Otp from "./pages/Otp";
import Payment from "./pages/Payment";
import PendingPay from "./pages/PendingPay";
import QrScan from "./pages/QrScan";
import SinglePview from "./pages/SinglePview";
import UserDetails from "./pages/UserDetails";
import Welcome from "./pages/Welcome";

function App() {
  // const handleInput = (e) => {
  //   // Handle input logic here
  // };

  // const search = (e) => {
  //   if (e.key === "Enter") {
  //     // Perform search logic here
  //   }
  // };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/CreditReport" element={<CreditReport />} />
          <Route path="/CustomerList" element={<CustomerList />} />
          <Route path="/DiningTable" element={<DiningTable />} />
          <Route path="/EmployeeList" element={<EmployeeList />} />
          <Route path="/Item" element={<Item />} />
          <Route path="/ItemReport" element={<ItemReport />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/POSTableOrders" element={<POSTableOrders />} />
          <Route path="/PosOrderList" element={<PosOrderList />} />
          <Route path="/SalesReport" element={<SalesReport />} />
          <Route path="/Transactions" element={<Transactions />} />
          <Route path="/POSOrders" element={<POSOrders />} />
          <Route path="/POSdashboard" element={<POSdashboard />} />
          <Route path="/POSsidebar" element={<POSsidebar />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/PendingPay" element={<PendingPay />} />
          <Route path="/QrScan" element={<QrScan />} />
          <Route path="/SinglePview" element={<SinglePview />} />
          <Route path="/UserDetails" element={<UserDetails />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/POS" element={<POS/>}/>        
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
