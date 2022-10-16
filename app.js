function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return generatePin();
    }
}
function getPin() {
    digitPin = generatePin();
    // console.log(digitPin);
    const showPin = document.getElementById('show-pin');
    showPin.value = digitPin;

}
document.getElementById('key-pad').addEventListener('click', function (event) {
    let number = event.target.innerText;
    const showNumber = document.getElementById('show-number');
    if (isNaN(number)) {
        if (number == "C") {
            showNumber.value = "";
        }

    }
    else {
        let previousNumber = showNumber.value;
        let newNumber = previousNumber + number;

        showNumber.value = newNumber;
    }
});
function submitMatched() {
    const generatePin = document.getElementById('show-pin').value;
    const typePin = document.getElementById('show-number').value;
    if (generatePin == typePin) {
        document.getElementById('error-messege').style.display = "none";
        document.getElementById('success-messege').style.display = "block";
    }
    else {
        document.getElementById('error-messege').style.display = "block";
        document.getElementById('success-messege').style.display = "none";
    }

}