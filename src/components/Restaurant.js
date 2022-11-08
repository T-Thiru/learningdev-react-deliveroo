import React from "react";

const Restaurant = ({ restaurant }) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="wrapper resto">
        <div>
          <h1>{restaurant.name}</h1>
          <p className="resto-desc">{restaurant.description}</p>
        </div>
        <div>
          <img className="resto-pic" src={restaurant.picture} alt="th" />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
