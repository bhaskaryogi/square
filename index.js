function square(num) {
    if (!isNaN(num)) {
        return num * num
    }

    throw Error("Given parameter is not a number")
}

module.exports = square