import axios from "axios";

export default class WeatherService {
    static async getWeatherByName(cityName) {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}`, {
            params: {
                units: 'metric',
                lang: 'ru',
                appid: 'd91a703a0a98bfa02281b20354b6c152'
            }
        })
            .then((resp) => {
                console.log(resp.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }
}