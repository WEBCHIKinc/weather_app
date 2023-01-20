import React from "react";
import MyBox from "./UI/Box/MyBox";
import { useSelector } from "react-redux";
import MyCurrentWeatherBox from "./UI/Box/CurrentWeatherBox/MyCurrentWeatherBox";
import MyLoader from "./UI/Loader/MyLoader";

const IpCityBox = () => {
 const { ipWeatherData } = useSelector((state) => state.weather);

 if (ipWeatherData)
   return (
     <MyBox ipBox>
       <h1>{ipWeatherData.name}</h1>
       <MyCurrentWeatherBox
         mini={true}
         weatherCityTemp={Math.round(ipWeatherData.main.temp)}
         weatherDescription={ipWeatherData.weather[0].description}
       />
     </MyBox>
   );
 return (
   <MyBox ipBox>
     <MyLoader />
   </MyBox>
 );
};

export default IpCityBox;
