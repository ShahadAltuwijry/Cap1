import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Start() {
  const navigate = useNavigate();
  return (
    <div className="mainInMainPage">
      <div className="choiceDiv">
        <div className="mainPageHeads">
          <h1 className="mainHead"> Choose </h1>
          <h2 className="subHead">Game Level </h2>
        </div>

        <div className="mainPageBtns">
          <button
            className="mainBtns"
            onClick={() => {
              navigate("/easyLevel");
            }}
          >
            easy level
          </button>
          <button
            className="mainBtns"
            onClick={() => {
              navigate("/mediumLevel");
            }}
          >
            medium level
          </button>
          <button
            className="mainBtns"
            onClick={() => {
              navigate("/hardLevel");
            }}
          >
            high level
          </button>
        </div>
      </div>
    </div>
  );
}
