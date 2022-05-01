import React, { useState } from "react";
import "./home.css";
import { RiArrowRightSLine } from "react-icons/ri";
import discord from "../../assets/Get-In-Touch-Discord.png";
import email from "../../assets/Get-In-Touch-Mail.png";
import telegram from "../../assets/Get-In-Touch-Telegram.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";

function HomePage({
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

  return (
    <div className="container-fluid home">
      <div
        className="row d-flex justify-content-between main-menu"
        style={{ height: "96%" }}
      >
        <div className=" col-sm-12 col-md-4 ps-0 d-flex flex-column justify-content-between left-menu">
          <div className="menu-items">
            <ul className="list-unstyled my-1">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`d-flex justify-content-between align-items-center ml-0 mr-2 my-2 px-3 py-2 ${
                    index === currentIndex ? "active" : "inactive"
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
          <div className="social">
            <div className="d-flex flex-column justify-content-center align-items-center mb-3 right-menu">
              <p className="m-0 p-0">Get in Touch</p>
              <div className="icons">
                <img src={discord} alt="discord" className="icon-style" />
                <img src={telegram} alt="telegram" className="icon-style" />
                <img src={email} alt="email" className="icon-style" />
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mb-3">
              <p className="m-0 p-0">Follow us on</p>
              <div className="icons">
                <img src={twitter} alt="twitter" className="icon-style" />
                <img src={instagram} alt="instagram" className="icon-style" />
                <img src={facebook} alt="facebook" className="icon-style" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-8 right d-flex justify-content-center align-items-center right-menu">
          <p>Empty container</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
