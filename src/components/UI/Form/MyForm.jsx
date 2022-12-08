import React from "react";
import cl from "./MyForm.module.css";

const MyForm = ({ children, ...props }) => {
  return (
    <form className={cl.MyForm} {...props}>
      {children}
    </form>
  );
};

export default MyForm;
