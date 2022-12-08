import React from "react";
import classes from "./MyLoader.module.css";

const MyLoader = () => {
  return (
    <div className={classes["lds-default"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default MyLoader;
