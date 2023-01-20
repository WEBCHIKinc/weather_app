import React from "react";
import classes from "./MyErrorBox.module.css";

const MyErrorBox = () => {
  return (
    <div className={classes.Box}>
      <h1 style={{ fontSize: "20px" }}>Error</h1>
    </div>
  );
};

export default MyErrorBox;
