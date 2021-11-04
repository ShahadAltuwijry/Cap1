import React, { useState } from "react";
import "./style.css";

export default function HardLevel() {
  const [orginalCard, setOrginalCard] = useState([
    {
      img: require(`./../assests/front1.JPEG`).default,
      count: 0,
    },
    { img: require(`./../assests/front2.JPEG`).default, count: 0 },
    { img: require(`./../assests/front3.JPEG`).default, count: 0 },
    { img: require(`./../assests/front4.JPEG`).default, count: 0 },
    { img: require(`./../assests/front5.JPEG`).default, count: 0 },
    { img: require(`./../assests/front6.JPEG`).default, count: 0 },
    { img: require(`./../assests/front7.JPEG`).default, count: 0 },
    { img: require(`./../assests/front8.JPEG`).default, count: 0 },
    { img: require(`./../assests/front9.JPEG`).default, count: 0 },
  ]);

  const [game, setGame] = useState([
    {
      id: 1,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front1.JPEG`).default,
    },
    {
      id: 2,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front1.JPEG`).default,
    },
    {
      id: 3,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front2.JPEG`).default,
    },
    {
      id: 4,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front2.JPEG`).default,
    },
    {
      id: 5,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front3.JPEG`).default,
    },
    {
      id: 6,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front3.JPEG`).default,
    },
    {
      id: 7,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front4.JPEG`).default,
    },
    {
      id: 8,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front4.JPEG`).default,
    },
    {
      id: 9,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front5.JPEG`).default,
    },
    {
      id: 10,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front5.JPEG`).default,
    },
    {
      id: 11,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front6.JPEG`).default,
    },
    {
      id: 12,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front6.JPEG`).default,
    },
    {
      id: 13,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front7.JPEG`).default,
    },
    {
      id: 14,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front7.JPEG`).default,
    },
    {
      id: 15,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front8.JPEG`).default,
    },
    {
      id: 16,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front8.JPEG`).default,
    },
    {
      id: 17,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front9.JPEG`).default,
    },
    {
      id: 18,
      back: require(`./../assests/cardback.jpg`).default,
      front: require(`./../assests/front9.JPEG`).default,
    },
  ]);

  const [finishedCardNum, setFinishedCardNum] = useState(0);
  const [flipNum, setFlipNum] = useState([0]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  // start of correct & wrong match function

  const check = async (id) => {
    let finishCard = require(`./../assests/done.jpg`).default;
    let backCard = require(`./../assests/cardback.jpg`).default;
    if (game[id - 1].back !== finishCard)
      if (game[id - 1].back === backCard) {
        //count number of cards to check if the same or not
        //1-change count to each card
        const newOrginalCard = orginalCard.map((item) => {
          if (game[id - 1].front === item.img) {
            item.count++;
          }
          return item;
        });

        // end of correct & wrong match function

        setOrginalCard(newOrginalCard);

        //2-use find to return count
        let countCard = orginalCard.find((item) => {
          return game[id - 1].front === item.img;
        });

        const newGame = game.map((item) => {
          if (item.id === id) {
            item.back = item.front;
          }
          return item;
        });
        setGame(newGame);

        await delay(1000);

        //3- cheack if cards are equals or not
        //begin
        if (countCard.count === 2) {
          //1- change image to finishCard
          const newGame = game.map((item) => {
            if (item.back === game[id - 1].front) {
              item.back = finishCard;
            }
            return item;
          });
          setGame(newGame);

          //2- increase number of finished cards

          setFinishedCardNum(finishedCardNum + 1);
        }
        //end

        // check how many card are filpped
        //beagin
        flipNum[0]++;

        if (flipNum[0] === 2 && countCard.count !== 2) {
          const newGame = game.map((item) => {
            item.back = backCard;
            return item;
          });
          flipNum[0] = 0;
          setGame(newGame);
          //set all count to 0 to
          const newOrginalCard2 = orginalCard.map((item) => {
            item.count = 0;
            return item;
          });

          setOrginalCard(newOrginalCard2);
        } else if (flipNum[0] === 2) flipNum[0] = 0;
        setFlipNum(flipNum);
        //finish check from filpNum

        //finish
      } else {
        const newGame = game.map((item) => {
          if (item.id === id) {
            item.back = backCard;
          }
          return item;
        });
        setGame(newGame);
      }
  };
  /* main return, style here  */
  return (
    <div className="main">
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
          <div className="counter">
            <h1 className="countNum">{finishedCardNum} </h1>
            <h1 className="countHead"> correct </h1>{" "}
          </div>

          <h1 className="timer"> 00:30 </h1>
          {/*will make this into dynamic soon */}
        </div>
      </div>
      {/*start of cards return */}
      <div className="cardContiner">
        {game.map((item, i) => {
          return (
            <div className="card" key={i}>
              <img
                src={item.back}
                className="backImg"
                onClick={() => {
                  check(i + 1);
                }}
                alt="card"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
