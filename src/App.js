import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import DataBox from "./components/DataBox";
import InputBox from "./components/InputBox";
import MyErrorBox from "./components/UI/AlertBox/MyErrorBox";
import MyDefaultBack from "./components/UI/DefaultBackground/MyDefaultBack";

function App() {
  const { weatherData, isError } = useSelector((state) => state.weather);

  return (
    <div className="App">
      <MyDefaultBack />
      <CSSTransition
        in={isError}
        classNames={"alert"}
        timeout={1000}
        unmountOnExit
      >
        <MyErrorBox />
      </CSSTransition>
      {weatherData ? <DataBox /> : <InputBox />}
    </div>
  );
}

export default App;
