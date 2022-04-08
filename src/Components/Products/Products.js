import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Product from "./../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 10;

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/launches?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setDisplayProducts(data);
        setProducts(data);
        // const count = data.count;
        // const pageNumber = Math.ceil(count / size);
        // setPageCount(pageNumber);
      });
  }, [page]);

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchProduct = products.filter((product) =>
      product.rocket_name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchProduct);
  };
  return (
    <Container>
      <div>
        <div className="search-field">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Type here to search product"
          />
        </div>
        <div className="shop-container">
          <div className="product-container">
            {products
              .map((product) => (
                <Product
                  key={product.flight_number}
                  product={product}
                ></Product>
              ))
              .slice(0, 10)}
            <div className="pagination">
              {[...Array(pageCount).keys()].map((number) => (
                <button
                  // click korle button er color change hbe
                  className={number === page ? "selected" : ""}
                  key={number}
                  onClick={() => setPage(number)}
                >
                  {number + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Products;
