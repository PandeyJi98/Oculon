import React from "react";
import style from "../RightMainScreen.module.css";
import search from "../../../assets/Search.svg";
import custom from "../../../assets/custom.svg";

const Dropdown = ({ setVarData, refKey }) => {
  return (
    <div ref={refKey} className={style.add_data_variable}>
      <div className={style.search_data_var}>
        <img src={search} alt="" />
        <input
          placeholder="Search for data"
          className={style.search_data_input}
          onChange={(e) => setVarData(e.target.value)}
        />
      </div>
      <div className={style.add_data_source}>
        <div className={style.add_data_source_container}>
          <div className={style.add_data_source_text}>No data sources</div>
          <div className={style.add_data_source_button}>
            <img src={custom} alt="custom" />
            <div>Add a data source</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
