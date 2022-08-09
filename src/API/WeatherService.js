import axios from "axios";

export default class WeatherService {
    static async getWeatherByName() {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                lat: '33.44',
                lon: '-94.04',
                units:'metric',
                lang:'ru',
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