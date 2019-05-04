import React from 'react';
import Header from './Header';
export default class Weather extends React.Component {
    
    render() {
        let weather_icon = `http://openweathermap.org/img/w/${this.props.weather_icon}.png`

        return(
            <div className = "weatherDiv">
                <div className = "box-1">
                    {this.props.place && <Header>The weather at {this.props.place} is: </Header>}
                </div>
                <div className = "box-2">
                    {this.props.temperature && <p><span>Temperature : </span>{this.props.temperature} &#8451;</p>}
                    {this.props.max_temp && <p><span>Max Temparature : </span>{this.props.max_temp} &#8451;</p>}
                    {this.props.min_temp && <p><span>Min Temperature : </span>{this.props.min_temp} &#8451;</p>}
                </div>
                <div className = 'box-3'>
                    {this.props.description && <p><span>Description : </span> {this.props.description}</p>}
                    {this.props.wind_speed && <p><span>Wind Speed : </span>{this.props.wind_speed} m/s</p>}
                    {this.props.humidity && <p><span>Humidity :</span> {this.props.humidity}%</p>}
                </div>
                {this.props.message && <span className = "error_message">{this.props.message}</span>}
            </div>
        );
    }
}