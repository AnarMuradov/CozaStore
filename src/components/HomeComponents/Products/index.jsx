import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { BasketContext } from "../../../Context/BasketContext";
const Products = () => {
  const { addBasket}  = useContext(BasketContext)
  const [category, setCategory] = useState("All")

  const [api, setApi] = useState([]);
  function getapi() {
    fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
    )
      .then((res) => res.json())
      .then((data) => setApi(data));
  }
  useEffect(() => {
    getapi();
  }, []);
    function handleCategory(category){
setCategory(category)
    }

  const filterProducts = category=== "All" ? api : api.filter((item) =>item.category===category)

  return (
    <section id="Products">
      <div className="productsSection">
        <div className="ProductsHead">
          <h1>PRODUCT OVERVIEW</h1>
        </div>
        <div className="ProductsFilter">
          <ul className="filterList">
            <li onClick={()=>handleCategory("All")}>All</li>
            <li onClick={()=>handleCategory("Mens")}>Mens</li>
            <li onClick={()=>handleCategory("Womens")}>Womens</li>
            <li onClick={()=>handleCategory("Kids")}>Kids</li>
          </ul>
          <div className="filterBlock">
            <button>Filter</button>
          </div>
        </div>
            {/* <div className="filterBlockContent">
              <h4>Sort By Price</h4>
              <ul className="priceList">
            <li>All</li>
            <li>$0-$30</li>
            <li>$30-$60</li>
            <li>$60-$100</li>
            <li>$100+</li>
          </ul>
            </div> */}
        <div className="ProductsContainer">
          {filterProducts.map((x) => {
            return (
              <div className="product" key={x.id}>
                <img className="productsImg" src={x.images} alt="" />
                <div className="prodName">
                  <h4>{x.model}</h4>
                  <i onClick={()=>addBasket(x)} class="fa-regular fa-heart"></i>
                </div><p>${x.price}</p>
                
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
