import './App.css'
import React, { useState } from "react";
import rain from './videos/rain.mp4'
import clouds from './videos/clouds.mp4'

function App() {
  const [video, setVideo] = useState(clouds);
  const changeBackgroundVideo = (video) => {
    switch (video) {
      case clouds:
        setVideo(rain)
        break;
      case rain:
        setVideo(clouds)
        break;
      default:
        console.log(`video is not available`);
    }
  }

  return (
    <div className="App">
      <div className='default-background'></div>
      <div className='rainVideo'><video src={video} autoPlay loop muted /></div>
      <button onClick={() => changeBackgroundVideo(video)}>knopka</button>
    </div>
  );
}

export default App;
