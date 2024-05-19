import React, { useState } from "react";
import styles from "./CommonDropDown.module.css";
import {dropdown1} from "./mockDataDropDown";
import DropdownHeader from "./DropDownHeader";

const CommonDropDown=({
    initialValue,
    dropdownOptions,
    onOptionClick,
    renderOption,
    renderHeader,
    width,
    marginTop,
  })=>{
    const [selectedValue, setSelectedValue] = useState(initialValue);
    const [dropdownItems, setDropdownItems] = useState(dropdownOptions);
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    const handleOptionClick = (option) => {
      setSelectedValue(option.title);
      onOptionClick(option);
      if (option.title == "Delete") {
        setDropdownItems(dropdown1);
      }
    };
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
      // Implement filtering logic based on searchQuery if needed
    };
    return(
        <>
          <div className={styles.plusIconDiv}>
        {/* {showDropDown && ( */}
          <div className={styles.clickDropdown} style={{ width: width, marginTop:marginTop }}>
              {renderHeader && <DropdownHeader
               selectedIndex={selectedIndex}
               setSelectedIndex={(index) => setSelectedIndex(index)} 
               setDropdownItems={setDropdownItems} />}
            {dropdownItems.map((item, index) => (
              item.isSearch ? (
                <div key={index} className={styles.searchItem} style={{ borderBottom: item.borderBottom }}>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search Models"
                    className={styles.searchInput}
                  />
                </div>
              ) : 
               item.isHeading ? (
                <div key={index} className={styles.dropDownInnerHeading}>
                  {item.title}
                </div>
              ) : (
              <div
                className={styles.plusIconFirstChildOuter}
                style={{ borderBottom: item.borderBottom }}
              >
            
                <div
                  key={index}
                  className={`${styles.plusIconFirstChild} ${styles.textCss}`}
                  onClick={() => {
                    handleOptionClick(item);
                  }}
                >
                  <span className={styles.dropItemCss}>
                    <span className={styles.iconWithTitle}>
                      <img src={renderOption(item, "icon1")} />
                      <span>{renderOption(item, "title")}</span>
                    </span>
                    <img src={renderOption(item, "icon2")} />
                  </span>
                </div>
                <div className={styles.subTitleText}>
                  {renderOption(item, "subTitle")}
                </div>
              </div>)
            ))}
          </div>
      </div>
        </>
    )
};

export default CommonDropDown;