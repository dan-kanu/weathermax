import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';
import Description from './Components/Description';
import Footer from './Components/Footer';
import OpenWeatherMap from 'react-open-weather-map';
import OpenMap from './Components/OpenMap';


const API_KEY = "6cccbb60692e99f5004192f18bcb6dd5";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    if (city ){
      this.setState({
        temperature:data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon:  `//openweathermap.org/img/w/${data.weather[0].icon}.png`,
        img: <img src={this.state.icon}/>,
        windspeed:data.wind.speed,
        coordLon:data.coord.lon,
        coordLat: data.coord.lat,
        tempmax: data.main.temp_max,
        tempmin: data.main.temp_min,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        windspeed: undefined,
        coordLon: undefined,
        coordLat: undefined,
        tempmax: undefined,
        tempmin: undefined,
        img: undefined,
        error: "Please Enter the values"
      });
    }
  }
  render() {
    return (
      <div className="App">
        {/* Hero Section */}
        <div id="header">
          <div className="container" >
            <div className="row">
              <Title />
            </div>
            <div className="row">
              <Form getWeather={ this.getWeather }/>
              <Weather error={ this.state.error }/>
            </div>
          </div>
        </div>
        {/* Body Section */}
        {/* Section 1 */}
        <div className="intro-credit container">
          <div className="row">
            <h1 id="intro">    </h1>
          </div>
        </div>
        {/* Section 2 */}
        <section className="section-2">
          <div className="container">
            <div className="row">
              <div className="col-md-8" id="">
              <Weather  city={ this.state.city } country={ this.state.country }
              />
              </div>
              <div className="col-md-4" id="temp-container">
                <Weather temperature = { this.state.temperature }/>
                <Weather humidity = { this.state.humidity }
                    description = { this.state.description }
                    windspeed = { this.state.windspeed }
                    tempmax = { this.state.tempmax }
                    tempmin = {this.state.tempmin}
                    img = { this.state.img }
                    coordLat = {this.state.coordLat}
                    coordLon = { this.state.coordLon}
                />
              </div>
            </div>
          </div>
        </section>
        <OpenMap/>
      
          <Footer />
      </div>
    );
  }
}




export default App;