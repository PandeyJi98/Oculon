import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import useDataModal from "./component/custom hook/DataModal/DataModal";
import useDropdown from "./component/custom hook/Dropdown/Dropdown";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import LeftSideBar from "./component/screens/LeftSidebar/LeftSideBar";
import RightMainScreen from "./component/screens/RightMainScreen/RightMainScreen";
import Mainheader from "./component/screens/Mainheader/Mainheader";

function App() {
  const [showDataModal, setShowDataModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  console.log("showDropdown", showDropdown);
  const handleCloseShow = () =>
    setShowDataModal((showDataModal) => !showDataModal);
  const DataModal = useDataModal({
    showDataModal,
    handleCloseShow,
    modalTitleShow: true,
    scrollable: true,
    center: true,
    modalTitle: "THIS TEXT IS FOR TESTING.",
  });
  const dropData = [1, 2, 3, 4, 5, 6];
  const DropDown = useDropdown({ dropData });
  return (
    <React.Fragment>
      {/* <Table /> */}
      {/* <DataModal /> */}
      <header className="App-header">
        <Mainheader />
        <div style={{ display: "flex", width: "100%" }}>
          <LeftSideBar />
          <RightMainScreen />
        </div>
        {/* <div style={{ position: "relative" }}>
            <div
              style={{ cursor: "pointer" }}
              onMouseOver={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              Welcome in oculan project!
            </div>
            {showDropdown && <DropDown />}
            <button onClick={handleCloseShow}>Open Modal</button>
          </div> */}
      </header>
      <Toaster />
    </React.Fragment>
  );
}

export default App;
