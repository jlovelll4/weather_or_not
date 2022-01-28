import React from "react";
import {withWeather} from "../context/WeatherProvider";
import "../style.css";
import Skycons, {SkyconsType} from "react-skycons";

function DailyForecast(props) {
    if (props.daily) {
        return (
            <section className="daily-data-container">
                {props.daily.data.map(data => {
                        return (
                            <div className="daily-data-item">
                                    <Skycons
                                        style={{marginTop: 100}}
                                        color="white"
                                        size={50}
                                        resizeClear={false}
                                        animate={true}
                                        type={data.icon.replace(/-/g, "_").toUpperCase()}
                                    />
                                <span>{props.convertTime(data.time, "dddd")}</span>
                                <span>H: {Math.round(data.temperatureHigh)}</span>
                                <span>L: {Math.round(data.temperatureLow)}</span>
                                    {/*<hr />*/}
                            </div>
                        )
                    })
                }
            < /section>
        );
    } else {
        return <h3>Daily Display</h3>;
    }
}

export default withWeather(DailyForecast);
