const say = (n) => {
    if (n % 15 === 0) {
        return 'Fizz Buzz'
    }

    if (n % 3 === 0) {
        return 'Fizz'
    }

    if (n % 5 === 0) {
        return 'Buzz'
    }

    return n
}

module.exports = say