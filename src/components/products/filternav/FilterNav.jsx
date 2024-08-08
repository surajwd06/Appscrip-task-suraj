import React, { useState } from "react";
import "./navitem.css";

const FilterNav = ({ showFilter, showfilter, filterHighToLow,filterLowToHigh,showFilterItem }) => {
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
        <div className="navitem_flex">
        <div className="filter-category">
        <ul className="navitem" >
        {
          showFilterItem ?<li onClick={showfilter} className="filternavitem">
              {showFilter ? "> Hide Filter " : "< Show Filter"}
            </li>:
            <ul onClick={showfilter}>
            <li  className={showFilterItem ? "filternavitem":"navitem_flexs"}>
              FILTER
            </li>
            </ul>
           
        }
            
          </ul>
        </div>
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
    </div>
  );
};

export default FilterNav;
