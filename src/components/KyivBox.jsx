import React from "react";
import { useSelector } from "react-redux";
import MiniBox from "./MiniBox";

const KyivBox = () => {
  const { kyivWeatherData } = useSelector((state) => state.weather);
  const cityName = "kyiv";

  return <MiniBox cityName={cityName} weatherData={kyivWeatherData} />;
};

export default KyivBox;
