import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./layout.css";

function index() {
  return (
    <div className="layout container-fluid vh-100 d-flex flex-column">
      <Header />
      <Content />
      {/* <Footer /> */}
    </div>
  );
}

export default index;
