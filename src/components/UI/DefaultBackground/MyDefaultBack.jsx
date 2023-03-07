import React from "react";
import classes from "./MyDefaultBack.module.css";

const MyDefaultBack = ({theme}) => {
  const rootClasses = [classes.default];

  if (theme === 'light') {
    rootClasses.push(classes.light);
  }

  return <div className={rootClasses.join(" ")}></div>;
};

export default MyDefaultBack;
