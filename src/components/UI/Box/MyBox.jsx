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
    rootClasses.push(classes.minibox, classes.londonBox);
  }
  if (newYorkBox) {
    rootClasses.push(classes.minibox, classes.newYorkBox);
  }
  if (kyivBox) {
    rootClasses.push(classes.minibox, classes.kyivBox);
  }
  if (torontoBox) {
    rootClasses.push(classes.minibox, classes.torontoBox);
  }
  if (ipBox) {
    rootClasses.push(classes.minibox, classes.ipBox);
  }

  return (
    <div {...props} className={rootClasses.join(" ")}>
      {children}
    </div>
  );
};

export default MyBox;
