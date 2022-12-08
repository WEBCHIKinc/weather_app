import React from "react";
import { useSelector } from "react-redux";
import classes from "./MyVideoBack.module.css";

const MyVideoBack = ({ dispatch }) => {
  const video = useSelector((state) => state.video);

  return (
    <div className={classes.video}>
      <video src={video} autoPlay loop muted />
    </div>
  );
};

export default MyVideoBack;
