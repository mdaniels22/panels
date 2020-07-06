import React from "react";
import "./panels.css";
import Panel from "../panel/panel";

const panels = (props) => {
  return (
    <div className="panels">
      <Panel word1="Lets" word2="Dance" />
      <Panel word1="Give" word2="Take" />
      <Panel word1="Experience" word2="It" />
      <Panel word1="Give" word2="All" />
      <Panel word1="In" word2="Motion" />
    </div>
  );
};

export default panels;
