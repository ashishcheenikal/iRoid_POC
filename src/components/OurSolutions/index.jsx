import React, { useState } from "react";
import ProductList from "./ProductList/ProductList";
import "./style.scss";

function OurSolutions() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const handleFilter = (event) => {
    setSelectedFilter(event.target.getAttribute('data-filter'));
  };

  return (
    <div className="ourSolutionsWrapper">
      <div className="ourSolutionsTitle">Our Solutions</div>
      <div className="ourSolutionsFilterWrapper">
        <ul>
          <li onClick={handleFilter} data-filter="All">
            All
          </li>
          <li onClick={handleFilter} data-filter="CGI">
            CGI
          </li>
          <li onClick={handleFilter} data-filter="Enhanced Brand Content">
            Enhanced Brand Content
          </li>
          <li onClick={handleFilter} data-filter="Product Photography">
            Product Photography
          </li>
          <li onClick={handleFilter} data-filter="Creative Services">
            Creative Services
          </li>
        </ul>
      </div>
      <div className="productList">
        <ProductList selectedFilter={selectedFilter}/>
      </div>
    </div>
  );
}

export default OurSolutions;
