import React from "react";

import moment from "moment";
class CalculatorApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,
            hours: 0,
            days: 0,
            fees: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            const fees = this.fetchFees();
            this.setState({ fees: (fees).toFixed(2) });
        });
    }

    fetchFees() {
        let fees = 0;
        let minutes = (this.state.minutes) ? parseInt(this.state.minutes) : 0;
        let hours = (this.state.hours ) ? parseInt(this.state.hours) : 0;
        let days = (this.state.days) ? parseInt(this.state.days) : 0;

        // Todo: create and integrate business logic for calculator

        // // Sample integratation
        // const Calculator = require("../src/backend/YOUR_CODE_FILE");
        // let calculator = new Calculator();
        // fees = calculator.calculate(minutes, hours, days);
        
        return fees;
    }

    handleSubmit(event) {
        const fees = this.fetchFees();
        this.setState({ fees: fees });
        event.preventDefault();
    }

    render() {
        return (
            <>
                <div className="container">
                    <main>
                        <div className="py-5 text-center">
                            <img className="d-block mx-auto mb-4" src="https://media.istockphoto.com/vectors/lester-b-pearson-airport-toronto-stamp-vector-id1278682364?s=612x612" alt="" width="100" />
                            <h2 className="text-primary">Airport Parking Lot Calculator</h2>
                            <p className="lead">Toronto International Airport</p>
                        </div>

                        <div className="row g-5">
                            <div className="col-md-5 col-lg-4 order-md-last">
                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="text-primary">Your total</span>
                                </h4>
                                <ul className="list-group mb-3">
                                    <li className="list-group-item d-flex justify-content-between lh-sm">
                                        <div>
                                            <h6 className="my-0">Minutes</h6>
                                        </div>
                                        <span className="text-muted displayed_minutes" id='displayed_minutes'>{this.state.minutes}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-sm">
                                        <div>
                                            <h6 className="my-0">Hours</h6>
                                        </div>
                                        <span className="text-muted displayed_hours" id='displayed_hours'>{this.state.hours}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-sm">
                                        <div>
                                            <h6 className="my-0">Days</h6>
                                        </div>
                                        <span className="text-muted displayed_days" id='displayed_days'>{this.state.days}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-sm">
                                        <div>
                                            <h6 className="my-0">Parking Cost</h6>
                                        </div>
                                        <span className="text-muted parking_cost" id='parking_cost'>C${this.state.fees}</span>
                                    </li>
                                </ul>
                            </div>
                            {this.state.success_message ? <div className="col-md-7 col-lg-8 text-start">
                                <p className="success_message alert-success" id="success_message"> {this.state.success_message}</p>
                            </div> : <div className="col-md-7 col-lg-8 text-start">
                                <h4 className="mb-3 text-primary">Parking Details</h4>
                                <form className="needs-validation" onSubmit={this.handleSubmit}>
                                    <div className="row g-3 " >
                                        <div className="col-sm-4">
                                            <label htmlFor="minutes" className="form-label">Minutes</label>
                                            <input type="number" name="minutes" value={this.state.minutes} onChange={this.handleChange} className="form-control" id="minutes" required min="0" max="59" />
                                        </div>

                                        <div className="col-sm-4">
                                            <label htmlFor="hours" className="form-label">Hours</label>
                                            <input type="number" name="hours" value={this.state.hours} onChange={this.handleChange} className="form-control" id="hours" required min="0" max="23" />
                                        </div>

                                        <div className="col-sm-4">
                                            <label htmlFor="days" className="form-label">Days</label>
                                            <input type="number" name="days" value={this.state.days} onChange={this.handleChange} className="form-control" id="days" required min="0" />
                                        </div>
                                    </div>
                                    <br />
                                    <button id="submit_button" className=" btn btn-primary btn submit_button" type="submit">Calculate</button>
                                </form>
                            </div>}
                        </div>
                    </main>
                </div>
            </>
        );
    }
}
export default CalculatorApp;