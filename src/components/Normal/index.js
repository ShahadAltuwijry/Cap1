import React, { useState } from "react";
import "./style.css";

const Normal = () => {
  const [medCards, setMedCards] = useState([
    {
      id: 0,
      cardBack:
        "https://i.pinimg.com/564x/c5/9c/21/c59c214991d509346efa915ba16cb1fe.jpg",
      cardFront: "",
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
  ]);

  return (
    <div className="normalGame">
      {medCards.map((item, key) => {
        return;
      })}
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
        <div className="timeDiv">
          <h1 className="timer"> 00:30 </h1>
          {/*will make this into dynamic soon */}
        </div>
        <div className="nameDiv">
          <h1 className="pName">Shahad</h1>
        </div>
      </div>

      {/*start of cards */}
      <div className="mainCardsDiv">
        {medCards.map((item, id) => {
          return (
            <div className="cardsDiv">
              <img
                className="imgBack"
                alt="game cardBack"
                src={item.cardBack}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Normal;
