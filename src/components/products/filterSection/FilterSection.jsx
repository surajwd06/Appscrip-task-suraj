import React, { useState } from "react";
import "./filterSection.css";
import FilterNav from "../filternav/FilterNav";

const FilterSection = ({showFilter}) => {
  const [visibleCategories, setVisibleCategories] = useState({
    idealFor: false,
    occasion: false,
    fabric: false,
    work: false,
    segment: false,
    suitable: false,
    materials: false,
    pattern: false,
  });

  const toggleCategory = (category) => {
    setVisibleCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };
 
  return (
    <>
      {showFilter ? (
        <div className="filter-section">
          <h2>Customizable</h2>
          <div className="filter-category">
            <h3 style={{display:"flex",justifyContent:"space-between"}} onClick={() => toggleCategory("idealFor")}>IDEAL FOR {visibleCategories.idealFor ? <i class="fa-solid fa-angle-up"></i>:<i class="fa-duotone fa-solid fa-angle-down"></i>}</h3>
            <label>All</label>

            {visibleCategories.idealFor && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" /> Unselect all
                </label>
                <label>
                  <input type="checkbox" /> Men
                </label>
                <label>
                  <input type="checkbox" /> Women
                </label>
                <label>
                  <input type="checkbox" /> Baby & Kids
                </label>
              </div>
            )}
          </div>
          <div className="filter-category">
            <h3 style={{display:"flex",justifyContent:"space-between"}} onClick={() => toggleCategory("occasion")}>OCCASION {visibleCategories.occasion ? <i class="fa-solid fa-angle-up"></i>:<i class="fa-duotone fa-solid fa-angle-down"></i>}</h3>
            <label>All</label>
            {visibleCategories.occasion && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" /> Work
                </label>
                <label>
                  <input type="checkbox" /> Rainy Season (1)
                </label>
                <label>
                  <input type="checkbox" /> Casual (3)
                </label>
                <label>
                  <input type="checkbox" /> Wedding (1)
                </label>
                <label>
                  <input type="checkbox" /> Party (10)
                </label>
              </div>
            )}
          </div>
          <div className="filter-category">
            <h3 style={{display:"flex",justifyContent:"space-between"}} onClick={() => toggleCategory("fabric")}>Fabric  {visibleCategories.fabric ? <i class="fa-solid fa-angle-up"></i>:<i class="fa-duotone fa-solid fa-angle-down"></i>}</h3>
            <label>All</label>
            {visibleCategories.fabric && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" /> Unselect All
                </label>
                <label>
                  <input type="checkbox" /> French Knot (2)
                </label>
                <label>
                  <input type="checkbox" /> Zardosi (2)
                </label>
                <label>
                  <input type="checkbox" /> Muslin (1)
                </label>
                <label>
                  <input type="checkbox" /> Embroidery (1)
                </label>
                <label>
                  <input type="checkbox" /> Satin Blend (1)
                </label>
              </div>
            )}
          </div>
          <div className="filter-category">
            <h3 style={{display:"flex",justifyContent:"space-between"}} onClick={() => toggleCategory("work")}>Work {visibleCategories.work ? <i class="fa-solid fa-angle-up"></i>:<i class="fa-duotone fa-solid fa-angle-down"></i>}</h3>
            <label>All</label>
            {visibleCategories.work && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" /> Unselect All
                </label>
                <label>
                  <input type="checkbox" /> French Knot (2)
                </label>
                <label>
                  <input type="checkbox" /> Zardosi (2)
                </label>
                <label>
                  <input type="checkbox" /> Muslin (1)
                </label>
                <label>
                  <input type="checkbox" /> Embroidery (1)
                </label>
                <label>
                  <input type="checkbox" /> Satin Blend (1)
                </label>
              </div>
            )}
          </div>
          <div className="filter-category">
            <h3 style={{display:"flex",justifyContent:"space-between"}} onClick={() => toggleCategory("segment")}>SEGMENT {visibleCategories.segment ? <i class="fa-solid fa-angle-up"></i>:<i class="fa-duotone fa-solid fa-angle-down"></i>}</h3>
            <label>All</label>
            {visibleCategories.segment && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" /> Unselect All
                </label>
                <label>
                  <input type="checkbox" /> French Knot (2)
                </label>
                <label>
                  <input type="checkbox" /> Zardosi (2)
                </label>
                <label>
                  <input type="checkbox" /> Muslin (1)
                </label>
                <label>
                  <input type="checkbox" /> Embroidery (1)
                </label>
                <label>
                  <input type="checkbox" /> Satin Blend (1)
                </label>
              </div>
            )}
          </div>
          <div className="filter-category">
            <h3 style={{display:"flex",justifyContent:"space-between"}} onClick={() => toggleCategory("suitable")}>SUITABLE FOR {visibleCategories.suitable ? <i class="fa-solid fa-angle-up"></i>:<i class="fa-duotone fa-solid fa-angle-down"></i>}</h3>
            <label>All</label>
            {visibleCategories.suitable && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" /> Unselect All
                </label>
                <label>
                  <input type="checkbox" /> French Knot (2)
                </label>
                <label>
                  <input type="checkbox" /> Zardosi (2)
                </label>
                <label>
                  <input type="checkbox" /> Muslin (1)
                </label>
                <label>
                  <input type="checkbox" /> Embroidery (1)
                </label>
                <label>
                  <input type="checkbox" /> Satin Blend (1)
                </label>
              </div>
            )}
          </div>
          <div className="filter-category">
            <h3 style={{display:"flex",justifyContent:"space-between"}} onClick={() => toggleCategory("materials")}>RAW METERIALS {visibleCategories.materials ? <i class="fa-solid fa-angle-up"></i>:<i class="fa-duotone fa-solid fa-angle-down"></i>}</h3>
            <label>All</label>
            {visibleCategories.materials && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" /> Unselect All
                </label>
                <label>
                  <input type="checkbox" /> French Knot (2)
                </label>
                <label>
                  <input type="checkbox" /> Zardosi (2)
                </label>
                <label>
                  <input type="checkbox" /> Muslin (1)
                </label>
                <label>
                  <input type="checkbox" /> Embroidery (1)
                </label>
                <label>
                  <input type="checkbox" /> Satin Blend (1)
                </label>
              </div>
            )}
          </div>
          <div className="filter-category">
            <h3 style={{display:"flex",justifyContent:"space-between"}} onClick={() => toggleCategory("pattern")}>PATTERN {visibleCategories.pattern ? <i class="fa-solid fa-angle-up"></i>:<i class="fa-duotone fa-solid fa-angle-down"></i>}</h3>
            <label>All</label>
            {visibleCategories.pattern && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" /> Unselect All
                </label>
                <label>
                  <input type="checkbox" /> French Knot (2)
                </label>
                <label>
                  <input type="checkbox" /> Zardosi (2)
                </label>
                <label>
                  <input type="checkbox" /> Muslin (1)
                </label>
                <label>
                  <input type="checkbox" /> Embroidery (1)
                </label>
                <label>
                  <input type="checkbox" /> Satin Blend (1)
                </label>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FilterSection;
