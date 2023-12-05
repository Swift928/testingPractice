const {
    capitalize,
    reverseString,
    calculator,
    analyzeArray,
    caesarCipher,
} = require('./testing');

test('The first letter in the string need to be capitalized', () => {
    expect(capitalize('hie')).toBe('Hie');
});

test('Reverses a string', () => {
    expect(reverseString('keith taylor')).toBe('rolyat htiek');
});

test('Makes the correct calculator function', () => {
    expect(calculator.add(5, 5)).toBe(10);
});

test('Makes the correct calculator function', () => {
    expect(calculator.divide(5, 5)).toBe(1);
});

test('Makes the correct calculator function', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
});

test('Returns an object of special numbers relating to the array', () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual({
        average: 5.5,
        min: 1,
        max: 10,
        length: 10,
    });
});

test('Encrypts a sting with a give shift', () => {
    expect(caesarCipher('biRgitte', 3)).toBe('elujlwwh');
});
