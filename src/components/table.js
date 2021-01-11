import React from "react";

export default function Table({numbers, del = s => s, swapBinary = s => s, swapOctal = s => s, swapHexadecimal = s => s }) {

return (
    <table>
        <thead>
        <tr>
            <td>Number</td>
            <td>Binary</td>
            <td>Octal</td>
            <td>Hexadecimal</td>
        </tr>
        </thead>
        <tbody>
        {numbers.map((i, x) => {
            return (
                <tr key={x}>
                    <td>{i}</td>
                    <td>{swapBinary(x)}</td>
                    <td>{swapOctal(x)}</td>
                    <td>{swapHexadecimal(x)}</td>
                </tr>
            )
        })}
    </tbody>
    </table>
);
}