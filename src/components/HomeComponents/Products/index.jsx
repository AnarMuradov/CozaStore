import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { BasketContext } from "../../../Context/BasketContext";
import Modal from "../Modal";
const Products = () => {
  const { basket, addBasket } = useContext(BasketContext);
  const [category, setCategory] = useState("All");
  const [item, setItem] = useState(null);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [api, setApi] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const dataLimit = 8;
  // function getapi() {
  //   fetch(
  //     "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
  //   )
  //     .then((res) => res.json())
  //     .then(data => {
  //       setApi(data);
  //       setVisibleData(data.slice(0, dataLimit));

  //     })

  // }
  useEffect(() => {
    fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
    )
      .then((res) => res.json())
      .then((data) => {
        setApi(data);
        setVisibleData(data.slice(0, dataLimit));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  function handleCategory(category) {
    setCategory(category);
  }

  const filterProducts =
    category === "All" ? api : api.filter((item) => item.category === category);

  return (
    <section id="Products">
      <div className="productsSection">
        <div className="ProductsHead">
          <h1>PRODUCT OVERVIEW</h1>
        </div>
        <div className="ProductsFilter">
          <ul className="filterList">
            <li onClick={() => handleCategory("All")}>All</li>
            <li onClick={() => handleCategory("Mens")}>Mens</li>
            <li onClick={() => handleCategory("Womens")}>Womens</li>
            <li onClick={() => handleCategory("Kids")}>Kids</li>
          </ul>
          <div className="filterBlock">
            <button>Filter</button>
            <button onClick={() => setIsOpen(!isOpen)}>Search</button>
          </div>
        </div>
        <input
          style={
            isOpen
              ? { height: "60px", transition: "500ms" }
              : { height: "0px", border: "none", transition: "500ms" }
          }
          placeholder="Search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {item ? <Modal setItem={setItem} item={item} /> : null}
        <div className="ProductsContainer">
          { filterProducts
            .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
            .map((x) => {
              let added = basket.findIndex((y) => y.id === x.id);
              return (
                <div className="product" key={x.id}>
                  <img
                    onClick={() => setItem(x)}
                    className="productsImg"
                    src={x.thumbnail}
                    alt=""
                  />
                  <div className="prodName">
                    <h4>{x.model}</h4>
                    <div className="prodIcon">
                      <i className="fa-regular fa-heart"></i>
                      <i
                        style={added !== -1 ? { color: "red" } : null}
                        onClick={() => addBasket(x)}
                        class="fa-solid fa-cart-shopping"
                      ></i>
                    </div>
                  </div>
                  <p>${x.price}</p>

                  <div className="prodIcon"></div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Products;
