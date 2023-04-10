import React from "react";
import { useSelector } from "react-redux";
import MyCityInput from "./UI/CityInput/MyCityInput";
import MyButton from "./UI/Button/MyButton";
import MyForm from "./UI/Form/MyForm";
import MyBox from "./UI/Box/MyBox";
import MyLoader from "./UI/Loader/MyLoader";
import { useActions } from "../hooks/useActions";

const InputBox = () => {
  const { cityName, isLoading } = useSelector((state) => state.weather);
  const { changeCityName, getWeather, getForecastWeather } = useActions();

  const handleGetWeatherClick = (e) => {
    e.preventDefault();
    getWeather(cityName);
    getForecastWeather(cityName);
    changeCityName("");
  };

  const handleCityNameChange = (e) => {
    const cityName = e.target.value;
    changeCityName(cityName);
  };

  if (isLoading) {
    return <MyLoader />;
  }

  return (
    <MyBox>
      <MyForm>
        <MyCityInput
          placeholder="City..."
          value={cityName}
          onChange={handleCityNameChange}
          spellCheck={false}
        />
        <MyButton type="submit" onClick={handleGetWeatherClick}>
          Go
        </MyButton>
      </MyForm>
    </MyBox>
  );
};

export default InputBox;
