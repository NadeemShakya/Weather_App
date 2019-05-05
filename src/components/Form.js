import React from 'react';

export default class Form extends React.Component {
    render() {
        return(
            <div className = "formDiv">
                <form onSubmit = {this.props.getWeatherData}>
                    <input type="text" name = "city" placeholder = "City" />
                    <input type="text" name = "country" placeholder = "Country"/>
                    <button>View Weather in the given location.</button>
                </form>
            </div>
        );
    }
}