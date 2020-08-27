import React, { Component } from 'react';
import SalaryCalculatorInput from './SalaryCalculatorInput';
import SalaryCalculatorResult from './SalaryCalculatorResult';
import './index.css';

class SalaryCalculator extends Component {
    state = {
        basic: 0,
        hra: 0,
        da: 0,
        tax: 0,
        salary: 0
    };

    onBtnCalculateClick = () => {
        const { basic, hra, da, tax } = this.state;
        const gross = basic + hra + da,
            net = gross * ((100 - tax) / 100);
        this.setState({ salary: net })
    }

    render() {
        const { basic, hra, da, tax, salary } = this.state;
        return (
            <section>
                <SalaryCalculatorInput
                    labelText="Basic"
                    onValueChange={value => this.setState({ basic: value })}
                />
                <SalaryCalculatorInput
                    labelText="HRA"
                    onValueChange={value => this.setState({ hra: value })}
                />
                <SalaryCalculatorInput
                    labelText="DA"
                    onValueChange={value => this.setState({ da: value })}
                />
                <SalaryCalculatorInput
                    labelText="Tax :"
                    onValueChange={value => this.setState({ tax: value })}
                    type="range"
                    min="0" max="30" defaultValue="0"
                />
                <div className="field">
                    <input type="button" value="Calculate" onClick={this.onBtnCalculateClick} />
                </div>
                <SalaryCalculatorResult {...this.state} />
            </section>
        )
    }
}

export default SalaryCalculator;