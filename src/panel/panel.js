import React, { useState } from "react";
import "./panel.css";

const Panel = (props) => {
  const [pic, setPic] = useState("https://picsum.photos/1500/1500");
  const [picNum, setPicNum] = useState(1);
  const [toggle, setToggle] = useState(true);

  const changePicNum = () => {
    setPicNum(picNum + 1);
    return setPic(`https://picsum.photos/1500/1500?random=${picNum}`);
  };

  const toggleOpen = () => {
    setToggle(!toggle); //changes based on opposite of current toggle
  };

  return (
    <div
      className={toggle ? "panel" : "panel open open-active"}
      onClick={() => toggleOpen()}
      style={{ backgroundImage: `url(${pic})` }}
    >
      <p>{props.word1}</p>
      <p>{props.word2}</p>
      <button onClick={() => changePicNum()}>New Pic</button>
    </div>
  );
};

export default Panel;
