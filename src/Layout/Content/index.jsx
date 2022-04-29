import React from "react";
import "./content.css";
import Pages from "../../Pages";

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
    <div className="content">
      <Pages
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
