import React from "react";
import classes from "./MyBox.module.css";

const MyBox = ({
  londonBox,
  newYorkBox,
  kyivBox,
  torontoBox,
  ipBox,
  children,
  ...props
}) => {
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
  if (torontoBox) {
    rootClasses.push(classes.torontoBox);
  }
  if (ipBox) {
    rootClasses.push(classes.ipBox);
  }

  return (
    <div {...props} className={rootClasses.join(" ")}>
      {children}
    </div>
  );
};

export default MyBox;
