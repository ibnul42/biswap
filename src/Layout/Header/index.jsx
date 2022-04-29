import React, { useState } from "react";
import "./header.css";
import { AiFillStar } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";
import coin from "../../assets/Coin.png";

function Index({
  currentIndex,
  setCurrentIndex,
  currentState,
  setCurrentState,
  selectedStateShown,
  walletHandler,
  setSelectedStateShown,
}) {
  const [items, setItems] = useState([
    { name: "Play" },
    { name: "Tournaments & Bets" },
    { name: "Stake Crace" },
    { name: "E-shop" },
    { name: "NFT Mint" },
    { name: "NFT Mutation" },
    { name: "NFT MarketPlace" },
  ]);
  // const [currentIndex, setCurrentIndex] = useState(null);
  // const [currentState, setCurrentState] = useState("");
  // const [selectedStateShown, setSelectedStateShown] = useState(false);

  // const walletHandler = (e) => {
  //   e.preventDefault();
  //   setSelectedStateShown(true);
  // };
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-between navbar-light">
      <a
        className="navbar-brand connect-wallet"
        href="#"
        onClick={walletHandler}
      >
        Wallet Connected
      </a>
      <button
        className="navbar-toggler bg-white text-black"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto w-100 d-flex justify-content-between">
          <li className="nav-item w-25 d-flex justify-content-between align-items-center">
            <div className="selected-state m-0 p-0 d-flex justify-content-between">
              <p className="m-0 p-0">
                {selectedStateShown ? currentState : "Please select a state"}
              </p>
            </div>
          </li>
          <li className="nav-item w-50">
            <div className="title d-flex justify-content-center align-items-center py-2 my-2">
              <p className="m-0 p-0">24h Tournament is live</p>
            </div>
          </li>
          <li className="nav-item w-25 d-flex justify-content-center align-items-center coin-mobile">
            <div className="star-coin">
              <div className="d-flex justify-content-between star-group align-items-center">
                <img
                  src={coin}
                  alt="Coin"
                  style={{
                    width: "32px",
                  }}
                />
                <p className="m-0 p-0">99999</p>
              </div>
            </div>
          </li>
        </ul>
        <ul className="list-unstyled my-1 d-lg-none">
          {items.map((item, index) => (
            <li
              key={index}
              className={`d-flex justify-content-between align-items-center ml-0 mr-2 my-2 px-3 py-2 ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => {
                setCurrentIndex(index);
                setCurrentState(item.name);
                setSelectedStateShown(false);
              }}
            >
              <p className="m-0 p-0">{item.name}</p>
              {index !== currentIndex && <RiArrowRightSLine />}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Index;
