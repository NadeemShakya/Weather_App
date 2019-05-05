import React from 'react';

export default class Footer extends React.Component {
    render() {
        return(
            <footer>
                <span>Data extracted from <a href="https://openweathermap.org/">OpenWeatherMap.</a></span>
                <br/>
                <span>Weather App Designed and Developed by Nadeem Shakya.</span>
            </footer>
        );
    }
}