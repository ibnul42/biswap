import React from "react";
import "./home.css";

function index() {
  return (
    <div className="container-fluid home">
      <div className="row h-100 d-flex justify-content-between">
        <div className="col-3 ps-0">Left</div>
        <div className="col-8 right d-flex justify-content-center align-items-center">
          <p>Empty container</p>
        </div>
      </div>
    </div>
  );
}

export default index;
