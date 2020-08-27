import React, { Component } from 'react';

class SalaryCalculatorInput extends Component {
    render() {
        const { labelText, onValueChange, type = "number", ...restProps } = this.props;
        return (
            <div className="field">
                <label htmlFor="">{labelText}</label>
                <input
                    type="number"
                    type={type}
                    onChange={evt => onValueChange(evt.target.valueAsNumber)}
                    {...restProps}
                />
            </div>
        )
    }
}

export default SalaryCalculatorInput;