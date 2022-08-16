import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import DataBox from "./components/DataBox";
import InputBox from "./components/InputBox";

function App() {
  const dispatch = useDispatch()
  const video = useSelector(state => state.video)
  const weatherData = useSelector(state => state.weatherData)

  return (
    <div className="App">
      <div className='default-background'></div>
      <div className='video'><video src={video} autoPlay loop muted /></div>

      {weatherData
        ? <DataBox dispatch={dispatch} />
        : <InputBox dispatch={dispatch} />
      }
    </div>
  );
}

export default App;
