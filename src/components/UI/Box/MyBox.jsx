import React from "react";
import classes from "./MyBox.module.css";

const MyBox = ({ cityName, type, children, ...props }) => {
  const rootClasses = [classes.MyBox];

  if (cityName === "london") {
    rootClasses.push(classes.minibox, classes.londonBox);
  }
  if (cityName === "new york") {
    rootClasses.push(classes.minibox, classes.newYorkBox);
  }
  if (cityName === "kyiv") {
    rootClasses.push(classes.minibox, classes.kyivBox);
  }
  if (cityName === "toronto") {
    rootClasses.push(classes.minibox, classes.torontoBox);
  }
  if (type === "ip") {
    rootClasses.push(classes.minibox, classes.ipBox);
  }

  return (
    <div {...props} className={rootClasses.join(" ")}>
      {children}
    </div>
  );
};

export default MyBox;
