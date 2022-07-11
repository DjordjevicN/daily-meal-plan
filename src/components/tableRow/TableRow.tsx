import React from "react";
import "./TableRow.scss";

const TableRow = () => {
  return (
    <div className="tableRow">
      <div className="status"></div>
      <div className="avatar">
        <img src="" alt="" />
      </div>
      <div className="name">
        <p>Avokado</p>
      </div>
      <div className="purchaseAmount">
        <p>1 kom</p>
      </div>
      <div className="currentPrice">
        <p>180 din</p>
      </div>
      <div className="currentAmount">
        <p>0 kom</p>
      </div>
    </div>
  );
};

export default TableRow;
