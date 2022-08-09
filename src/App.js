import './App.css'
import React, { useState } from "react";
import rain from './videos/rain.mp4'
import clouds from './videos/clouds.mp4'
import WeatherService from './API/WeatherService';
import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction } from './store/citiesReducer';

function App() {
  const dispatch = useDispatch()
  const [video, setVideo] = useState('');
  const [inputText, setInputText] = useState('');
  const cities = useSelector(state => state.cities)

  const changeBackgroundVideo = (video) => {
    switch (video) {
      case clouds:
        setVideo(rain)
        break;
      case rain:
        setVideo(clouds)
        break;
      default:
        setVideo(clouds)
        break;
    }
  }

  // WeatherService.getWeatherByName(setCities)

  const ChangeCities = (text) => {
    const rValue = new RegExp(text, 'i')
    const newCities = ((cities.filter(city => rValue.test(city.name))))
    console.log(newCities.slice(0, 10));
  }

  return (
    <div className="App">
      <div className='default-background'></div>
      <div className='rainVideo'><video src={video} autoPlay loop muted /></div>
      <button className='button-test' onClick={() => changeBackgroundVideo(video)}>knopka</button>

      <div className="box">
        <form className='base-form'>
          <input
            placeholder='Название города'
            className='input-town'
            onChange={(e) => { ChangeCities(e.target.value) }}
          />
          <button
            type="submit"
            className='button-submit'
          >
            Узнать погоду
          </button>
        </form>
      </div>

    </div>
  );
}

export default App;
