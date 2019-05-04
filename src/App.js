import React from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import DateTime from './components/DateTime';
import Header from './components/Header';
import Footer from './components/Footer';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      place: undefined,
      temperature: undefined,
      max_temp: undefined,
      min_temp: undefined,
      humidity: undefined,
      description: undefined,
      weather_icon: undefined,
      wind_speed: undefined,
      message: undefined
    }
  }
  async getWeatherData(event) {
    event.preventDefault();
    let country = event.target.elements.country.value;
    let city = event.target.elements.city.value;
    let APIKEY = '460aa9fb3b4ece57fb5d94dc910417fa';
    try{
      const apicall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}&units=metric`);
      const response =  await apicall.json();
      if(country && city) {
        if(apicall.ok) {
          console.log(response);
          this.setState({
            place: response.name,
            humidity: response.main.humidity,
            temperature: response.main.temp,
            max_temp: response.main.temp_max,
            min_temp: response.main.temp_min,
            description: response.weather[0].description,
            weather_icon: response.weather[0].icon,
            wind_speed: response.wind.speed,
            message: undefined
          })
        }else {
          this.setState({
            place: undefined,
            humidity: undefined,
            temperature: undefined,
            max_temp: undefined,
            min_temp: undefined,
            description: undefined,
            weather_icon: undefined,
            wind_speed: undefined,
            message: "Sorry, No weather record found for the given location!"
          })
        }

      }else {
        this.setState({
          message: "Oops! Please enter all the location informations correctly."
        })
      }
    }
    catch(err) {
      console.error(err);
    }
  }
  render() {
    return(
    <div>
      <div className = "mainWrapper">
        <DateTime />
        <Header >View the weather of your location.</Header>
        <Form getWeatherData = {this.getWeatherData.bind(this)}/>
        <Weather 
          place = {this.state.place}
          temperature = {this.state.temperature}
          max_temp = {this.state.max_temp}
          min_temp = {this.state.min_temp}
          humidity = {this.state.humidity}
          description = {this.state.description}
          weather_icon = {this.state.weather_icon}
          wind_speed = {this.state.wind_speed}
          message = {this.state.message}
        />
      </div>
      <Footer />
    </div>
    );
  }
}
