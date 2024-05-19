import React, { useState, useEffect, useRef } from "react";
import { Dropdown } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import style from "../LeftSideBar.module.css";

const Categories = ({
  id,
  name,
  isRenaming,
  onRename,
  onRenameToggle,
  onDelete,
}) => {
  const [editingName, setEditingName] = useState(name);
  const [isHovering, setIsHovering] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (isRenaming) {
      inputRef.current.focus(); // Ensure focus on the input box
    }
  }, [isRenaming]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
        setIsHovering(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setEditingName(e.target.value); // Update editing state
  };

  const handleBlur = () => {
    if (isRenaming && editingName.trim() !== name) {
      // Ensure in rename mode and only save if needed
      onRename(id, editingName); // Save new name
    }
    onRenameToggle(id, false); // Exit rename mode
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (!dropdownVisible) {
      setIsHovering(false);
    }
  };

  return (
    <div
      className={style.sectionContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isRenaming ? (
        <input
          type="text"
          value={editingName} // Ensure bound to editing state
          onChange={handleInputChange} // Update editing state
          onBlur={handleBlur} // Save on blur
          onKeyPress={handleKeyPress} // Save on Enter key press
          ref={inputRef} // Ensure focus
          className={style.renameInputBoxCss}
        />
      ) : (
        <span onClick={() => onRenameToggle(id, true)}>{name}</span>
      )}

      {(isHovering || dropdownVisible) && (
        <div ref={dropdownRef}>
          <Dropdown show={dropdownVisible} onToggle={() => setDropdownVisible(!dropdownVisible)}>
            <Dropdown.Toggle
              as="div"
              className={style.customToggle}
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              <BsThreeDotsVertical />
            </Dropdown.Toggle>
            <Dropdown.Menu className={style.customDropdown}>
              <Dropdown.Item onClick={() => { onRenameToggle(id, true); setDropdownVisible(false); }}  className={style.text_style}>Rename</Dropdown.Item>
              <Dropdown.Item onClick={() => { onDelete(id); setDropdownVisible(false); }}  className={style.text_style}>Delete</Dropdown.Item>
              <Dropdown.Item  className={style.text_style}>Inspect</Dropdown.Item>
              <Dropdown.Item  className={style.text_style}>Duplicate</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default Categories;
