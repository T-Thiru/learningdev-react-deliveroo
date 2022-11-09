import React from "react";
import ItemPanier from "./ItemPanier";

const Panier = ({
  panier,
  isPanier,
  setPanier,
  total,
  setTotal,
  setIsPanier,
}) => {
  return (
    <div className="panier">
      {isPanier ? (
        <div className="btn-panier btn-blue">
          <button className="btn-valider btn-blue" style={{ color: "white" }}>
            Valider mon Panier
          </button>
        </div>
      ) : (
        <div className="btn-panier">
          <button className="btn-valider" disabled>
            Valider mon Panier
          </button>
        </div>
      )}
      <div className="info-panier">
        {panier.map((cart, index) => {
          return (
            <div key={index}>
              <ItemPanier
                cart={cart}
                panier={panier}
                setPanier={setPanier}
                index={index}
                total={total}
                setTotal={setTotal}
                setIsPanier={setIsPanier}
              />
            </div>
          );
        })}
      </div>
      {panier.length > 0 ? (
        <div>
          <div className="subTotal">
            <p style={{ display: "flex", justifyContent: "space-between" }}>
              Sous total <span>{total.toFixed(2)}$</span>{" "}
            </p>
            <p style={{ display: "flex", justifyContent: "space-between" }}>
              frais de livraison<span>2,50$</span>
            </p>
          </div>
          <div className="total">
            <h2 style={{ display: "flex", justifyContent: "space-between" }}>
              Total:<span>{(2.5 + Number(total)).toFixed(2)}$</span>
            </h2>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Panier;
