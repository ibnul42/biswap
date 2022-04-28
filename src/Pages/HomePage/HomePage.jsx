import React, { useState } from "react";
import "./home.css";
import { BsDiscord, BsTelegram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";

function HomePage() {
  const [items, setItems] = useState([
    { name: "Play" },
    { name: "Tournaments & Bets" },
    { name: "Stake Crace" },
    { name: "E-shop" },
    { name: "NFT Mint" },
    { name: "NFT Mutation" },
    { name: "NFT MarketPlace" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="container-fluid home">
      <div
        className="row d-flex justify-content-between"
        style={{ height: "96%" }}
      >
        <div className="col-3 ps-0 d-flex flex-column justify-content-between">
          <div className="menu-items">
            <ul className="list-unstyled my-1">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`d-flex justify-content-between align-items-center ml-0 mr-2 my-2 px-3 py-2 ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <p className="m-0 p-0">{item.name}</p>
                  {index !== currentIndex && <RiArrowRightSLine />}
                </li>
              ))}
            </ul>
          </div>
          <div className="social">
            <div className="d-flex flex-column justify-content-center align-items-center mb-3">
              <p className="m-0 p-0">Get in Touch</p>
              <div className="icons">
                <BsDiscord
                  size={"25px"}
                  className="m-2"
                  color="#5b6ab3"
                  cursor="pointer"
                />
                <BsTelegram
                  size={"25px"}
                  className="m-2"
                  color="#1a8dd6"
                  cursor="pointer"
                />
                <FiMail
                  size={"25px"}
                  className="m-2"
                  color="#d54c1a"
                  cursor="pointer"
                />
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mb-3">
              <p className="m-0 p-0">Follow us on</p>
              <div className="icons">
                <FaTwitterSquare
                  size={"25px"}
                  className="m-2"
                  color="white"
                  cursor="pointer"
                />
                <FaInstagramSquare
                  size={"25px"}
                  className="m-2"
                  color="#c82e76"
                  cursor="pointer"
                />
                <AiFillFacebook
                  size={"25px"}
                  className="m-2"
                  color="#3c5a99"
                  cursor="pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 right d-flex justify-content-center align-items-center">
          <p>Empty container</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
