import './App.css'
import React from "react";
import rain from './videos/rain.mp4'

function App() {
  return (
    <div className="App">
      <video src={rain} autoPlay loop muted id="rainVideo"/>
      <button>knopka</button>
    </div>
  );
}

export default App;
