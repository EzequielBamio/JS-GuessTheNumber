let numberRandom = Math.round(Math.random(1, 10) * 10);

function start() {
    document.getElementById('numberCorrect').innerHTML = '?';
    let number = document.getElementById('number');


    if (number.value != "") {
        if (number.value == numberRandom) {

            document.getElementById('numberCorrect').innerHTML = 'Correct! "' + numberRandom + '". The number changed!';
            numberRandom = Math.round(Math.random(1, 10) * 10);

        } else {
            document.getElementById('numberCorrect').innerHTML = '"' + number.value + '" is wrong, please try again';
        }
    }
}