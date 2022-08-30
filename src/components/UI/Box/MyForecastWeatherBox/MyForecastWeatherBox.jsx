import React from 'react'
import { useSelector } from 'react-redux'
import MyBox from '../MyBox'

const MyForecastWeatherBox = () => {
  const weatherForecast = useSelector(state => state.weatherForecastData)
  const arrOfindx = [0, 8, 16, 24, 32]

  let weeklyData = weatherForecast.list.filter((el, i) => arrOfindx.some(j => i === j))


  console.log(weeklyData);
  return (

    <div>

    </div>
  )
}

export default MyForecastWeatherBox