import React from "react";
import style from "./Dropdown.module.css"

const useDropdown = ({dropData}) => {
  console.log("dropData", dropData)
  const DropDown = () => {
    return (
      <div className={style.mainDropdown}>
        {dropData?.map((item, index) => 
          <div key={index}>{item}</div>
        )}
      </div>
    );
  };
  return DropDown;
};

export default useDropdown;
