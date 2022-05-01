import React from "react";
import HomePage from "./HomePage/HomePage.jsx";
import "./pages.css";

function index({
  currentIndex,
  setCurrentIndex,
  currentState,
  setCurrentState,
  selectedStateShown,
  walletHandler,
  setSelectedStateShown,
}) {
  return (
    <div className="pages">
      <HomePage
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        currentState={currentState}
        setCurrentState={setCurrentState}
        selectedStateShown={selectedStateShown}
        walletHandler={walletHandler}
        setSelectedStateShown={setSelectedStateShown}
      />
    </div>
  );
}

export default index;
