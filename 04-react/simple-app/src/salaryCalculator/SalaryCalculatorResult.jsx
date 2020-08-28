//import React, { Component } from 'react';

/* class SalaryCalculatorResult extends Component {
    render() {
        const { basic, hra, da, tax, salary } = this.props;
        const salaryEle = (
            <td className={salary <= 10000 ? 'poorSalary' : 'goodSalary'}>
                {salary}
            </td>
        );
        return (
            <div className="field">
                <table>
                    <tbody>
                        <tr>
                            <td>{basic}</td>
                            <td>{hra}</td>
                            <td>{da}</td>
                            <td>{tax}</td>
                            {salary !== 0 ? salaryEle : null}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
} */

import React from "react";

const SalaryCalculatorResult = (props) => {
    const { basic, hra, da, tax, salary } = props;
    const salaryEle = (
        <td className={salary <= 10000 ? 'poorSalary' : 'goodSalary'}>
            {salary}
        </td>
    );
    return (
        <div className="field">
            <table>
                <tbody>
                    <tr>
                        <td>{basic}</td>
                        <td>{hra}</td>
                        <td>{da}</td>
                        <td>{tax}</td>
                        {salary !== 0 ? salaryEle : null}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default SalaryCalculatorResult;