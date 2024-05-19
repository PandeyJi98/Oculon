// import React from 'react'

// const DummyDropdown = () => {
//   return (
//     <Dropdown
//     show={isCategoriesDropdownOpen}
//     onToggle={toggleCategoriesDropdown}
//   >
//     <Dropdown.Toggle
//       as="div"
//       onClick={toggleCategoriesDropdown}
//       className={style.plusIconDropdown}
//     >
//       <BsPlus color="gray" />
//     </Dropdown.Toggle>

//     <Dropdown.Menu onClick={handleDropdownClick}>
//       <div className={style.plusIconDropdownItems}>
//         <div className={style.sectionSearch}>
//           <CiSearch color="gray" className={style.searchIcon} />
//           <input
//             type="text"
//             placeholder="Search..."
//             value={sectionSearchTerm}
//             onChange={handleSectionSearch}
//             className={style.inputBoxCss}
//           />
//         </div>
//         {!isAddCategoriesOpen && (
//           <div className={style.underLine}>
//             <div
//               className={`${style.plusInputAddDropDown} ${style.addSectionHover}`}
//               onClick={toggleAddCategories}
//             >
//               <BsPlus color="gray" className={style.plusIcon} />
//               <span>Add Categories</span>
//             </div>
//           </div>
//         )}
//         {isAddCategoriesOpen && (
//           <div className={style.underLine}>
//             <div
//               className={`${style.plusIconAddDropDown} ${style.addSectionHover}`}
//             >
//               <BsPlus />
//               <input
//                 type="text"
//                 placeholder="New section name..."
//                 value={newCategoriesName}
//                 onChange={(e) =>
//                   setNewCategoriesName(e.target.value)
//                 }
//                 className={style.inputBoxCss}
//               />
//               <button
//                 onClick={addCategories}
//                 className={
//                   newCategoriesName !== ""
//                     ? style.saveSectionBtn
//                     : style.saveSectionDisabledBtn
//                 }
//                 disabled={newCategoriesName === ""}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         )}

//         {categories.map((section) => {
//           return (
//             <div className={style.allSectionData}>
//               <div
//                 className={`${style.plusIconAddDropDown} ${style.addSectionHover}`}
//               >
//                 <span className={style.sectionText}>
//                   {section?.name}
//                 </span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </Dropdown.Menu>
//   </Dropdown>
//   )
// }

// export default DummyDropdown



{/* <CustomDropdown
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
                isHoverDrop={isHoverDrop}
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
              </CustomDropdown> */}