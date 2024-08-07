import React, { useState } from "react";
import "./navitem.css";

const FilterNav = ({ showFilter, showfilter, filterHighToLow,filterLowToHigh }) => {
  const [visibleCategories, setVisibleCategories] = useState({
    recommend: false,
  });

  const toggleCategory = (category) => {
    setVisibleCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <div className="bottom-nav">
      <main className="main">
        <div className="navitem_flex">
          <ul className="navitem">
            <li>ITEM</li>
            <li onClick={showfilter} className="filternavitem">
              {showFilter ? "Hide Filter" : "Show Filter"}
            </li>
          </ul>
          <div className="filter-category">
            <span onClick={() => toggleCategory("recommend")}>
              RECOMMENDED{" "}
              {visibleCategories.recommend ? (
                <i class="fa-solid fa-angle-up"></i>
              ) : (
                <i class="fa-solid fa-angle-down"></i>
              )}
            </span>
            {visibleCategories.recommend && (
              <div className="filter-option">
                <ul className="res_item">
                  <li>NEWEST FIRST</li>
                  <li>POPULAR</li>
                  <li onClick={filterHighToLow}>PRICE: HIGH TO LOW</li>
                  <li onClick={filterLowToHigh}>PRICE: LOW TO HIGH</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FilterNav;
