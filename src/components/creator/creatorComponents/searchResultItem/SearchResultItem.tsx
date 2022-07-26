import React from "react";
import "./searchResultItem.scss";

const SearchResultItem = () => {
  const handleAdd = () => {
    console.log("dodato");
  };

  return (
    <div className="resultItem" onClick={() => handleAdd()}>
      <div className="resultItem__content">
        <div className="image">
          <img src="images/heroimg.png" alt="food" />
        </div>
        <div className="resultName">
          <p>Jabuka</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;
