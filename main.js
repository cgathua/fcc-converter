const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const outputDisplay = document.getElementById('output');

const numeralsObject = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
};

convertButton.addEventListener('click', () => {
    if (!numberInput.value) {
        outputDisplay.style.display = 'block';
        outputDisplay.textContent = 'Please enter a valid number';
    } else if (numberInput.value.includes(-1)) {
        outputDisplay.style.display = 'block';
        outputDisplay.textContent = 'Please enter a number greater than or equal to 1';
        return;
    } else if (numberInput.value >= 4000) {
        outputDisplay.style.display = 'block';
        outputDisplay.textContent = 'Please enter a number less than or equal to 3999';
        return;
    } else {
        romanNumeralConverter(numberInput.value);
        numberInput.value = '';

        function romanNumeralConverter(num) {
            let number = parseInt(num);
            let result = '';
            let convertedNumerals = Object.keys(numeralsObject);
            convertedNumerals.forEach((key) => {
                while (numeralsObject[key] <= number) {
                    number -= numeralsObject[key];
                    result += key;
                }
            });
            outputDisplay.style.display = 'block';
            outputDisplay.textContent = result;
        }
    }
});

