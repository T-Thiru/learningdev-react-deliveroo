import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import Category from "./components/Category";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Panier from "./components/Panier";
import Restaurant from "./components/Restaurant";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [panier, setPanier] = useState([]);
  const [isPanier, setIsPanier] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-back--56xblq4s6sr6.code.run/"
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  return isLoading ? (
    <Loading />
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
                  setIsPanier={setIsPanier}
                  total={total}
                  setTotal={setTotal}
                />
              );
            })}
          </section>
          <div>
            <Panier
              panier={panier}
              setPanier={setPanier}
              isPanier={isPanier}
              total={total}
              setTotal={setTotal}
            />
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
