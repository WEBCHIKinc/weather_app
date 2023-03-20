import React from "react";
import { useSelector } from "react-redux";
import MiniBox from "./MiniBox";

const IpCityBox = () => {
  const { ipWeatherData } = useSelector((state) => state.weather);
  const cityName = ipWeatherData.name;

  return (
    <MiniBox cityName={cityName} weatherData={ipWeatherData} type={"ip"} />
  );
};

export default IpCityBox;
