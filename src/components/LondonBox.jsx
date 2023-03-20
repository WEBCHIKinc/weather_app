import React from "react";
import { useSelector } from "react-redux";
import MiniBox from "./MiniBox";

const LondonBox = () => {
  const { londonWeatherData } = useSelector((state) => state.weather);
  const cityName = "london";

  return <MiniBox cityName={cityName} weatherData={londonWeatherData} />;
};

export default LondonBox;
