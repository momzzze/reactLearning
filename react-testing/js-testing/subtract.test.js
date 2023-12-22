const subtract = require('./subtract');

// 1+2 == 3
test('adds 1 - 2 to equal 3', () => {
    expect(subtract(1, 2)).toBe(-1)
})

// -1+2 == 1
test('adds -1 - 2 to equal 1', () => {
    expect(subtract(-1, 2)).toBe(-3)
})