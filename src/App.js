import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import DataBox from "./components/DataBox";
import InputBox from "./components/InputBox";
import MyErrorBox from "./components/UI/AlertBox/MyErrorBox";
import MyDefaultBack from "./components/UI/DefaultBackground/MyDefaultBack";
import LondonBox from "./components/LondonBox";
import NewYorkBox from "./components/NewYorkBox";
import KyivBox from "./components/KyivBox";
import IpCityBox from "./components/IpCityBox";
import { useActions } from "./hooks/useActions";
import TorontoBox from "./components/TorontoBox";
import MyButton from "./components/UI/Button/MyButton";

function App() {
  const { weatherData, isError } = useSelector((state) => state.weather);
  const { getMainCitiesWeather } = useActions();
  const [theme, setTheme] = useState(localStorage.getItem("Theme") || "dark");

  useEffect(() => {
    getMainCitiesWeather();
  }, []);

  const handleThemeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(theme);
    localStorage.setItem("Theme", theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="App">
      {theme === "light" ? (
        <MyDefaultBack theme={"light"} />
      ) : (
        <MyDefaultBack theme={"dark"} />
      )}
      <MyButton themeChanger onClick={handleThemeChange}>
        {theme}
      </MyButton>
      <CSSTransition
        in={isError}
        classNames={"alert"}
        timeout={1000}
        unmountOnExit
      >
        <MyErrorBox />
      </CSSTransition>
      <LondonBox />
      <NewYorkBox />
      <KyivBox />
      <TorontoBox />
      <IpCityBox />
      {weatherData ? <DataBox /> : <InputBox />}
    </div>
  );
}

export default App;
