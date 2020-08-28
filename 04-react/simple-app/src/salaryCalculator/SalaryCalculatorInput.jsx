import React from 'react';

const SalaryCalculatorInput = ({ labelText, onValueChange, type = "number", ...restProps }) => (
    <div className="field">
        <label htmlFor="">{labelText}</label>
        <input
            type={type}
            onChange={evt => onValueChange(evt.target.valueAsNumber)}
            {...restProps}
        />
    </div>
);

export default SalaryCalculatorInput;