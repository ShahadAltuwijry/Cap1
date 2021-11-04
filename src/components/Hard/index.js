import React, { useState } from "react";
import "./style.css";

const Hard = () => {
  const [hardCards, setHardCards] = useState([
    {
      id: 0,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: require(`./../assests/card1.jpg`).default,
    },
    {
      id: 1,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
    },
    {
      id: 2,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
    },
    {
      id: 3,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
    },
    {
      id: 4,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
    },
    {
      id: 5,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
    },
    {
      id: 6,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
    },
    {
      id: 7,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
    },
    {
      id: 8,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
    },
    {
      id: 9,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
    },
    {
      id: 10,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
    },
    {
      id: 11,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
    },
    {
      id: 12,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
    },
    {
      id: 13,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
    },
    {
      id: 14,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
    },
    {
      id: 15,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
    },
    {
      id: 16,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
    },
    {
      id: 17,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
    },
    // {
    //   id: 18,
    //   cardBack:
    //     "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
    //   cardFront: "",
    // },
    // {
    //   id: 19,
    //   cardBack:
    //     "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
    //   cardFront: "",
    // },
    // {
    //   id: 20,
    //   cardBack:
    //     "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
    //   cardFront: "",
    // },
    // {
    //   id: 21,
    //   cardBack:
    //     "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
    //   cardFront: "",
    // },
    // {
    //   id: 22,
    //   cardBack:
    //     "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
    //   cardFront: "",
    // },
    // {
    //   id: 23,
    //   cardBack:
    //     "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
    //   cardFront: "",
    // },
  ]);

  return (
    <div className="wrapper">
      <div className="upperPage">
        <div className="btnsDiv">
          <button className="backBtn">
            <img
              className="backIcon"
              src="https://img.icons8.com/material-outlined/24/ffffff/circled-left--v1.png"
            />
          </button>
          <button className="restartBtn">
            <img
              className="resIcon"
              src="https://img.icons8.com/material-outlined/24/ffffff/restart--v1.png"
            />
          </button>
        </div>
        <div className="timerDiv">
          <h1 className="timer"> 00:30 </h1>
          <h1 className="counter">  0  correct </h1>
          {/*will make this into dynamic soon */}
        </div>
        <div className="nameDiv">
          <h1 className="pName">Shahad</h1>
        </div>
      </div>

      {/*start of cards */}
      <div className="mainCardsDivHard">
        {hardCards.map((item, id) => {
          //   let frontImg = require(item.cardFront);
          return (
            <div className="cardsDivHard" key={id}>
              <img
                className="imgBack"
                src={item.cardBack}
                alt="game cardBack"
              />
              {/* <img className="imgBack" src={frontImg} alt="game cardBack" /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hard;
