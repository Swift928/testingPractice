function capitalize(string) {
    return string[0].toUpperCase().concat(string.slice(1));
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

const calculator = {
    add: (a, b) => {
        return a + b;
    },

    subtract: (a, b) => {
        return a - b;
    },

    divide: (a, b) => {
        return a / b;
    },

    multiply: (a, b) => {
        return a * b;
    },
};

function analyzeArray(array) {
    let object = {
        average:
            array.reduce((first, next) => {
                return first + next;
            }) / array.length,

        min: array.reduce((a, b) => {
            return a < b ? a : b;
        }),

        max: array.reduce((a, b) => {
            return a > b ? a : b;
        }),

        length: array.length,
    };

    return object;
}

function caesarCipher(string, shifted) {
    const alphabetArray = Array.from({ length: 26 }, (_, index) =>
        String.fromCharCode(97 + index)
    );

    let shiftAmount = shifted;

    const shiftedAlphabetArray = Array.from({ length: 26 }, (_, index) => {
        const shiftedIndex = (index + shiftAmount) % 26;
        return String.fromCharCode(97 + shiftedIndex);
    });

    let encrypted = Array.from(string.toLowerCase())
        .map((value) => {
            return (value = shiftedAlphabetArray[alphabetArray.indexOf(value)]);
        })
        .join('');

    return encrypted;
}

console.log(caesarCipher('birgitte', 3));

module.exports = {
    capitalize,
    reverseString,
    calculator,
    analyzeArray,
    caesarCipher,
};
