import React, { useRef, useState, useEffect } from "react";
import style from "./RightMainScreen.module.css";
import { useSelector, useDispatch } from "react-redux";
import material from "../../assets/material-symbols-light_arrow-left.svg";
import preferences from "../../assets/preferences.svg";
import calendar from "../../assets/calendar.svg";
import branches from "../../assets/branches.svg";
import search from "../../assets/Search.svg";
import om from "../../assets/om.png";
import schedule from "../../assets/schedule.svg";
import vidfull from "../../assets/vid-full-screen-off.svg";
import custom from "../../assets/custom.svg";
import ellipse1 from "../../assets/Ellipse 120 (1).svg";
import ellipse from "../../assets/Ellipse 120.svg";
import question from "../../assets/question-circle.svg";
import custom_blue from "../../assets/custom blue.svg";
import { varData } from "../../constants/Data";
import { Tooltip } from "react-tooltip";
import { addSectionData } from "../../redux/slices/spreadSheetSlice";
import Dropdown from "./Dropdown/Dropdown";
import { EditOutlined } from "@ant-design/icons";
import CommonDropDown from "./CommonDropdown/CommonDropDown";
import {secondMainDropdown, formatDropdown, copyDropdown} from "./CommonDropdown/mockDataDropDown";
import DropdownHeader from "./CommonDropdown/DropDownHeader";
import edit from "../../assets/edit.svg";
import plusCopy from "../../assets/plusCopy.svg";

const RightMainScreen = () => {
  // Refs for both containers
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const [showSection, setShowSection] = useState([]);
  const [showGroup, setShowGroup] = useState([]);
  const [showCreateVar, setShowCreateVar] = useState(null);
  const [variableValue, setVariableValue] = useState("");
  const [varDataValue, setVarDataValue] = useState("");
  const [showFormulaButton, setShowFormulaButton] = useState(true);
  const [showDataButton, setShowDataButton] = useState(true);
  const [headerData, setHeaderData] = useState("");
  const [dataFormula, setDataFormula] = useState("");
  const [formulaInputShow, setFormulaInputShow] = useState({
    mainSection: null,
    sectionVarIndex: null,
  });
  const [formulaInputShowInner, setFormulaInputShowInner] = useState({
    sectionIndex: null,
    groupIndex: null,
    groupVarIndex: null,
  });
  const [showAddDataDropdown, setShowAddDataDropdown] = useState(false);
  const [varDataShow, setVarDataShow] = useState({
    mainSection: null,
    sectionVarIndex: null,
  });
  const [varDataShowInner, setVarDataShowInner] = useState({
    sectionIndex: null,
    groupIndex: null,
    groupVarIndex: null,
  });
  const { isSidebarVisible, section, dateArray } = useSelector(
    (state) => state.spreadSheet
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowAddDataDropdown(false);
        setShowCreateVar(false);
        setVarDataShow({
          mainSection: null,
          sectionVarIndex: null,
        });
        setVarDataShowInner({
          sectionIndex: null,
          groupIndex: null,
          groupVarIndex: null,
        });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleScroll = () => {
    const parentScrollLeft = container1Ref.current.scrollLeft;
    document
      .querySelectorAll(`.${style.custom_table_inner_wrapper}`)
      .forEach((wrapper) => {
        wrapper.scrollLeft = parentScrollLeft;
      });
  };

  const handleScrollChild = (e) => {
    const parentScrollLeft = e.target.scrollLeft;
    container1Ref.current.scrollLeft = parentScrollLeft;
  };

  // Function to toggle section visibility
  const toggleSection = (index) => {
    setShowSection((prevShowSection) => {
      if (prevShowSection.includes(index)) {
        return prevShowSection.filter((value) => value !== index);
      } else {
        return [...prevShowSection, index];
      }
    });
  };

  // Function to toggle group visibility
  const toggleGroup = (sectionIndex, groupIndex) => {
    setShowGroup((prevShowGroup) => ({
      ...prevShowGroup,
      [sectionIndex]: prevShowGroup[sectionIndex]
        ? prevShowGroup[sectionIndex].includes(groupIndex)
          ? prevShowGroup[sectionIndex].filter((value) => value !== groupIndex)
          : [...prevShowGroup[sectionIndex], groupIndex]
        : [groupIndex],
    }));
  };
  //dropdown on click on edit
  const [varDataShowCopy, setVarDataShowCopy] = useState({
    mainSection: null,
    sectionVarIndex: null,
  });
  const [varDataShowEdit, setVarDataShowEdit] = useState({
    mainSection: null,
    sectionVarIndex: null,
  });
  const [varDataShowFormula, setVarDataShowFormula] = useState({
    mainSection: null,
    sectionVarIndex: null,
  });
  const [varDataEditDropdown, setVarDataEditDropdown] = useState({
    sectionIndex: null,
    groupIndex: null,
    groupVarIndex: null,
  });
  const [varDataFormulaDropdown, setVarDataFormulaDropdown] = useState({
    sectionIndex: null,
    groupIndex: null,
    groupVarIndex: null,
  });
  const [varDataCopyDropdown, setVarDataCopyDropdown] = useState({
    sectionIndex: null,
    groupIndex: null,
    groupVarIndex: null,
  });
  const [showCopyDropdownInner, setShowCopyDropdownInner] = useState(false);
  const [showEditDropdown, setShowEditDropdown] = useState(false);
  const [showFormluaDropdown, setShowFormluaDropdown] = useState(false);

  const [showFormluaDropdownOuter, setShowFormluaDropdownOuter] =
    useState(false);

  const [selectedOptionTwo, setSelectedOptionTwo] = useState("");
  const handleOptionClickTwo = (option) => {
    setSelectedOptionTwo(option.title);
    if (option.hasDropDown == false) {
      setShowEditDropdown(false);
    }
  };
  const [selectedOptionEditOuter, setSelectedOptionEditOuter] = useState("");
  const [showEditDropdownOuter, setShowEditDropdownOuter] = useState(false);
  const handleOptionClickEditOuter = (option) => {
    setSelectedOptionEditOuter(option.title);
    if (option.hasDropDown == false) {
      setShowEditDropdownOuter(false);
    }
  };

  const [selectedOptionFormula, setSelectedOptionFormula] = useState("");
  const handleOptionClick = (option) => {
    setSelectedOptionFormula(option.title);
    if (option.hasDropDown == false) {
      setShowFormluaDropdown(false);
    }
  };
  const [selectedOptionCopyDropdown, setSelectedOptionCopyDropdown] = useState("");
  const [showCopyDropdown, setShowCopyDropdown] = useState(false);

  const handleOptionClickCopy = (option) => {
    setSelectedOptionCopyDropdown(option.title);
    if(option.hasDropDown==false){
      setShowCopyDropdown(false)
    }
  };
  const [selectedOptionCopyDropdownInner, setSelectedOptionCopyDropdownInner] = useState("");
    const handleOptionClickCopyInner = (option) => {
    setSelectedOptionCopyDropdownInner(option.title);
    if(option.hasDropDown==false){
      setShowCopyDropdownInner(false)
    }
  };

  const [selectedOptionFormulaOuter, setSelectedOptionFormulaOuter] = useState("");
  
  const handleOptionClickFormulaOuter = (option) => {
    setSelectedOptionFormulaOuter(option.title);
    if (option.hasDropDown == false) {
      setShowFormluaDropdownOuter(false);
    }
  };

  const renderOption = (option, key) => {
    return option[key];
  };
  const renderOptionOne = (option, key) => {
    return option[key];
  };

  return (
    <div className={isSidebarVisible ? style.rightDiv : style.rightDivIncrease}>
      {/* --------- first header---------- */}
      <div className={style.main_screen_container}>
        <div className={style.search_filter}>
          <div className={style.scenario_views}>
            <img src={preferences} alt="preferences" />
            <div>Views</div>
            <img src={material} alt="material" />
          </div>
          <div className={style.scenario_views}>
            <img src={branches} alt="branches" />
            <div>Scenarios</div>
            <img src={material} alt="material" />
          </div>
          <div className={style.search_main}>
            <img height={20} src={search} alt="search" />
            <input
              className={style.text_style}
              placeholder="Search variables"
            />
          </div>
        </div>
        <div className={style.date_filter}>
          <img height={20} src={calendar} alt="calendar" />
          <div className={style.text_style}>Jan 2024 - Apr 2024</div>
        </div>
      </div>
      {/* --------- second header---------- */}
      <div className={style.main_screen_header}>
        <div className={style.left_container}>
          <div className={style.left_right_container}>
            <div className={style.left_container1}>
              <img src={schedule} alt="schedule" />
              <img src={vidfull} alt="ovidfullm" />
              <img src={om} alt="om" />
            </div>
            <div className={style.left_container2}>
              <div
                onClick={() => setShowAddDataDropdown(!showAddDataDropdown)}
                className="flex flex-v-center pointer"
              >
                <img src={custom} alt="custom" />
                <div className={style.text_style}>Add Data</div>
              </div>
              {showAddDataDropdown && (
                <div ref={ref} className={style.add_data_dropdown}>
                  <div className={style.search_header_data}>
                    <img src={search} alt="search" />
                    <input
                      placeholder="Search..."
                      onChange={(e) => setHeaderData(e.target.value)}
                    />
                  </div>
                  <div className={style.new_data_add}>
                    <img src={custom} alt="custom" />
                    <div>New data source</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={style.center_container}>
            <div className={style.center_container_text}>Trend</div>
            <div className={style.center_container_text}>Data</div>
            <div className={style.center_container_text}>Formula</div>
          </div>
        </div>
        <div
          className={style.right_container}
          ref={container1Ref}
          onScroll={handleScroll}
        >
          {dateArray?.map((item) => {
            return (
              <div className={style.date_col}>
                <div className={style.text_style}>{item}</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* --------- main page-------------- */}
      <div className={style.table_responsive}>
        <table className={style.custom_table}>
          <tbody>
            {/* --------Mian Section-------- */}
            {section?.map((item, index) => {
              return (
                <React.Fragment>
                  <tr
                    className={`${style.add_section} flex flex-col`}
                    key={index}
                    onClick={() => {
                      toggleSection(index);
                    }}
                  >
                    <td className="flex flex-v-center">
                      <img
                        src={material}
                        alt="material"
                        style={{
                          transform: !showSection.includes(index)
                            ? "rotate(-90deg)"
                            : "",
                        }}
                      />
                      <div
                        style={{
                          background:
                            item.sectionName == "Inputs"
                              ? "var(--Blue-100, #ebf4ff"
                              : item.sectionName == "Calculations"
                              ? "#ABF5D1"
                              : "var(--Neutral-200, #E9ECEF)",
                        }}
                        className={style.sectionName}
                      >
                        {(item.sectionName == "Inputs" ||
                          item.sectionName == "Calculations") && (
                          <img
                            src={
                              item.sectionName == "Inputs"
                                ? ellipse
                                : item.sectionName == "Calculations"
                                ? ellipse1
                                : ""
                            }
                            alt="question"
                          />
                        )}
                        {item.sectionName}
                        {item.sectionName == "Inputs" && (
                          <img src={question} alt="question" />
                        )}
                      </div>
                      <div
                        onClick={(event) => {
                          event.stopPropagation();
                          dispatch(addSectionData());
                        }}
                        className={style.addSection}
                      >
                        <img src={custom} alt="custom" />
                      </div>
                    </td>
                  </tr>
                  {/* -------- Section's Froup / Main Group -------- */}
                  <div>
                    {showSection.includes(index) && (
                      <React.Fragment>
                        {item.group.length > 0 && (
                          <table className={style.custom_table}>
                            <tbody>
                              {item.group.map((groupVar, groupVarKey) => {
                                return (
                                  <React.Fragment>
                                    <tr
                                      className="flex flex-col"
                                      key={groupVarKey}
                                      onClick={() => {
                                        toggleGroup(index, groupVarKey);
                                      }}
                                    >
                                      <td>
                                        <img
                                          src={material}
                                          alt="material"
                                          style={{
                                            transform:
                                              !showGroup[index] ||
                                              !showGroup[index].includes(
                                                groupVarKey
                                              )
                                                ? "rotate(-90deg)"
                                                : "",
                                          }}
                                        />
                                        {groupVar.groupName}
                                      </td>
                                    </tr>
                                    {/* -------- Main Group variable -------- */}
                                    <div>
                                      {showGroup[index] &&
                                        showGroup[index].includes(
                                          groupVarKey
                                        ) && (
                                          <table
                                            className={
                                              style.custom_table_group_var
                                            }
                                          >
                                            <tbody>
                                              {groupVar.data.map(
                                                (
                                                  groupVariable,
                                                  groupVariableIndex
                                                ) => {
                                                  return (
                                                    <tr
                                                      key={groupVariableIndex}
                                                    >
                                                      <td
                                                        style={{
                                                          width: "23vw",
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            display: "flex",
                                                            justifyContent:
                                                              "space-between",
                                                          }}
                                                        >
                                                          <span>
                                                            {
                                                              groupVariable.column1
                                                            }
                                                          </span>
                                                          <div>
                                                            {showEditDropdown &&
                                                             varDataEditDropdown.sectionIndex===index &&
                                                            varDataEditDropdown.groupIndex===groupVarKey &&
                                                            varDataEditDropdown.groupVarIndex===groupVariableIndex&& <CommonDropDown
                                                                initialValue=""
                                                                dropdownOptions={formatDropdown}
                                                                onOptionClick={handleOptionClickTwo}
                                                                renderOption={renderOption}
                                                                width="17vw"
                                                                renderHeader={DropdownHeader}
                                                                marginTop="34px"
                                                              />}
                                                              {
                                                                showCopyDropdownInner &&
                                                                varDataCopyDropdown.sectionIndex===index &&
                                                                varDataCopyDropdown.groupIndex===groupVarKey &&
                                                                varDataCopyDropdown.groupVarIndex===groupVariableIndex &&
                                                                <CommonDropDown
                                                                initialValue=""
                                                              dropdownOptions={copyDropdown}
                                                             onOptionClick={handleOptionClickCopyInner}
                                                             renderOption={renderOptionOne}
                                                            width="20vw"
                                                            marginTop="50%"
                                                           />
                                                              }

                                                              <span style={{ cursor: "pointer" }}
                                                              onClick={()=>{
                                                                setVarDataCopyDropdown({
                                                                  sectionIndex: index,
                                                                  groupIndex: groupVarKey,
                                                                  groupVarIndex: groupVariableIndex,
                                                                })
                                                                setShowCopyDropdownInner((prev)=> !prev)
                                                                }}
                                                              >
                                                                <img src={plusCopy} alt="" />
                                                              </span>
                                                      <span style={{ cursor: "pointer" }} onClick={()=>{
                                                        setVarDataEditDropdown({
                                                          sectionIndex: index,
                                                          groupIndex: groupVarKey,
                                                          groupVarIndex: groupVariableIndex,
                                                        })
                                                        setShowEditDropdown((prev)=> !prev)
                                                        }}>
                                                        <img src={edit} alt="edit" className={style.editImage} />
                                                      </span>
                                                    </div>
                                                      </span>
                                                      </td>
                                                      {/* <td
                                                        style={{ width: "5vw" }}
                                                      >
                                                        {groupVariable.column2}
                                                      </td> */}
                                                      <td
                                                        style={{
                                                          width: "6vw",
                                                          position: "relative",
                                                        }}
                                                      >
                                                        <div
                                                          onClick={() =>
                                                            setVarDataShowInner(
                                                              {
                                                                sectionIndex:
                                                                  index,
                                                                groupIndex:
                                                                  groupVarKey,
                                                                groupVarIndex:
                                                                  groupVariableIndex,
                                                              }
                                                            )
                                                          }
                                                          className={
                                                            style.add_data
                                                          }
                                                        >
                                                          {
                                                            groupVariable.column3
                                                          }
                                                        </div>
                                                        {varDataShowInner.sectionIndex ===
                                                          index &&
                                                          varDataShowInner.groupIndex ===
                                                            groupVarKey &&
                                                          varDataShowInner.groupVarIndex ===
                                                            groupVariableIndex && (
                                                            <Dropdown
                                                              setVarData={
                                                                setVarDataValue
                                                              }
                                                              refKey={ref}
                                                            />
                                                          )}
                                                      </td>
                                                      <td
                                                        style={{
                                                          width: "10.5vw",
                                                        }}
                                                      >
                                                        <div
                                                          onClick={() => {
                                                            setVarDataFormulaDropdown(
                                                              {
                                                                sectionIndex:
                                                                  index,
                                                                groupIndex:
                                                                  groupVarKey,
                                                                groupVarIndex:
                                                                  groupVariableIndex,
                                                              }
                                                            );
                                                            setShowFormluaDropdown(
                                                              (prev) => !prev
                                                            );
                                                          }}
                                                          className={
                                                            style.add_data
                                                          }
                                                        >
                                                          {showFormluaDropdown &&
                                                            varDataFormulaDropdown.sectionIndex ===
                                                              index &&
                                                            varDataFormulaDropdown.groupIndex ===
                                                              groupVarKey &&
                                                            varDataFormulaDropdown.groupVarIndex ===
                                                              groupVariableIndex && (
                                                              <CommonDropDown
                                                                initialValue=""
                                                                dropdownOptions={
                                                                  secondMainDropdown
                                                                }
                                                                onOptionClick={
                                                                  handleOptionClick
                                                                }
                                                                renderOption={
                                                                  renderOptionOne
                                                                }
                                                                width="29vw"
                                                                marginTop="24%"
                                                              />
                                                            )}
                                                          <span>
                                                            {
                                                              groupVariable.column4
                                                            }
                                                          </span>
                                                        </div>
                                                      </td>
                                                      <td>
                                                        <div
                                                          ref={container2Ref}
                                                          onScroll={
                                                            handleScrollChild
                                                          }
                                                          className={
                                                            style.custom_table_inner_wrapper
                                                          }
                                                        >
                                                          <table
                                                            className={
                                                              style.custom_table_inner
                                                            }
                                                          >
                                                            <tr>
                                                              {groupVariable.column5.map(
                                                                (
                                                                  subItem,
                                                                  subIndex
                                                                ) => (
                                                                  <td
                                                                    key={
                                                                      subIndex
                                                                    }
                                                                  >
                                                                    {subItem}
                                                                  </td>
                                                                )
                                                              )}
                                                            </tr>
                                                          </table>
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  );
                                                }
                                              )}
                                            </tbody>
                                          </table>
                                        )}
                                    </div>
                                  </React.Fragment>
                                );
                              })}
                            </tbody>
                          </table>
                        )}
                        {/* -------- Main Section Variables -------- */}
                        <table className={style.custom_table_group_var}>
                          <tbody>
                            {item.data.map((sectionVar, sectionVarIndex) => {
                              return (
                                <tr key={sectionVarIndex}>
                                  <td style={{ width: "23vw" }}>
                                  <span style={{display:"flex", justifyContent:"space-between"}}>
                                    <span>
                                  {sectionVar.column1}
                                  </span>
                                  <div>
                                  <span style={{ cursor: "pointer" }} 
                                  onClick={()=>{
                                    setVarDataShowCopy({
                                      mainSection: index,
                                      sectionVarIndex: sectionVarIndex,
                                    })
                                    setShowCopyDropdown((prev)=> (!prev))
                                  }}>
                                     <img src={plusCopy} alt="" />
                                      </span>
                                  <span style={{ cursor: "pointer" }}
                                   onClick={() =>{
                                    setVarDataShowEdit({
                                      mainSection: index,
                                      sectionVarIndex: sectionVarIndex,
                                    })
                                    setShowEditDropdownOuter((prev)=> !prev)
                                  }
                                  }
                                  >
                                    <img src={edit} alt="edit" className={style.editImage} />
                                  </span>
                                  </div>
                                    </span>
                                    {showEditDropdownOuter &&
                                                             varDataShowEdit.mainSection===index &&
                                                             varDataShowEdit.sectionVarIndex===sectionVarIndex &&
                                                             <CommonDropDown
                                                                initialValue=""
                                                                dropdownOptions={formatDropdown}
                                                                onOptionClick={handleOptionClickEditOuter}
                                                                renderOption={renderOption}
                                                                width="17vw"
                                                                renderHeader={DropdownHeader}
                                                                marginTop="6px"
                                                              />}
                                                               {showCopyDropdown &&
                                      varDataShowCopy.mainSection===index &&
                                      varDataShowCopy.sectionVarIndex===sectionVarIndex &&
                                      <CommonDropDown
                                           initialValue=""
                                         dropdownOptions={copyDropdown}
                                        onOptionClick={handleOptionClickCopy}
                                        renderOption={renderOptionOne}
                                       width="20vw"
                                       marginTop="1%"
                                      />}
                                  </td>
                                  {/* <td style={{ width: "5vw" }}>
                                    {sectionVar.column2}
                                  </td> */}
                                  <td
                                    style={{
                                      width: "6vw",
                                      position: "relative",
                                    }}
                                  >
                                    <div
                                      onClick={() =>
                                        setVarDataShow({
                                          mainSection: index,
                                          sectionVarIndex: sectionVarIndex,
                                        })
                                      }
                                      className={style.add_data}
                                    >
                                      {sectionVar.column3}
                                    </div>
                                    {varDataShow.mainSection === index &&
                                      varDataShow.sectionVarIndex ===
                                        sectionVarIndex && (
                                        <Dropdown
                                          setVarData={setVarDataValue}
                                          refKey={ref}
                                        />
                                      )}
                                  </td>
                                  <td style={{ width: "10.5vw" }}>
                                    <div
                                      className={style.add_data}
                                      onClick={() => {
                                        setVarDataShowFormula({
                                          mainSection: index,
                                          sectionVarIndex: sectionVarIndex,
                                        });
                                        setShowFormluaDropdownOuter(
                                          (prev) => !prev
                                        );
                                      }}
                                    >
                                      {sectionVar.column4}
                                    </div>
                                    {varDataShowFormula.mainSection === index &&
                                      varDataShowFormula.sectionVarIndex ==
                                        sectionVarIndex &&
                                      showFormluaDropdownOuter && (
                                        <CommonDropDown
                                          initialValue=""
                                          dropdownOptions={secondMainDropdown}
                                          onOptionClick={
                                            handleOptionClickFormulaOuter
                                          }
                                          renderOption={renderOptionOne}
                                          width="29vw"
                                          marginTop="2%"
                                        />
                                      )}
                                  </td>
                                  <td>
                                    <div
                                      ref={container2Ref}
                                      onScroll={handleScrollChild}
                                      className={
                                        style.custom_table_inner_wrapper
                                      }
                                    >
                                      <table
                                        className={style.custom_table_inner}
                                      >
                                        <tr>
                                          {sectionVar.column5.map(
                                            (subItem, subIndex) => (
                                              <td key={subIndex}>{subItem}</td>
                                            )
                                          )}
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </React.Fragment>
                    )}
                  </div>
                  {/* -------- Create New Variable Dropdown -------- */}
                  {showSection.includes(index) && (
                    <tr className="relative">
                      <td>
                        <div
                          onClick={() => {
                            setShowCreateVar(index);
                          }}
                          className="flex gap-2 flex-v-center pointer width10"
                        >
                          {showCreateVar ? (
                            <input
                              maxLength={40}
                              placeholder="Enter variable name..."
                              className={style.var_input}
                              autoFocus={true}
                              onChange={(e) => setVariableValue(e.target.value)}
                            />
                          ) : (
                            <>
                              <img
                                style={{
                                  height: "1.125rem",
                                  width: "1.125rem",
                                }}
                                src={custom}
                                alt="custom"
                              />
                              <div className={style.text_style}>
                                New Variable
                              </div>
                            </>
                          )}
                        </div>
                      </td>
                      {showCreateVar === index && (
                        <div ref={ref} className={style.create_new_var_drop}>
                          <div className={style.create_var_row1}>
                            <img src={custom_blue} alt="custom_blue" />
                            <div className={style.var_row1_text}>
                              Create a New Variable
                            </div>
                          </div>
                          {varData.map((varValue, varKey) => {
                            return (
                              <div
                                key={varKey}
                                className={style.create_var_row2}
                              >
                                <div className={style.create_var_data}>
                                  <div className={style.create_var_data_text1}>
                                    <img src={varValue.image} alt="text" />
                                    {varValue.name}
                                  </div>
                                  <div className={style.create_var_data_text2}>
                                    {varValue.description}
                                  </div>
                                </div>
                                <img
                                  src={varValue.infoImg}
                                  data-tooltip-id="my-tooltip"
                                  data-tooltip-place="right"
                                  data-tooltip-content={"Demo Text"}
                                  data-tooltip-class-name={style.tooltip_zindex}
                                  alt="text"
                                />
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default RightMainScreen;
