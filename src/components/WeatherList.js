import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import React from "react";
import CurrentConditionsDisplay from "./CurrentConditionsDisplay";
import SummaryDisplay from "./SummaryDisplay";
import HourlyScroll from "./HourlyScroll";
import DailyForecast from "./DailyForecast";
import "../style.css";
import icons from "../shared/icons.js"
import { withWeather } from "../context/WeatherProvider";

function WeatherList(props) {
  if (props.currently) {
    return (
      <Routes>
        <Route path="CurrentSummary" element={<SummaryDisplay />} />
        <Route path="Hourly" element={<HourlyScroll />} />
        <Route path="Daily" element={<DailyForecast />} />
        <Route path="CurrentConditions" render={rProps => <CurrentConditionsDisplay {...rProps} />} element={<CurrentConditionsDisplay />} />
      </Routes>
    );
  } else {
    return <div></div>;
  }
}
export default withWeather(WeatherList);
