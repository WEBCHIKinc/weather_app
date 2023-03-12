import { BaseService } from "./BaseService";

export class IpService extends BaseService {
  static serviceHost = "https://ipapi.co";

  static async getWeatherWithIp() {
    return this.request("/json/");
  }
}
