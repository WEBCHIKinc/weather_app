import React, { useState } from "react";
import './App.css';
import clouds from './videos/clouds.mp4';
import rain from './videos/rain.mp4';
import WeatherService from './API/WeatherService'

function App() {
  const [video, setVideo] = useState('');
  const [inputText, setInputText] = useState('');

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

  const getWeather = (e) => {
    e.preventDefault(); 
    WeatherService.getWeatherByName(inputText)
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
            value={inputText}
            onChange={(e) => { setInputText(e.target.value) }}
          />
          <button
            type="submit"
            className='button-submit'
            onClick={(e) => getWeather(e)}
          >
            Узнать погоду
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
