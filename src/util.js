export function randomArray(arr) {
    let arrCopy = [...arr];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arrCopy.splice(Math.random() * arrCopy.length, 1)[0]);
    }
    return result;
}

export function plusArray(size, funcValue) {
    return [...Array(size)].map(_ => funcValue());
}

export function avgSum(arr) {
    if (!arr.length) {
        return 0;
    }
    return arr.reduce((prev, curr) => prev + curr) / arr.length;
}