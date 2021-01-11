import React from "react";
import List from "./list"
import Table from "./table"
import random_numbers from "./refresh";

export default function Numbers() {

    const [numbers, setNumbers] = React.useState([])
    const [table, setTable] = React.useState(false)
    const [refresh, setRefresh] = React.useState(false)

    React.useEffect(() => {
        randomizeN()
    }, [])

    const randomizeN = () => {
        setNumbers(random_numbers)
        setRefresh(!refresh)
    }

    const del = (x) => {
        let n = [...numbers];
        n.splice(x, 1)
        setNumbers(n)
    }

    const swapBinary = (x) => {
        return parseInt(numbers[x]).toString(2)
    }

    const swapOctal = (x) => {
        return parseInt(numbers[x]).toString(8)
    }

    const swapHexadecimal = (x) => {
        return parseInt(numbers[x]).toString(16)
    }

    return (
        <>
            <button onClick={randomizeN}>Refresh</button>
            <button onClick={() => setTable(!table)}>{!table ? "Table" : "List"}</button>
            {!table
                ? <List numbers={numbers} del={del} swapBinary={swapBinary} swapOctal={swapOctal} swapHexadecimal={swapHexadecimal} refresh={refresh}></List>
                : <Table numbers={numbers} del={del} swapBinary={swapBinary} swapOctal={swapOctal} swapHexadecimal={swapHexadecimal}></Table>
            }
            <footer>Maciej Dudzik s18496 BIU 2021</footer>
        </>
    );
}