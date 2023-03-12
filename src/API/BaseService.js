import axios from "axios";

export class BaseService {
  static serviceHost = "";
  static defaultConfig = {};

  static buildRequestUrl(endpoint) {
    return `${this.serviceHost}${endpoint}`;
  }

  static async request(endpoint = "", config = {}) {
    try {
      const url = this.buildRequestUrl(endpoint);
      const response = await axios.get(url, {
        ...this.defaultConfig,
        ...config,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}
