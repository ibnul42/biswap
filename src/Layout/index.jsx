import React, { useState } from "react";
import Header from "./Header/Index";
import Content from "./Content";
import Footer from "./Footer";
import "./layout.css";

function Index() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentState, setCurrentState] = useState("");
  const [selectedStateShown, setSelectedStateShown] = useState(false);

  const walletHandler = (e) => {
    e.preventDefault();
    setSelectedStateShown(true);
  };
  return (
    <div className="layout container-fluid vh-100 d-flex flex-column">
      <Header
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        currentState={currentState}
        setCurrentState={setCurrentState}
        selectedStateShown={selectedStateShown}
        walletHandler={walletHandler}
        setSelectedStateShown={setSelectedStateShown}
      />
      <Content
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        currentState={currentState}
        setCurrentState={setCurrentState}
        selectedStateShown={selectedStateShown}
        walletHandler={walletHandler}
        setSelectedStateShown={setSelectedStateShown}
      />
      {/* <Footer /> */}
    </div>
  );
}

export default Index;
