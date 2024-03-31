import React, { useState } from "react";
import './OrderRow.css'
const OrderRow = () => {
  const [status, setStatus] = useState("ORDER");
  const [backgroundColor, setBackgroundColor] = useState("#EFEFEF");
  
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleClick = () => {
    switch (status) {
      case "ORDER":
        setStatus("PENDING");
        setBackgroundColor("#FFD839");
        break;
      case "PENDING":
        setStatus("COOKED");
        setBackgroundColor("#FF9900");
        break;
      case "COOKED":
        setStatus("PACKED");
        setBackgroundColor("#05CD99");
        break;
      case "PACKED":
        setStatus("ORDER");
        setBackgroundColor("#EFEFEF");
        break;
      default:
        setStatus("ORDER");
        setBackgroundColor("#EFEFEF");
        break;
    }
  };

  return (
    <tr>
      <td>
        <input className="form-check-input cb" type="checkbox" value="" />
      </td>

      <td>
        <span className="text2">AD123</span>
      </td>

      <td>
        <span className="text2">FRENCH FRIES</span>
      </td>

      <td>
        <span className="text2">1</span>
      </td>

      <td>
        <span className="text2" style={{ color: "#00C951" }}>
          DINE IN
        </span>
      </td>

      <td>
        <button
          className="statusButton rounded-5 border-0"
          style={{ backgroundColor: backgroundColor }}
          onClick={handleClick}
        >
          {status}
        </button>
      </td>
      <td>
        <select className="text2 selectCheff form-select border-0 p-0">
          <option className="text2">SAMAN</option>
          <option className="text2">KUMARA</option>
          <option className="text2">THUSHARI</option>
          <option className="text2">WIMAL</option>
        </select>
      </td>
      <td>
        <span className="text2">SAMAN KUMARA</span>
      </td>
    </tr>
  );
};

export default OrderRow;
