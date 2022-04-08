import React from "react";
import { Button } from "react-bootstrap";

const Pagination = (props) => {
  const {
    productPerPage,
    totalProduct,
    currentPage,
    paginate,
    prevPage,
    nextPage,
  } = props;
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav className="mt-5">
      <div className="pagination justify-content-center">
        {currentPage !== 1 && (
          <li>
            <Button
              style={{ cursor: "pointer" }}
              type="primary"
              onClick={() => prevPage()}
            >
              Previous
            </Button>
          </li>
        )}
        {pageNumber.map((num) => (
          <li className="page-item " key={num}>
            <a
              onClick={() => paginate(num)}
              className="page"
              style={{
                cursor: "pointer",
                background: `${currentPage === num ? "#ffffff" : ""}`,
              }}
            >
              {num}
            </a>
          </li>
        ))}
        {pageNumber.length !== currentPage && (
          <li>
            <Button
              style={{ cursor: "pointer" }}
              type="primary"
              onClick={() => nextPage()}
              className="ms-2"
            >
              Next
            </Button>
          </li>
        )}
      </div>
    </nav>
  );
};

export default Pagination;
