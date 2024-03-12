import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart"
//import QrScan from "./pages/QrScan";
import SearchBar from './components/SearchBar.js';
import Payment from "./pages/Payment.js";
import Otp from "./pages/Otp.js";

function App() {

  const handleInput = (e) => {
    // Handle input logic here
  };

  const search = (e) => {
    if (e.key === "Enter") {
      // Perform search logic here
    }
  };

  return (
    <div className="App main">
     <Otp/>
    </div>
  );
}

export default App;
