import axios from "axios";

class WeatherService {
  static async appGet(url, config = {}) {
    try {
      const response = await axios.get(url, config);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export class OpenWeatherMap {
  static async getWeatherByName(cityName, type = "weather") {
    return WeatherService.appGet(
      `https://api.openweathermap.org/data/2.5/${type}?q=${cityName}`,
      {
        params: {
          units: "metric",
          appid: "d91a703a0a98bfa02281b20354b6c152",
        },
      }
    );
  }

  static async getWeatherForecastByName(cityName) {
    return this.getWeatherByName(cityName, "forecast");
  }
}

export class IpApi {
  static async getWeatherWithIp() {
    return WeatherService.appGet("https://ipapi.co/json/");
  }
}
