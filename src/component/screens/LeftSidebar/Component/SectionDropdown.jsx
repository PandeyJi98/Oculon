import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { RiFileCopyLine } from 'react-icons/ri';
import { BsPlus } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import style from '../LeftSideBar.module.css';

const SectionDropdown = ({
  isHoveringCopy,
  isDropdownOpen,
  isCategoriesDropdownOpen,
  toggleCategoriesDropdown,
  sectionSearchTerm,
  handleSectionSearch,
  isAddCategoriesOpen,
  toggleAddCategories,
  newCategoriesName,
  setNewCategoriesName,
  addCategories,
  categories,
  handleDropdownClick,
}) => {
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [hiddenDrop, setHiddenDrop] = useState(false);

  const handleToggleAddCategory = () => {
    setIsAddingCategory(!isAddingCategory);
    if (!isAddingCategory) {
      toggleCategoriesDropdown(); // Close the categories dropdown when opening add category view
    }
  };

  const toggleHideCategories = () => {
    setHiddenDrop(!hiddenDrop);
  };

  return (
    isHoveringCopy && (
      <div className={style.dropdownWrapper}>
       <div className={categories.length === 0 ? style.bodyWrapper : style.bodyChangedWrapper}>
       {!isAddingCategory && (
         categories.length > 0 ?( categories.map((section, index) => (
            <div key={index} className={style.allSectionData}>
              <div className={`${style.plusIconAddDropDown} ${style.addSectionHover}`}>
                <span className={style.sectionText}>{section.name}</span>
                {index === categories.length - 1 && (
                  <Dropdown show={isCategoriesDropdownOpen} onToggle={toggleCategoriesDropdown} className={style.dropdownPlus2}>
                    <Dropdown.Toggle
                      as="div"
                      onClick={handleToggleAddCategory}
                      className={style.plusIconHoverDropdown}
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
    
                        <div className={style.underLine}>
                          <div
                            className={`${style.plusInputAddDropDown} ${style.addSectionHover}`}
                            onClick={() =>{
                              handleToggleAddCategory()
                              toggleHideCategories()
                            }}
                          >
                            <BsPlus color="gray" className={style.plusIcon} />
                            <span  className={style.text_style}>Add Section</span>
                          </div>
                        </div>
    
                        {categories.map((section, index) => (
                          <div key={index} className={style.allSectionData}>
                            <div className={`${style.plusIconAddDropDown} ${style.addSectionHover}`}>
                              <span className={style.sectionText}>{section.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </div>
            </div>
          ))) : 
          <div className={style.hoverDropdown}>
            <RiFileCopyLine className={style.sidebarCopyIcon} />
            <span>
              Categories let you break down your model into more detail, e.g., by Product or Country. <span className={style.learnMore}>Learn More</span>
            </span>
          </div>
        )}
        {!isAddingCategory ? ( categories.length === 0 &&
          <Dropdown show={isCategoriesDropdownOpen} onToggle={toggleCategoriesDropdown} className={categories.length === 0 ? style.dropdownPlus : style.dropdownPlus2} >
            <Dropdown.Toggle
              as="div"
              onClick={handleToggleAddCategory}
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

                <div className={style.underLine}>
                  <div
                    className={`${style.plusInputAddDropDown} ${style.addSectionHover}`}
                    onClick={handleToggleAddCategory}
                  >
                    <BsPlus color="gray" className={style.plusIcon} />
                    <span  className={style.text_style}>Add Section</span>
                  </div>
                </div>

                {categories.map((section, index) => (
                  <div key={index} className={style.allSectionData}>
                    <div className={`${style.plusIconAddDropDown} ${style.addSectionHover}`}>
                      <span className={style.sectionText}>{section.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <>
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

                {!hiddenDrop && <div className={style.underLine}>
                  <div
                    className={`${style.plusInputAddDropDown} ${style.addSectionHover}`}
                    onClick={toggleHideCategories}
                  >
                    <BsPlus color="gray" className={style.plusIcon} />
                    <span  className={style.text_style}>Add Section</span>
                  </div>
                </div>}

               {hiddenDrop && <div className={style.underLine}>
            <div className={`${style.plusIconAddDropDown} ${style.addSectionHover}`}>
              <BsPlus />
              <input
                type="text"
                placeholder="New section name..."
                value={newCategoriesName}
                onChange={(e) => setNewCategoriesName(e.target.value)}
                className={style.inputBoxCss}
              />
              <button
                onClick={() => {
                  addCategories();
                  handleToggleAddCategory(); // Close add category view after adding
                }}
                className={newCategoriesName !== '' ? style.saveSectionBtn : style.saveSectionDisabledBtn}
                disabled={newCategoriesName === ''}
              >
                Save
              </button>
            </div>
                </div>}
                {categories.map((section, index) => (
                  <div key={index} className={style.allSectionData}>
                    <div className={`${style.plusIconAddDropDown} ${style.addSectionHover}`}>
                      <span className={style.sectionText}>{section.name}</span>
                    </div>
                  </div>
                ))}
              </div>
          </>
          
        )}
       </div>
      </div>
    )
  );
};

export default SectionDropdown;
