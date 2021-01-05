import React from "react";
import "./navbar.css";

const BackDrop = ({ close }) => {
  return <div onClick={close} className="backdrop" />;
};

export default BackDrop;