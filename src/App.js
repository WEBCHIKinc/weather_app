import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import './App.css';
import DataBox from "./components/DataBox";
import InputBox from "./components/InputBox";
import MyErrorBox from "./components/UI/AlertBox/MyErrorBox";
import MyDefaultBack from "./components/UI/DefaultBackground/MyDefaultBack";
import MyVideoBack from "./components/UI/VideoBackground/MyVideoBack";


function App() {
  const dispatch = useDispatch()
  const weatherData = useSelector(state => state.weatherData)
  const isError = useSelector(state => state.isError)

  return (
    <div className="App">
      <MyDefaultBack />
      <MyVideoBack />

      <CSSTransition
        in={isError}
        classNames={'alert'}
        timeout={1000}
        unmountOnExit
      >
        <MyErrorBox />
      </CSSTransition>

      {weatherData
        ? <DataBox dispatch={dispatch} />
        : <InputBox dispatch={dispatch} />
      }

    </div>
  );
}

export default App;
