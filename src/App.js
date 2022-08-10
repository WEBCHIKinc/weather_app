import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import InputBox from "./components/InputBox";
import { changeVideoAction } from "./store/weatherReducer";
import clouds from './videos/clouds.mp4';

function App() {
  const dispatch = useDispatch()
  const video = useSelector(state => state.video)


  const changeBackgroundVideo = (video) => {
    dispatch(changeVideoAction(video))
  }


  return (
    <div className="App">
      <div className='default-background'></div>
      <div className='rainVideo'><video src={video} autoPlay loop muted /></div>
      <button className='button-test' onClick={() => changeBackgroundVideo(clouds)}>knopka</button>

      <InputBox dispatch={dispatch} />

      {/* <div className="box">
        <div className="title">
          <h1>Киев</h1>
          <h2>Пасмурно</h2>
        </div>

        <div className="weather-info-box">
          <h1 style={{ fontSize: '77px', marginLeft: '20px' }}>
            22°
          </h1>
        </div>

        <input
          placeholder='Город...'
          className='input-town on-info'
        // value={cityName}
        // onChange={(e) => { changeCityName(e.target.value) }}
        />
      </div> */}


    </div>
  );
}

export default App;
