import React, { useEffect, useState } from "react";
import "./productList.scss";
import { ProductData } from "../../../utils/ProductList";

function ProductList({ selectedFilter }) {
  const [displayArray, setdisplayArray] = useState([]);
  useEffect(() => {
    let sortedData;
    if (selectedFilter === "All") {
      sortedData = ProductData;
      setdisplayArray(sortedData);
    } else {
      sortedData = ProductData.filter((product) =>
        product.categories.includes(selectedFilter)
      );
      setdisplayArray(sortedData);
    }
  }, [selectedFilter]);

  return (
    <div className="cardWrapper">
      {displayArray.map((data, index) => {
        return (
          <div className="productCard" key={data.id}>
            <div className="cardImg">
              <img src={data.imgSrc} alt="Sorted Array" />
            </div>
            <div className="cardDataWrapper">
              <div className="cardTitle">{data.title}</div>
              <div className="cardCategories">
                {data.categories.map((item, index) => (
                  <span key={index}>
                    {item}
                    {index < data.categories.length - 1 && " - "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
