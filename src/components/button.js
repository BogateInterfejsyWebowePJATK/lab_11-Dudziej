import React from "react";

export default function Buttons({x, i, del = f => f, swapBinary = f => f, swapOctal = f => f, swapHexadecimal = f => f, refresh}) {

    const [change, doChange] = React.useState("")

    React.useEffect(() => {
        doChange("")
    }, [refresh])

    return (
        <li key={x}>{i}
            <button onClick={() => del(x)}>Remove</button>
            <button onClick={() => doChange(swapBinary(x))}>Binary</button>
            <button onClick={() => doChange(swapOctal(x))}>Octal</button>
            <button onClick={() => doChange(swapHexadecimal(x))}>Hexadecimal</button>
            <b>{change}</b>
        </li>
    )
}