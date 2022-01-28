import React from "react";
import { withWeather } from "../context/WeatherProvider";
// import moment from "moment";
import moment from "moment-timezone"
// import "../style.css";


function Header(props) {
    const comments = [
        "Oh, so you want to know what the weather is, eh? Get off your ass and look outside",
        "It’s seriously lame out today.",
        "Oh it’s just freaking beautiful outside. It could be warmer but it’s beautiful.",
        "This is tough mudder weather if you’re a badass, I’m not. I’m going to hide under my freaking bed.",
        "Oh look. The freaking sun came out to play. freaking hooray.",
        "The next person to call it ‘liquid sunshine’ is getting freaking throat punched.",
        "It’s almost warm enough to be freaking decent outside. This is as glass-half-full as I get.",
        "For something so bright, the sun is really freaking dumb.",
        "That bright thing in the sky can go screw itself.",
        "Optimists say, ‘It’s sunny out.’ I say it’s, ‘Meh’.",
        "All of these clouds throw freaking shade, but not as much as your lame ex.",
        "Today, you are basically better off staying inside and walking barefoot on Legos."
    ]
    let num = Math.floor(Math.random() * (comments.length -1))
    const ranNum = comments[num]
    console.log(props.timezone)
  if (props.currently && props.city && props.st8) {
    // const format = "MMMM Do YYYY, HH:MM:SS";
    // const timeStamp = moment.unix(props.currently.time).format(format)
    // const convertTime = moment(props.currently.time * 1000)
    //   .tz(props.forecast.timezone)
    //   .format(format);
    return (
      <div className="header">
        <span>
          Last Updated: {props.convertTime(props.currently.time, "HH:MM:SS z" )}
        </span>
        <span>
          {props.city}, {props.st8}
        </span>
      </div>
    );
  } else {
    return (
      <div className="header">
        <h3>{ranNum}</h3>
      </div>
    );
  }
}

export default withWeather(Header);
