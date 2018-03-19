import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';

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
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    if (city && country){
      this.setState({
        temperature:data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter the values"
      });
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Title />
        <Form getWeather={ this.getWeather }/>
        <Weather temperature={ this.state.temperature }
          city={ this.state.city }
          country={ this.state.country }
          humidity={ this.state.humidity }
          description={ this.state.description }
          error={ this.state.error }
          />
      </div>
    );
  }
}

export default App;
