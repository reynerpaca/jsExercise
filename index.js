
function fizzBuzz() {

    let n = document.getElementById('fnum').value;
    let number = [];
    for (num = 1; num <= n; num++) {

        number.push(num);
        if (num % 5 == 0 && num % 3 == 0) {

            number.push('FizzBuzz');

        } else if (num % 3 == 0) {
            number.push('Fizz');
        } else if (num % 5 == 0) {

            number.push('Buzz');
        }

    }

    let result = document.getElementById('result').innerHTML = number;

}

function script() {


    let word = document.getElementById('fscpt').value;
    let result2 = word;
    word = word.slice(4, 11);

    if (word == 'script') {

        result2 = document.getElementById('result-2').innerHTML = result2 + ':' + ' true';
        console.log('good')
    } else {
        result2 = document.getElementById('result-2').innerHTML = result2 + ':' + ' false';
        console.log('bad')
    }
}

function leapYear() {

    let year = document.getElementById('fleapY').value;
    let result3 = year;
    if (year % 4 == 0 && year % 100 == 0) {

        result3 = document.getElementById('result-3').innerHTML = result3 + ':' + ' is not a leap year';
    } else if (year % 400 == 0 || year % 4 == 0) {

        result3 = document.getElementById('result-3').innerHTML = result3 + ':' + ' is a leap year';

    } else {
        result3 = document.getElementById('result-3').innerHTML = result3 + ':' + ' not a leap year';
    }
}