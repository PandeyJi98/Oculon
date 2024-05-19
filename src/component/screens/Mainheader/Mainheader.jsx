import React, { useState } from "react";
import Select from "react-select";
import style from "./Mainheader.module.css";
import { FiLink } from "react-icons/fi";
import { LuBox } from "react-icons/lu";
import Check from "../../assets/Check.png";
import {
  MdOutlineStackedBarChart,
  MdOutlineTableChart,
  MdArrowRight,
} from "react-icons/md";
import {
  IoSettingsSharp,
  IoChatbubblesSharp,
  IoAddCircleOutline,
} from "react-icons/io5";
import { IoIosTimer, IoMdPersonAdd } from "react-icons/io";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { PiArrowBendDoubleUpRight } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

const Mainheader = () => {
  const [chartTableIcon, setChartTableIcon] = useState("chart");
  const [modelName, setModelName] = useState("");
  const [checkBorder, setCheckBorder] = useState("");
  const [modelDropdown, setModelDropdown] = useState(false);
  const [linkModelEdit, setLinkModelEdit] = useState(false);
  const [linkModelNew, setLinkModelNew] = useState(false);
  const [modelData, setModelData] = useState(["New Model", "Old Model"]);
  const [chartData, setChartData] = useState(["New Chart", "Old Chart"]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionChart, setSelectedOptionChart] = useState([]);

  const [borderStyle, setBorderStyle] = useState("1px solid #fff");
  // Function to handle text change
  const handleTextChange = (event) => {
    setModelName(event.target.innerText);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      display: "flex",
      // width: "41.5rem",
      width: "100%",
      height: "1.5rem",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "8px",
      border: state.isFocused ? "none" : "none", // Remove border on focus
      boxShadow: state.isFocused ? "none" : provided.boxShadow, // Remove outline on focus
      outline: state.isFocused ? "none" : provided.outline, // Remove outline on focus
      overflowX: "auto", // Enable horizontal scrolling
    }),
    multiValue: (provided) => ({
      ...provided,
      whiteSpace: "nowrap", // Prevent wrapping of selected options
      flexWrap: "nowrap", // Force horizontal layout
    }),
    menu: (provided) => ({
      ...provided,
      width: "100%", // Set a maximum width for the dropdown menu if needed
      maxHeight: "20rem", // Set the maximum height for the dropdown menu
      overflowY: "auto",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? null : provided.backgroundColor,
      color: state.isSelected ? "black" : provided.color,
    }),
  };

  const options = modelData.map((item) => ({
    value: item,
    label: item,
  }));
  const optionsChart = chartData.map((item) => ({
    value: item,
    label: item,
  }));

  const CustomOption = ({
    data,
    isSelected,
    isFocused,
    innerRef,
    innerProps,
  }) => (
    <div
      ref={innerRef}
      {...innerProps}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "8px 12px", // Adjust padding
        cursor: "pointer", // Show pointer cursor on hover
      }}
    >
      <div>{data.label}</div>
      {isSelected && (
        <img
          src={Check}
          alt="Check"
          style={{ marginLeft: "8px", width: "16px", height: "16px" }}
        />
      )}
    </div>
  );
  const components = {
    Option: CustomOption,
  };

  const handleChange = (selectedOption) => {
    if (selectedOption.some((option) => option.value === "select_all")) {
      const allOptionsExceptSelectAll = options.filter(
        (option) => option.value !== "select_all"
      );
      setSelectedOptions(allOptionsExceptSelectAll);
    } else {
      setSelectedOptions(selectedOption);
    }
  };
  const handleChangeChart = (selectedOptionChart) => {
    if (selectedOptionChart.some((option) => option.value === "select_all")) {
      const allOptionsExceptSelectAll = options.filter(
        (option) => option.value !== "select_all"
      );
      setSelectedOptionChart(allOptionsExceptSelectAll);
    } else {
      setSelectedOptionChart(selectedOptionChart);
    }
  };

  const optionsWithSelectAll = [
    { value: "select_all", label: "Select All" },
    ...options,
  ];
  const optionsWithSelectAllChart = [
    { value: "select_all", label: "Select All" },
    ...optionsChart,
  ];

  return (
    <div className={style.mainContainer}>
      <div className={style.container_view1}>
        <div className={style.header_logo}>Header Logo</div>
        <div className={style.header_modal}>
          {"/ "}
          <div className={style.model_name_link}>
            <LuBox style={{ color: "#797986" }} />
            <div
              style={{
                border: borderStyle,
              }}
              className={style.editable_modelName}
              contentEditable="true"
              onBlur={() => {
                setCheckBorder("");
                setBorderStyle("1px solid #fff");
              }}
              onMouseOver={() => setBorderStyle("1px solid #ebebee")}
              onFocus={() => {
                setCheckBorder("onFocused");
                setBorderStyle("1px solid #ebebee");
              }}
              onMouseLeave={() =>
                setBorderStyle(
                  checkBorder == "onFocused"
                    ? "1px solid #ebebee"
                    : "1px solid #fff"
                )
              }
              onInput={handleTextChange} // Use onInput to handle text changes while typing
            >
              Model Name
            </div>
          </div>

          <div
            onClick={() => setModelDropdown(!modelDropdown)}
            className={style.model_link_icon}
          >
            <FiLink />
          </div>
          {modelDropdown && (
            <div className={style.model_link_dropdown}>
              <div className={style.drop_container}>
                <div className={style.linked_model}>Linked Models</div>
                <HiMiniQuestionMarkCircle style={{ color: "#797986" }} />
              </div>
              <div className={style.model_name_arrow}>
                <div className="flex flex-between">
                  <div
                    onClick={() => setLinkModelEdit(!linkModelEdit)}
                    className="flex width15 pointer"
                  >
                    <MdArrowRight
                      style={{
                        fontSize: "17px",
                        transform: linkModelEdit ? "rotate(90deg)" : "none",
                      }}
                    />
                    <div>New Model</div>
                  </div>
                  <div className={style.model_link_remove}>
                    <div>
                      <PiArrowBendDoubleUpRight style={{ color: "blue" }} />
                    </div>
                    <div>
                      <RxCross2 />
                    </div>
                  </div>
                </div>
                {linkModelEdit && (
                  <React.Fragment>
                    <div className={style.import_var_main}>
                      <div className={style.main_var_text}>
                        Imported variables:
                      </div>
                      <Select
                        className={style.main_select}
                        value={selectedOptions}
                        onChange={handleChange}
                        options={optionsWithSelectAll}
                        isMulti
                        isSearchable
                        placeholder="Select variables to import"
                        styles={customStyles}
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        maxMenuHeight={"200px"}
                        components={{
                          DropdownIndicator: null,
                          ...components,
                        }}
                      />
                    </div>
                    <div className={style.import_var_main}>
                      <div className={style.main_var_text}>
                        Imported charts:
                      </div>
                      <Select
                        className={style.main_select}
                        value={selectedOptionChart}
                        onChange={handleChangeChart}
                        options={optionsWithSelectAllChart}
                        isMulti
                        isSearchable
                        placeholder="Select visuals to import"
                        styles={customStyles}
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        maxMenuHeight={"200px"}
                        components={{
                          DropdownIndicator: null,
                          ...components,
                        }}
                      />
                    </div>
                  </React.Fragment>
                )}
              </div>
              <div className={style.model_drop_link}>
                <div className={style.model_link_name}>
                  <IoAddCircleOutline
                    onClick={() => setLinkModelNew(!linkModelNew)}
                    style={{ fontSize: "14px" }}
                  />
                  <div>New Model</div>
                  {linkModelEdit && <div></div>}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={style.container_view2}>
        <div
          onClick={() => setChartTableIcon("chart")}
          className={
            chartTableIcon == "chart"
              ? style.view2_table_icon
              : style.view2_icon
          }
        >
          <MdOutlineTableChart />
        </div>
        <div
          onClick={() => setChartTableIcon("table")}
          className={
            chartTableIcon == "table"
              ? style.view2_table_icon
              : style.view2_icon
          }
        >
          <MdOutlineStackedBarChart />
        </div>
      </div>
      <div className={style.container_view3}>
        <div className={style.view3_icon1}>
          <IoMdPersonAdd />
        </div>
        <div className={style.view3_icon2}>
          <IoIosTimer />
        </div>
        <div className={style.divider_view3}></div>
        <div className={style.view3_icon3}>
          <IoChatbubblesSharp />
        </div>
        <div className={style.view3_icon4}>
          <IoSettingsSharp />
        </div>
      </div>
    </div>
  );
};

export default Mainheader;
