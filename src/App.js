import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import DataBox from "./components/DataBox";
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

      {/* <DataBox dispatch={dispatch} /> */}


    </div>
  );
}

export default App;
