import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  FormControl,
  InputGroup,
  Button,
  Dropdown,
} from "react-bootstrap";
import Pagination from "../Pagination/Pagination";
import Product from "./../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  //   const [displayProducts, setDisplayProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [upcoming, setUpcoming] = useState("");
  const [launchYear, setLaunchYear] = useState("");

  const [productPerPage] = useState(10);
  const [totalProduct, setTotalProduct] = useState(0);
  const size = 10;
  console.log("page", pageCount);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://api.spacexdata.com/v3/launches"
      );
      setProducts(response.data);
      setTotalProduct(response.data.length);
      setLoading(false);
    };
    // fetch(`https://api.spacexdata.com/v3/launches?page=${page}&&size=${size}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     // setDisplayProducts(data);
    //     setProducts(data);
    //     const count = products.length;
    //     console.log(count);
    //     const pageNumber = Math.ceil(count / size);
    //     setPageCount(pageNumber);
    //   });
    loadProducts();
  }, [page]);

  const indexOfLastPage = currentPage + productPerPage;
  const indexOfFirstPage = indexOfLastPage - productPerPage;
  const currentProducts = products.slice(indexOfFirstPage, indexOfLastPage);
  const paginate = (pagNum) => setCurrentPage(pagNum);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextPage = () => setCurrentPage(currentPage + 1);

  const showPagination = () => {
    return (
      <Pagination
        productPerPage={productPerPage}
        totalProduct={totalProduct}
        currentPage={currentPage}
        paginate={paginate}
        prevPage={prevPage}
        nextPage={nextPage}
      ></Pagination>
    );
  };

  console.log(products);

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchProduct = products.filter((product) =>
      product.rocket_name.toLowerCase().includes(searchText.toLowerCase())
    );
    // setDisplayProducts(matchProduct);
  };
  return (
    <Container>
      <div className="mt-5">
        <div className="search-field mb-4">
          <div className="mt-3">
            <span className="text-white me-4">Is Upcomming?</span>
            <select onChange={(e) => setUpcoming(e.target.value)}>
              <option value="Yes" selected>
                Yes
              </option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="mt-3">
            <span className="text-white me-4">Launch year?</span>
            <select onChange={(e) => setLaunchYear(e.target.value)}>
              <option value="Select" selected>
                2001 - 2005
              </option>
              <option value="">2006 - 2010</option>
              <option value="">2011 - 2015</option>
              <option value="">2016 - 2020</option>
              <option value="">1996 - 2000</option>
            </select>
          </div>
          {/* <input
            onChange={handleSearch}
            type="text"
            placeholder="Type here to search product"
          /> */}
          <div className="mt-3">
            <InputGroup className="mb-3 w-75">
              <FormControl
                placeholder="Search for rocket"
                //   aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={handleSearch}
                type="text"
              />
              <Button variant="outline-secondary" id="button-addon2">
                search
              </Button>
            </InputGroup>
          </div>
        </div>
        <div className="shop-container">
          <div className="product-container">
            {!loading
              ? currentProducts.map((product) => (
                  <Product
                    key={product.flight_number}
                    product={product}
                  ></Product>
                ))
              : "Loading..."}
          </div>
          <div>{showPagination()}</div>
          {/* <div className="pagination">
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
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default Products;
