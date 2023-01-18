import React from "react";
import classes from "./MyBox.module.css";

const MyBox = ({ londonBox, newYorkBox, kyivBox, children, ...props }) => {
  const rootClasses = [classes.MyBox];

  if (londonBox) {
    rootClasses.push(classes.londonBox);
  }
  if (newYorkBox) {
    rootClasses.push(classes.newYorkBox);
  }
  if (kyivBox) {
    rootClasses.push(classes.kyivBox);
  }

  return (
    <div {...props} className={rootClasses.join(" ")}>
      {children}
    </div>
  );
};

export default MyBox;
