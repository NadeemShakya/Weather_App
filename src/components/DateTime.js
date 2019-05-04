import React from 'react';

export default class DateTime extends React.Component {
    constructor() {
        super();
        this.state = {
            hour: (new Date().getHours()) % 12,
            minute: new Date().getMinutes(),
            am_pm: (new Date().getHours() > 12 ? 'p.m.' : 'a.m.') 
        }
    }
    componentDidMount() {
        setInterval(this.updateClock.bind(this), 1000);
    }

    updateClock() {
        this.setState({
            hour: (new Date().getHours()) % 12,
            minute: new Date().getMinutes(),
            am_pm: new Date().getHours() > 12 ? 'p.m.' : 'a.m.' 

        })
    }


    render() {

        return(
            <div className = "dateTime">
                <h2>{`${this.state.hour === 0? this.state.hour + 12 : this.state.hour} :
                    ${this.state.minute < 10? '0' + this.state.minute : this.state.minute}
                    ${this.state.am_pm}`}
                </h2>
            </div>
        );
    }
}