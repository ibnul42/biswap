import React from "react";
import "./header.css";
import { AiFillStar } from "react-icons/ai";

function index() {
  return (
    <div className="header d-flex justify-content-between align-items-center fw-bold">
      <button className="connect-wallet">Connect Wallet</button>
      <div className="title d-flex justify-content-center align-items-center py-2">
        <p className="m-0 p-0">24h Tournament is live</p>
      </div>
      <div className="mx-3 star-coin">
        <div className="d-flex justify-content-between star-group align-items-center">
          {/* <p className="m-0 p-0"></p> */}
          <AiFillStar />
          <p className="m-0 p-0">99999</p>
        </div>
      </div>
    </div>
  );
}

export default index;
