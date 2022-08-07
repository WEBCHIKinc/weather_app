import './App.css'
import React, { useState } from "react";
import rain from './videos/rain.mp4'
import clouds from './videos/clouds.mp4'

function App() {
  const [video, setVideo] = useState('');
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

  return (
    <div className="App">
      <div className='default-background'></div>
      <div className='rainVideo'><video src={video} autoPlay loop muted /></div>
      <button className='button-test' onClick={() => changeBackgroundVideo(video)}>knopka</button>

      <div className="box">
        <form className='base-form'>
          <input type="text" placeholder='Название города' className='input-town' />
          <button type="submit" className='button-submit'>Узнать погоду</button>
        </form>
      </div>

    </div>
  );
}

export default App;
