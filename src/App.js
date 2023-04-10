import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import DataBox from "./components/DataBox";
import InputBox from "./components/InputBox";
import MyErrorBox from "./components/UI/AlertBox/MyErrorBox";
import MyDefaultBack from "./components/UI/DefaultBackground/MyDefaultBack";
import MiniBox from "./components/MiniBox";
import { useActions } from "./hooks/useActions";
import MyButton from "./components/UI/Button/MyButton";

const DARK_THEME = "dark";
const LIGHT_THEME = "light";
const IP_TYPE = "ip";

function App() {
  const { weatherData, isError } = useSelector((state) => state.weather);
  const { getMainCitiesWeather } = useActions();
  const [currentTheme, setTheme] = useState(
    localStorage.getItem("Theme") || DARK_THEME
  );
  const {
    londonWeatherData,
    kyivWeatherData,
    newYorkWeatherData,
    torontoWeatherData,
    ipWeatherData,
  } = useSelector((state) => state.weather);

  useEffect(() => {
    getMainCitiesWeather();
  }, []);

  const handleThemeChange = (event) => {
    const theme = event.target.textContent;
    setTheme(theme);
    localStorage.setItem("Theme", theme);
  };

  return (
    <div className="App">
      <MyDefaultBack theme={currentTheme} />
      <MyButton themeChanger onClick={handleThemeChange}>
        {currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME}
      </MyButton>
      <CSSTransition
        in={isError}
        classNames={"alert"}
        timeout={1000}
        unmountOnExit
      >
        <MyErrorBox />
      </CSSTransition>
      <MiniBox cityName={"london"} weatherData={londonWeatherData} />
      <MiniBox cityName={"kyiv"} weatherData={kyivWeatherData} />
      <MiniBox cityName={"new york"} weatherData={newYorkWeatherData} />
      <MiniBox cityName={"toronto"} weatherData={torontoWeatherData} />
      <MiniBox
        cityName={ipWeatherData.name}
        weatherData={ipWeatherData}
        type={IP_TYPE}
      />
      {weatherData ? <DataBox /> : <InputBox />}
    </div>
  );
}

export default App;
