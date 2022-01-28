import React from "react";
import { withWeather } from "../context/WeatherProvider";
import "../style.css";
import Button from "../styled_components/Button";

class LocationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "Pinson",
      st8: "AL"
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getCoords(this.state.city, this.state.st8);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit} id="form">
          <input
            placeholder="City"
            defaultValue="Huntsville"
            name="city"
            onChange={this.onChange}
            type="text"
            color={"blue"}
          />
          <input
            placeholder="State"
            name="st8"
            defaultValue="AL"
            onChange={this.onChange}
            type="text"
          />
          <Button>Get Weather</Button>
          {/*<button className="button">Get Weather</button>*/}
        </form>
      </div>
    );
  }
}
export default withWeather(LocationForm);
