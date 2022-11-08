import React from "react";

const Panier = ({ panier, isPanier }) => {
  return (
    <div className="panier">
      <div className="btn-panier">
        <button className="btn-valider">Valider mon Panier</button>
      </div>
      <div className="info-panier">
        {panier.map((panier, index) => {
          return (
            <p key={index}>
              {panier.menu}>>>>
              {panier.quantity}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Panier;
