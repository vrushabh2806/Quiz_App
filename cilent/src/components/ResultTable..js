import React from "react";

export default function ResultTable() {
    return (
        <div>
            <table>
                <thead className='table-header'>
                    <tr className='table-row'>
                        <td>Name</td>
                        <td>attempts</td>
                        <td>Earn points</td>
                        <td>Result</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-body'>
                        <td>22IT129</td>
                        <td>03</td>
                        <td>20</td>
                        <td>passed</td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}