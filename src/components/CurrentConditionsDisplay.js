// const Skycons = require('react-skycons');
import React from "react";
import Skycons, {SkyconsType} from "react-skycons";
import {withWeather} from "../context/WeatherProvider";
import "../style.css";

class CurrentConditionsDisplay extends React.Component {
    render() {

        const icon = this.props.currently.icon.replace(/-/g, "_").toUpperCase();
        if (this.props.currently) {
            return (
                <section className="current-data-container">

                    <div className="current-data-item">
                        <Skycons
                            // style={{ height: "4em", width: "6em" }}
                            color="white"
                            size={80}
                            resizeClear={false}
                            animate={true}
                            type={icon}/>
                        {this.props.currently.summary}
                        <span className="current-data-item-temp">
            {Math.round(this.props.currently.temperature)}
          </span>
                        <div>
                            Feels Like: {" "}
                            <span className="current-data-item-feels-like">
              {Math.round(this.props.currently.apparentTemperature)}
            </span>
                        </div>
                        <div>
                            Humidity: {" "}
                            <span className="current-data-item-humidity">
                 {Math.round(this.props.currently.humidity * 100)}%
            </span>
                        </div>

                        <div>Precip: {" "}

                            <span className="current-data-item-precip">{this.props.currently.precipProbability * 100}%</span>
                        </div>
                        <div>
                  <span className="current-data-item-wind-speed">
            {Math.round(this.props.currently.windSpeed)} mph | {" "}
                      {this.props.convertBearing(this.props.currently.windBearing)} | {" "}
                      {Math.round(this.props.currently.windGust)} mph (gust)
          </span>
                        </div>
                        <div>Dew Pt: {" "}
                            <span>
                 {Math.round(this.props.currently.dewPoint)}°
            </span>
                        </div>

                        <div>
                            Pressure: {" "}
                            <span>{Math.round(this.props.currently.pressure)}</span>
                            mb {" "}
                        </div>
                            <div>
                                UV Index: {" "}
                                <span>{this.props.currently.uvIndex}</span>
                            </div>
                    </div>
                </section>
            );
        } else {
            return (
                <div>
                    <h1>No data to display.</h1>
                </div>
            );
        }
    }
}

export default withWeather(CurrentConditionsDisplay);
