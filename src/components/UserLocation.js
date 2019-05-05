import React from 'react';
import Header from './Header';
export default class UserLocation extends React.Component {
    render() {
        return(
            <div className = "userLocationDiv">
                <Header> OR </Header>
                <button onClick = {this.props.getUserLocation}  className = "userLocationButton">View weather in my current location.</button>
            </div>
        );
    }
}