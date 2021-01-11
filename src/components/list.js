import React from "react";
import Buttons from "./button.js";

export default function List({numbers, del = s => s, swapBinary = s => s, swapOctal = s => s, swapHexadecimal = s => s, refresh}) {

    return (
        <ul>
            {numbers.map((i, x) => {
                return <Buttons i={i} x={x} del={del} swapBinary={swapBinary} swapOctal={swapOctal} swapHexadecimal={swapHexadecimal} refresh={refresh}/>
            })}
        </ul>
    );
}