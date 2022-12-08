import React from 'react'
import { useSelector } from 'react-redux'
import MyBox from '../MyBox'
import classes from './MyForecastWeatherBox.module.css'

const MyForecastWeatherBox = () => {
  const weatherForecast = useSelector(state => state.weatherForecastData)
  const arrOfindx = [0, 8, 16, 24, 32]
  let weeklyData = weatherForecast.list.filter((el, i) => arrOfindx.some(j => i === j))

  return (
    <div className={classes.weather}>
      {weeklyData.map((arr) => (
        <div className={classes.minibox} key={arr.dt}>
          <p style={{ fontSize: '27px', marginBottom: '15px', marginTop: '10px' }}>
            {arr.dt_txt.slice(8, 10)}
          </p>
          <h1 style={{ fontSize: '33px' }}>
            {`${Math.round(arr.main.temp)}°`}
          </h1>
          <img src={`http://openweathermap.org/img/wn/${arr.weather[0].icon}@2x.png`} alt="" width={85} />
        </div>
      ))}
    </div>
  )
}

export default MyForecastWeatherBox