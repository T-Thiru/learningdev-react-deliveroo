import React from "react";
import grade from "../assets/img/grade.svg";

const Category = ({
  category,
  panier,
  setPanier,
  setIsPanier,
  total,
  setTotal,
}) => {
  const clickMenu = (menu, id, price) => {
    const newPanier = [...panier];

    if (newPanier.length > 0) {
      const position = newPanier.map((e) => e.menu).indexOf(menu);

      if (position >= 0) {
        // console.log("inclus");
        newPanier[position].quantity++;
        setTotal((total = total + Number(newPanier[position].price)));
        setPanier(newPanier);
      } else {
        newPanier.push({
          quantity: 1,
          menu: menu,
          price: price,
        });
        // console.log("not inclus");
        setTotal((total = total + Number(price)));
        setPanier(newPanier);
      }
    } else {
      newPanier.push({
        quantity: 1,
        menu: menu,
        price: price,
      });
      setIsPanier(true);
      setTotal((total = total + Number(newPanier[0].price)));
      setPanier(newPanier);
    }
  };

  return (
    <div className="wrapper">
      <h2 className="category">{category.name}</h2>
      <div className="meal">
        {category.meals.map((meal) => {
          return (
            <div
              key={meal.id}
              className="card-menu"
              onClick={() => {
                clickMenu(meal.title, meal.id, meal.price);
              }}
            >
              <div>
                <div>
                  <h4>{meal.title}</h4>
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
