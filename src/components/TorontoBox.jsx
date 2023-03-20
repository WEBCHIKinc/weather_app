import React from "react";
import { useSelector } from "react-redux";
import MiniBox from "./MiniBox";

const TorontoBox = () => {
  const { torontoWeatherData } = useSelector((state) => state.weather);
  const cityName = "toronto";

  return <MiniBox cityName={cityName} weatherData={torontoWeatherData} />;
};

export default TorontoBox;
