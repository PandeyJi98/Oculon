import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { CiSearch } from "react-icons/ci";
import { PiBellSimpleThin } from "react-icons/pi";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { BsPlus, BsDatabase } from "react-icons/bs";
import { setIsSidebarVisible } from "../../redux/slices/spreadSheetSlice";
import style from "./LeftSideBar.module.css";
import Section from "./Component/Section";
import Categories from "./Component/Categories";
import { LiaHireAHelper } from "react-icons/lia";
import { AiTwotoneMessage } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { RiFileCopyLine } from "react-icons/ri";
import { IoDiamondOutline } from "react-icons/io5";
import { Dropdown } from "react-bootstrap";
import CustomDropdown from "./Component/CustomDropdown";
import CategoriesDropdown from "./Component/CategoriesDropdown";
import SectionDropdown from "./Component/SectionDropdown";

const LeftSideBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sectionSearchTerm, setSectionSearchTerm] = useState("");
  const [categoriesSearchTerm, setCategoriesSearchTerm] = useState("");
  const [sections, setSections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isAddSectionOpen, setIsAddSectionOpen] = useState(false);
  const [isAddCategoriesOpen, setIsAddCategoriesOpen] = useState(false);
  const [newSectionName, setNewSectionName] = useState("");
  const [newCategoriesName, setNewCategoriesName] = useState("");
  const [sectionBeingRenamed, setSectionBeingRenamed] = useState(null);
  const [categoriesBeingRenamed, setCategoriesBeingRenamed] = useState(null);
  const renameInputRef = useRef();
  const renameCategoriesInputRef = useRef();
  const [hideSection, setHideSection] = useState(true);
  const [hideCategories, setHideCategories] = useState(true);
  const [option, setOption] = useState({
    fullName: "Abhishek",
    imageUrl: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] =
    useState(false);
  const [isDataDropdownOpen, setIsDataDropdownOpen] = useState(false);
  const [isHoveringCopy, setIsHoveringCopy] = useState(false);
  const [isHoveringSection, setIsHoveringSection] = useState(false);
  const [isHoverDrop, setIsHoverDrop] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const dispatch = useDispatch();
  const { isSidebarVisible } = useSelector((state) => state.spreadSheet);

  const toggleSidebar = () => {
    dispatch(setIsSidebarVisible(!isSidebarVisible));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleCategoriesDropdown = () => {
    setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen);
  };
  const toggleDataDropdown = () => {
    setIsDataDropdownOpen(!isDataDropdownOpen);
  };
  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSectionSearch = (e) => {
    setSectionSearchTerm(e.target.value);
  };
  const handleCategoriesSearch = (e) => {
    setCategoriesSearchTerm(e.target.value);
  };
  const toggleAddSection = () => {
    setIsAddSectionOpen(!isAddSectionOpen);
    if (sectionBeingRenamed !== null) {
      setSectionBeingRenamed(null);
    }
    setNewSectionName("");
    setHideSection(true);
  };
  const toggleAddCategories = () => {
    setIsAddCategoriesOpen(!isAddCategoriesOpen);
    if (categoriesBeingRenamed !== null) {
      setCategoriesBeingRenamed(null);
    }
    setNewCategoriesName("");
    setHideCategories(true);
  };

  const addSection = () => {
    if (newSectionName.trim() === "") return;

    const newSection = { id: uuidv4(), name: newSectionName };
    setSections([...sections, newSection]);
    setIsAddSectionOpen(false);
    setNewSectionName("");
    setIsDropdownOpen(false);
  };
  const addCategories = () => {
    if (newCategoriesName.trim() === "") return;
    const newCategories = { id: uuidv4(), name: newCategoriesName };
    setCategories([...categories, newCategories]);
    setIsAddCategoriesOpen(false);
    setNewCategoriesName("");
    setIsCategoriesDropdownOpen(false);
  };

  const deleteSection = (id) => {
    setSections(sections.filter((section) => section.id !== id));
    if (sectionBeingRenamed === id) {
      setSectionBeingRenamed(null);
      setNewSectionName("");
    }
  };
  const deleteCategories = (id) => {
    setCategories(categories.filter((section) => section.id !== id));
    if (categoriesBeingRenamed === id) {
      setCategoriesBeingRenamed(null);
      setNewCategoriesName("");
    }
  };

  const saveNewName = () => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionBeingRenamed
          ? { ...section, name: newSectionName }
          : section
      )
    );
    setSectionBeingRenamed(null);
  };

  const handleRename = (id, newName) => {
    // Ensure this function saves the new name in the parent component
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === id ? { ...section, name: newName } : section
      )
    );
  };
  const handlCategoriesRename = (id, newName) => {
    // Ensure this function saves the new name in the parent component
    setCategories((prevSections) =>
      prevSections.map((section) =>
        section.id === id ? { ...section, name: newName } : section
      )
    );
  };

  const handleRenameToggle = (id, isRenaming) => {
    // Toggle rename mode
    setSectionBeingRenamed(isRenaming ? id : null);
  };
  const handleCategoriesRenameToggle = (id, isRenaming) => {
    // Toggle rename mode
    setCategoriesBeingRenamed(isRenaming ? id : null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sectionBeingRenamed !== null &&
        renameInputRef.current &&
        !renameInputRef.current.contains(event.target)
      ) {
        saveNewName();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sectionBeingRenamed]);
  const toggleHideSection = () => {
    setHideSection(!hideSection);
  };
  const toggleHideCategories = () => {
    setHideCategories(!hideCategories);
  };

  const handleMouseEnter = () => {
    setIsHoveringCopy(true);
  };
  const handleMouseSectionEnter = () => {
    setIsHoveringSection(true);
  };

  const handleMouseLeave = () => {
    setIsHoveringCopy(false);
  };
  const handleMouseSectionLeave = () => {
    setIsHoveringSection(false);
  };

  //   useEffect(() => {
  // if(isDropdownOpen){
  //   setIsHoverDrop(true);
  // }
  //   },[isDropdownOpen])
  return (
    <div className={isSidebarVisible ? style.parentDiv : style.parentDivHidden}>
      <div
        className={
          isSidebarVisible ? style.searchBtnDiv : style.searchBtnHiddenDiv
        }
      >
        <div
          className={isSidebarVisible ? style.flexClass : style.hiddenFlexClass}
        >
         <span className={style.searchIcon}> <CiSearch color="gray" /></span>
          {isSidebarVisible && (
            <input
              type="text"
              placeholder="Type anything..."
              value={searchTerm}
              onChange={handleSearch}
              className={style.inputBoxCss}
            />
          )}
        </div>
        <span className={style.buttonCss}><PiBellSimpleThin color="gray" /></span>
        <span className={style.buttonCss}><RxDoubleArrowLeft
          onClick={toggleSidebar}
          color="gray"
          
        /></span>
      </div>

      <div>
        {!isSidebarVisible && (
          <div className={style.sidebarCopyIconParent}>
            <div className={style.sidebarCopyIconDiv}>
              <div
                className={style.mouseSectionHover}
                onMouseEnter={handleMouseSectionEnter}
                onMouseLeave={handleMouseSectionLeave}
              >
               <span className={style.sidebarCopyIcon}> <IoDiamondOutline  /></span>
                {isHoveringSection && (
                  <SectionDropdown
                    isHoveringCopy={isHoveringSection}
                    isDropdownOpen={isDropdownOpen}
                    isCategoriesDropdownOpen={isDropdownOpen}
                    toggleCategoriesDropdown={toggleDropdown}
                    sectionSearchTerm={sectionSearchTerm}
                    handleSectionSearch={handleSectionSearch}
                    isAddCategoriesOpen={isAddSectionOpen}
                    toggleAddCategories={toggleAddSection}
                    newCategoriesName={newSectionName}
                    setNewCategoriesName={setNewSectionName}
                    addCategories={addSection}
                    categories={sections}
                    handleDropdownClick={handleDropdownClick}
                  />
                )}
              </div>

              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={style.mouseHover}
              >
                
               <span className={style.sidebarCopyIcon}> <RiFileCopyLine  /></span>

                {isHoveringCopy && (
                  <CategoriesDropdown
                    isHoveringCopy={isHoveringCopy}
                    isDropdownOpen={isDropdownOpen}
                    isCategoriesDropdownOpen={isCategoriesDropdownOpen}
                    toggleCategoriesDropdown={toggleCategoriesDropdown}
                    sectionSearchTerm={sectionSearchTerm}
                    handleSectionSearch={handleSectionSearch}
                    isAddCategoriesOpen={isAddCategoriesOpen}
                    toggleAddCategories={toggleAddCategories}
                    newCategoriesName={newCategoriesName}
                    setNewCategoriesName={setNewCategoriesName}
                    addCategories={addCategories}
                    categories={categories}
                    handleDropdownClick={handleDropdownClick}
                  />
                )}
              </div>
            </div>
           <span className={style.dataBaseIcon}> <BsDatabase /></span>
          </div>
        )}
        {isSidebarVisible && (
          <div className={style.allSectionParent}>
            <div className={style.linkModelSection}>
              <button className={style.linkedBtn} onClick={toggleHideSection}>
                Linked Models
              </button>
              <CustomDropdown
                label="New Models"
                searchPlaceholder="Search..."
                isOpen={isDropdownOpen}
                onToggle={toggleDropdown}
                onSearchChange={(e) => setSectionSearchTerm(e.target.value)}
                searchValue={sectionSearchTerm}
                onAddClick={toggleAddSection}
                addPlaceholder="Add Section Name"
                addValue={newSectionName}
                onAddChange={(e) => setNewSectionName(e.target.value)}
                onSaveClick={addSection}
                onDropdownClick={(e) => e.stopPropagation()}
                isAddOpen={isAddSectionOpen}
              >
                {sections.map((section) => {
                  return (
                    <div className={style.allSectionData}>
                      <div
                        className={`${style.plusIconAddDropDown} ${style.addSectionHover}`}
                      >
                        <span className={style.sectionText}>
                          {section?.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </CustomDropdown>
            </div>
            {hideSection && (
              <div className={style.addSectionDiv}>
                {sections.map((section) => (
                  <Section
                    id={section.id}
                    name={section.name}
                    isRenaming={section.id === sectionBeingRenamed}
                    onRename={handleRename}
                    onRenameToggle={handleRenameToggle}
                    onDelete={deleteSection}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {isSidebarVisible && (
          <div className={style.allSectionParent}>
            <div className={style.linkModelSection}>
              <button
                className={style.linkedBtn}
                onClick={toggleHideCategories}
              >
                Categories
              </button>
              <CustomDropdown
                label="New Category"
                searchPlaceholder="Search..."
                isOpen={isCategoriesDropdownOpen}
                onToggle={toggleCategoriesDropdown}
                onSearchChange={(e) => setCategoriesSearchTerm(e.target.value)}
                searchValue={categoriesSearchTerm}
                onAddClick={toggleAddCategories}
                addPlaceholder="Add Categories Name"
                addValue={newCategoriesName}
                onAddChange={(e) => setNewCategoriesName(e.target.value)}
                onSaveClick={addCategories}
                onDropdownClick={(e) => e.stopPropagation()}
                isAddOpen={isAddCategoriesOpen}
              >
                {categories.map((section) => {
                  return (
                    <div className={style.allSectionData} key={section.id}>
                      <div
                        className={`${style.plusIconAddDropDown} ${style.addSectionHover}`}
                      >
                        <span className={style.sectionText}>
                          {section?.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </CustomDropdown>
            </div>
            {hideCategories && (
              <div className={style.addCategoryDiv}>
                {categories.map((categories) => (
                  <Categories
                    id={categories.id}
                    name={categories.name}
                    isRenaming={categories.id === categoriesBeingRenamed}
                    onRename={handlCategoriesRename} // This should save the name
                    onRenameToggle={handleCategoriesRenameToggle} // This should toggle rename mode
                    onDelete={deleteCategories}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {isSidebarVisible && (
          <div className={style.allSectionParent}>
            <div className={style.linkModelSection}>
              <button
                className={style.linkedBtn}
                onClick={toggleHideCategories}
              >
                Data
              </button>
              <Dropdown show={isDataDropdownOpen} onToggle={toggleDataDropdown}>
                <Dropdown.Toggle
                  as="div"
                  onClick={toggleDataDropdown}
                  className={style.plusIconDropdown}
                >
                  <BsPlus color="gray" />
                </Dropdown.Toggle>

                <Dropdown.Menu onClick={handleDropdownClick}>
                  <div className={style.plusIconDropdownItems}>
                    <div className={style.sectionSearch}>
                      <CiSearch color="gray" className={style.searchIcon} />
                      <input
                        type="text"
                        placeholder="Search..."
                        value={sectionSearchTerm}
                        onChange={handleSectionSearch}
                        className={style.inputBoxCss}
                      />
                    </div>
                    {!isAddCategoriesOpen && (
                      <div className={style.underLine}>
                        <div
                          className={`${style.plusInputAddDropDown} ${style.addSectionHover}`}
                          onClick={toggleAddCategories}
                        >
                          <BsPlus color="gray" className={style.plusIcon} />
                          <span>New Data source</span>
                        </div>
                      </div>
                    )}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        )}
      </div>
      <div
        className={
          isSidebarVisible ? style.bottomElement : style.bottomElementHide
        }
      >
        <div
          className={style.profile}
          data-tooltip-id="my-tooltip"
          data-tooltip-place="top"
          data-tooltip-content={option?.fullName}
        >
          {option?.imageUrl?.length > 0 ? (
            <></>
          ) : // <img alt="" src={item.imageUrl?.original} className={styles.chatProfileImage}/>
          option?.fullName ? (
            option?.fullName?.charAt(0).toUpperCase()
          ) : (
            option?.roomName?.charAt(0).toUpperCase()
          )}
        </div>
        <div
          className={
            isSidebarVisible ? style.bottomIcon : style.bottomElementHide
          }
        >
          <LiaHireAHelper
            className={style.bottomIconStyle}
            data-tooltip-id="my-tooltip"
            data-tooltip-place="top"
            data-tooltip-content={"Help"}
          />
          <AiTwotoneMessage
            className={style.bottomIconStyle}
            data-tooltip-id="my-tooltip"
            data-tooltip-place="top"
            data-tooltip-content={"Chat"}
          />
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default LeftSideBar;
