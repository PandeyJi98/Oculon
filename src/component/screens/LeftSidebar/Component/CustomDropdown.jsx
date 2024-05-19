import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import style from '../LeftSideBar.module.css';

const CustomDropdown = ({
  label,
  searchPlaceholder,
  isOpen,
  onToggle,
  onSearchChange,
  searchValue,
  onAddClick,
  addPlaceholder,
  addValue,
  onAddChange,
  onSaveClick,
  isAddOpen,
  onDropdownClick,
  children,
  isHoverDrop,
}) => (
  <div className={style.dropdownContainer}>
    {/* <button onClick={onToggle} className={style.dropdownButton}>
      {label}
    </button> */}
    {console.log("onAddClick",isAddOpen)}
    <Dropdown show={isOpen} onToggle={onToggle}>
     {!isHoverDrop && <Dropdown.Toggle as="div" className={style.plusIconDropdown} onClick={onToggle}>
        <BsPlus color="gray" />
      </Dropdown.Toggle>}
      <Dropdown.Menu onClick={onDropdownClick}>
        <div className={style.plusIconDropdownItems}>
          <div className={style.sectionSearch}>
            <CiSearch color="gray" className={style.searchIcon} />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={onSearchChange}
              className={style.inputBoxCss}
            />
          </div>
          {!isAddOpen && (
            <div className={style.underLine}>
              <div
                className={`${style.plusInputAddDropDown} ${style.addPlusSectionHover}`}
                onClick={onAddClick}
              >
                <BsPlus color="gray" />
                <span  className={style.text_style}>{label}</span>
              </div>
            </div>
          )}
          {isAddOpen && (
            <div className={style.underLine}>
              <div className={style.plusIconAddDropDown}>
                <BsPlus />
                <input
                  type="text"
                  placeholder={addPlaceholder}
                  value={addValue}
                  onChange={onAddChange}
                  className={style.inputBoxCss}
                />
                <button
                  onClick={onSaveClick}
                  className={
                    addValue !== '' ? style.saveSectionBtn : style.saveSectionDisabledBtn
                  }
                  disabled={addValue === ''}
                >
                  Save
                </button>
              </div>
            </div>
          )}
          {children}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

export default CustomDropdown;
