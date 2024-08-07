import React, { useState } from "react";
import "./productlist.css";

const ProductList = ({ showFilter, products, loading, error }) => {
  const [expanded, setExpanded] = useState({});
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }
  const toggleDescription = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };
  return (
    <div className={showFilter ? "product-list" : "product-list2"}>
      <h2>Product Items</h2>
      <div className="product-grid">
        {products &&
          products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.title} width={1000} />
              <div className="product-info">
                <div className="product-info-detail">
                  <h3>
                    {" "}
                    {expanded[product.title]
                      ? product.title
                      : truncateText(product.title, 10)}
                    <span
                      className="read-more"
                      onClick={() => toggleDescription(product.title)}
                    >
                      {expanded[product.title] ? " Read Less" : " Read More"}
                    </span>
                  </h3>
                </div>

                <div className="product-info-detail" >
                  <p>
                    {" "}
                    {expanded[product.id]
                      ? product.description
                      : truncateText(product.description, 20)}
                    <span
                      className="read-more"
                      onClick={() => toggleDescription(product.id)}
                    >
                      {expanded[product.id] ? " Read Less" : " Read More"}
                    </span>
                  </p>
                </div>
              <span className="price">${product.price.toFixed(2)}</span>
              </div>

            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
