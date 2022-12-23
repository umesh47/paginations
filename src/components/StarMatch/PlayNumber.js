import React from "react";

// import "./PlayNumber.css";
// import "./../../StarMatch.css";
import colors from "./../Util/colors";

const PlayNumber = (props) => {
  const clickHandler = () => props.onClick(props.number, props.status);
  return (
    <button
      className="number"
      style={{ backgroundColor: colors[props.status] }}
      onClick={clickHandler}
    >
      {props.number}
    </button>
  );
};

export default PlayNumber;
