import React from "react";
import btnStyles from "./styles/buttonStyles.module.scss";
import { useNavigate } from "react-router-dom";

export function ButtonCancel() {
  const nav = useNavigate();
  // let src = "./images/components/".concat(props.imgName);
  return (
    <button
      className={btnStyles.btn}
      onClick={() => {
        nav(-1);
      }}
    >
      <img src="./images/components/icon-btn-back.svg" alt="btn" />
    </button>
  );
}