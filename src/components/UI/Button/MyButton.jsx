import React from "react";
import classes from "./MyButton.module.css";

const MyButton = ({
  infoPage,
  daily,
  children,
  current,
  themeChanger,
  ...props
}) => {
  const rootClasses = [classes.button];

  if (infoPage) {
    rootClasses.push(classes.onInfo);
  }
  if (daily) {
    rootClasses.push(classes.daily);
  }
  if (current) {
    rootClasses.push(classes.current);
  }
  if (themeChanger) {
    rootClasses.push(classes.themeChanger);
  }

  return (
    <button className={rootClasses.join(" ")} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
