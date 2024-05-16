function square(num) {
    if (!isNaN(num)) {
        return num * num
    }

    throw Error("Given parameter is not a number")
}

function power(num, pow) {
    if (!isNaN(num)) {
        return num * num
    }

    return num ** pow
}

module.exports = { square, power }