import { BaseService } from "./BaseService";

export class OpenweathermapService extends BaseService {
  static serviceHost = "https://api.openweathermap.org";
  static defaultConfig = {
    params: {
      units: "metric",
      appid: "d91a703a0a98bfa02281b20354b6c152",
    },
  };

  static buildRequestUrl(endpoint) {
    return `${this.serviceHost}/data/2.5/${endpoint}`;
  }

  static async getWeatherByName(cityName) {
    return this.request(`weather?q=${cityName}`);
  }

  static async getWeatherForecastByName(cityName) {
    return this.request(`forecast?q=${cityName}`);
  }
}
