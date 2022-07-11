import React from "react";
import TableRow from "../../components/tableRow/TableRow";
import "./ShoppingPage.scss";

function ShoppingPage() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="shopping">
      <div className="content">
        <div className="table">
          {arr.map(() => {
            return <TableRow />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ShoppingPage;
