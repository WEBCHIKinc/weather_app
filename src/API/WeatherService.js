import axios from "axios";

export default class WeatherService {
  static async getWeatherByName(cityName) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}`,
        {
          params: {
            units: "metric",
            appid: "d91a703a0a98bfa02281b20354b6c152",
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }

  static async getWeatherForecastByName(cityName) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}`,
        {
          params: {
            units: "metric",
            appid: "d91a703a0a98bfa02281b20354b6c152",
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }

  static async getWeatherWithIp() {
    try {
      const response = await axios.get("https://ipapi.co/json/");
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }
}
