import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import DataBox from "./components/DataBox";
import InputBox from "./components/InputBox";
import MyDefaultBack from "./components/UI/DefaultBackground/MyDefaultBack";
import MyVideoBack from "./components/UI/VideoBackground/MyVideoBack";

function App() {
  const dispatch = useDispatch()
  const weatherData = useSelector(state => state.weatherData)

  return (
    <div className="App">
      <MyDefaultBack />
      <MyVideoBack />

      {weatherData
        ? <DataBox dispatch={dispatch} />
        : <InputBox dispatch={dispatch} />
      }
    </div>
  );
}

export default App;
