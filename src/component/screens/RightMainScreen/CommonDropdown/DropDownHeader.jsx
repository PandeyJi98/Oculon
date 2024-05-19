import React from 'react';
import styles from './CommonDropDown.module.css';
import {dropdown2,dropdown3,dropdown4, formatDropdown, dropdown1} from "./mockDataDropDown";
import calender from "../../../assets/calendar.svg";
import dollar from "../../../assets/dollar.svg";
import percentage from "../../../assets/percent.svg"
import checkCircle from "../../../assets/circleCheck.svg";

const DropdownHeader = ({ selectedIndex, setSelectedIndex, setDropdownItems }) => {
  return (
    <div className={`${styles.firstChild} ${styles.textCss} ${styles.bottomBorder} ${styles.spanContainerDropdownHeader}`}>
      <span
        className={`${styles.firstChildItem} ${selectedIndex === 0 ? styles.selected : ''}`}
        onClick={() => {
          setSelectedIndex(0);
          setDropdownItems(formatDropdown);
        }}
      >
        <img src={calender} alt="" />
      </span>
      <span
        className={`${styles.firstChildItem} ${selectedIndex === 1 ? styles.selected : ''}`}
        onClick={() => {
          setSelectedIndex(1);
          setDropdownItems(dropdown2);
        }}
      >
         <img src={dollar} alt="" />
      </span>
      <span
        className={`${styles.firstChildItem} ${selectedIndex === 2 ? styles.selected : ''}`}
        onClick={() => {
          setSelectedIndex(2);
          setDropdownItems(dropdown3);
        }}
      >
         <img src={percentage} alt="" />
      </span>
      <span
        className={`${styles.firstChildItem} ${selectedIndex === 3 ? styles.selected : ''}`}
        onClick={() => {
          setSelectedIndex(3);
          setDropdownItems(dropdown4);
        }}
      >
          <img src={calender} alt="" />
      </span>
      <span
        className={`${styles.firstChildItem} ${selectedIndex === 4 ? styles.selected : ''}`}
        onClick={() => {
          setSelectedIndex(4);
          setDropdownItems(dropdown1);
        }}
      >
          <img src={checkCircle} alt="" />
      </span>
    </div>
  );
};

export default DropdownHeader;