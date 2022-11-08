import React from "react";
import grade from "../assets/img/grade.svg";

const Category = ({ category, panier, setPanier }) => {
  const clickMenu = (menu) => {
    const newPanier = [...panier];
    newPanier.push({ quantity: 1, menu: menu });
    setPanier(newPanier);
  };

  return (
    <div className="wrapper">
      <h2 className="category">{category.name}</h2>
      <div className="meal">
        {category.meals.map((meal, i) => {
          return (
            <div
              key={i}
              className="card-menu"
              onClick={() => {
                clickMenu(meal.title);
              }}
            >
              <div>
                <div>
                  <h3>{meal.title}</h3>
                  {meal.description ? (
                    <p className="description">{meal.description}</p>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <span>{meal.price}$</span>
                  {meal.popular ? (
                    <span className="popular">
                      <img className="grade" src={grade} alt="" />
                      <span style={{ color: "red" }}>Populaire</span>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {meal.picture ? (
                <div>
                  <img className="img-menu" src={meal.picture} alt="" />
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
