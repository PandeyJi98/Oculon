import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "./DataModal.module.css";

const useDataModal = ({
  showDataModal,
  handleCloseShow,
  modalTitleShow,
  scrollable,
  center,
  modalTitle,
}) => {
  const data = `import { configureStore } from "@reduxjs/toolkit";
  import storage from "redux-persist/lib/storage";
  import { combineReducers } from "redux";
  import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import filemanagerSlice from "./slices/filemanagerSlice";
  import { persistfileman } from "./slices/persistfilemanSlice";
  import changeFileStatus  from "./slices/workLayoutSlice";
  
  const reducers = combineReducers({
    filemanager: filemanagerSlice,
    workLayout: changeFileStatus,
    persistfileman: persistfileman,
  });
  const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["persistfileman"],
  };
  const persistedReducer = persistReducer(persistConfig, reducers);
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export default store;
  ChatGPT
  It looks like you're trying to persist multiple slices of state in Redux using redux-persist. Your setup seems mostly correct, but there are a few things you need to adjust.
  
  Combine Reducers: Make sure you are correctly combining all the reducers using combineReducers. This is essential for Redux to manage multiple slices of state.
  Persist Config: Ensure that your persist config correctly specifies which slices of state you want to persist. You've done this with the whitelist property, which includes the persistfileman slice.
  Persisting Multiple Slices: Since you want to persist multiple slices, you need to have separate keys for each slice in your persist config. Currently, you're using the same key ("root") for all slices. Instead, you should have different keys for each slice.
  Here's how you can adjust your code: export default store;
  ChatGPT
  It looks like you're trying to persist multiple slices of state in Redux using redux-persist. Your setup seems mostly correct, but there are a few things you need to adjust.
  
  Combine Reducers: Make sure you are correctly combining all the reducers using combineReducers. This is essential for Redux to manage multiple slices of state.
  Persist Config: Ensure that your persist config correctly specifies which slices of state you want to persist. You've done this with the whitelist property, which includes the persistfileman slice.
  Persisting Multiple Slices: Since you want to persist multiple slices, you need to have separate keys for each slice in your persist config. Currently, you're using the same key ("root") for all slices. Instead, you should have different keys for each slice.
  Here's how you can adjust your code:`;
  const dataModal = () => {
    return (
      <Modal
        centered={center}
        scrollable={true}
        show={showDataModal}
        onHide={handleCloseShow}
        dialogClassName={style.mainContainer}
      >
        {modalTitleShow && (
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body className={style.mainBody}>
          Woohoo, you are reading this text in a modal!
          {data}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseShow}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseShow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  return dataModal;
};

export default useDataModal;
