import React from "react";

const ItemPanier = ({ cart, panier, setPanier, index, total, setTotal }) => {
  const onClickPlus = (index) => {
    const newPanier = [...panier];

    newPanier[index].quantity++;
    setTotal((total = total + Number(newPanier[index].price)));
    setPanier(newPanier);
  };
  const onClickMinus = (index) => {
    const newPanier = [...panier];
    newPanier[index].quantity--;
    setTotal((total = total - Number(newPanier[index].price)));
    if (newPanier[index].quantity === 0) {
      newPanier.splice(newPanier.indexOf(newPanier[index]), 1);
      setPanier(newPanier);
    }
    setPanier(newPanier);
  };

  return (
    <div className="panier-item">
      <div className="panier-counter">
        <button
          className="btn"
          onClick={() => {
            onClickPlus(index);
          }}
        >
          +
        </button>
        <p>{cart.quantity}</p>
        <button
          className="btn"
          onClick={() => {
            onClickMinus(index);
          }}
        >
          -
        </button>
      </div>

      <p>
        <span>{cart.menu}</span>
      </p>

      <p>{(cart.price * cart.quantity).toFixed(2)}$</p>
    </div>
  );
};

export default ItemPanier;
