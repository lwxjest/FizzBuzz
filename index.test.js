const say = require('./index.js')

test('say() returns fizz if its a factor of 3', () => {
    expect(say(3)).toEqual('Fizz')
})

test('say() returns buzz if its a factor of 5', () => {
    expect(say(5)).toEqual('Buzz')
})

test('say() returns fizz if its a factor of 3', () => {
    expect(say(15)).toEqual('Fizz Buzz')
})

test('say() returns the number if its not a factor of 3 or 5', () => {
    expect(say(4)).toEqual(4)
})