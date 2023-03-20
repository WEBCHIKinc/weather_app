import React from "react";
import { useSelector } from "react-redux";
import MiniBox from "./MiniBox";

const NewYorkBox = () => {
  const { newYorkWeatherData } = useSelector((state) => state.weather);
  const cityName = "new york";

  return <MiniBox cityName={cityName} weatherData={newYorkWeatherData} />;
};

export default NewYorkBox;
