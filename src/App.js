import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import Category from "./components/Category";
import Header from "./components/Header";
import Panier from "./components/Panier";
import Restaurant from "./components/Restaurant";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [panier, setPanier] = useState([]);
  const [isPanier, setIsPanier] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3200/");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  return isLoading ? (
    <p>loading in progress...</p>
  ) : (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Restaurant restaurant={data.restaurant} />
        </section>
        <div className="wrapper display">
          <section>
            {data.categories.map((el, index) => {
              return (
                <Category
                  key={index}
                  category={el}
                  panier={panier}
                  setPanier={setPanier}
                />
              );
            })}
          </section>
          <div>
            <Panier panier={panier} isPanier={isPanier} />
          </div>
        </div>
      </main>
      <footer>
        <p>Made at le Reacteur by Thiru - 2022</p>
      </footer>
    </>
  );
}

export default App;
