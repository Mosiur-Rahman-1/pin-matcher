
// Genarate Random pin Section
//Genarate Random pin button and output screen 

document.getElementById ("generate-pin-btn").addEventListener ("click", function () {

    let randomNumber = Math.round (Math.random () * (9999 - 1000) + 1000);
    document.getElementById ("generate-output-screen").value = randomNumber;
})


// Numberpad section
// Number 0 to 9 button

document.getElementById ("btn-zero").addEventListener ("click", function () {

    let btnZero = document.getElementById ("calculator-output-screen").value += 0;
    let btnZeroNumber = parseInt(btnZero);
    return btnZeroNumber;
})

document.getElementById ("btn-one").addEventListener ("click", function () {

    let btnOne = document.getElementById ("calculator-output-screen").value += 1;
    let btnOneNumber = parseInt(btnOne);
    return btnOneNumber;
})

document.getElementById ("btn-two").addEventListener ("click", function () {

    let btnTwo = document.getElementById ("calculator-output-screen").value += 2;
    let btnTwoNumber = parseInt(btnTwo);
    return btnTwoNumber;
})

document.getElementById ("btn-three").addEventListener ("click", function () {

    let btnThree = document.getElementById ("calculator-output-screen").value += 3;
    let btnThreeNumber = parseInt(btnThree);
    return btnThreeNumber;
})

document.getElementById ("btn-four").addEventListener ("click", function () {

    let btnFour = document.getElementById ("calculator-output-screen").value += 4;
    let btnFourNumber = parseInt(btnFour);
    return btnFourNumber;
})

document.getElementById ("btn-five").addEventListener ("click", function () {

    let btnFive = document.getElementById ("calculator-output-screen").value += 5;
    let btnFiveNumber = parseInt(btnFive);
    return btnFiveNumber;
})

document.getElementById ("btn-six").addEventListener ("click", function () {

    let btnSix = document.getElementById ("calculator-output-screen").value += 6;
    let btnSixNumber = parseInt(btnSix);
    return btnSixNumber;
})

document.getElementById ("btn-seven").addEventListener ("click", function () {

    let btnSeven = document.getElementById ("calculator-output-screen").value += 7;
    let btnSevenNumber = parseInt(btnSeven);
    return btnSevenNumber;
})

document.getElementById ("btn-eight").addEventListener ("click", function () {

    let btnEight = document.getElementById ("calculator-output-screen").value += 8;
    let btnEightNumber = parseInt(btnEight);
    return btnEightNumber;
})

document.getElementById ("btn-nine").addEventListener ("click", function () {

    let btnNine = document.getElementById ("calculator-output-screen").value += 9;
    let btnNineNumber = parseInt(btnNine);
    return btnNineNumber;
})

// Numpad backspace and clear button

document.getElementById ("btn-backspace").addEventListener ("click", function () {

    let btnBackspace = document.getElementById ("calculator-output-screen").value;
    document.getElementById ("calculator-output-screen").value = btnBackspace.substring (0, btnBackspace.length - 1);
})

document.getElementById ("btn-clear").addEventListener ("click", function () {

    let btnClear = document.getElementById ("calculator-output-screen").value = "";
    return btnClear;
})


// Numpad submit, screen output and action message Section

document.getElementById ("submit-button").addEventListener ("click", function () {

    let generateOutputScreen = document.getElementById ("generate-output-screen").value;
    let calculatorOutputScreen = document.getElementById ("calculator-output-screen").value;

    if (generateOutputScreen == calculatorOutputScreen) {

        document.getElementById ("right-message").style.display = "block";
        document.getElementById ("wrong-message").style.display = "none";
    } else {
        document.getElementById ("wrong-message").style.display = "block";
        document.getElementById ("right-message").style.display = "none";

        let actionMessage = document.getElementById ("action-message-number").innerText;
        let actionMessageNumber = parseInt(actionMessage);
        let result = actionMessageNumber - 1;
        document.getElementById ("action-message-number").innerText = result;

        if (result === 0) {
            document.getElementById ("submit-button").style.opacity = 0.6;
            document.getElementById ("submit-button").disabled = true;
            document.getElementById ("action-message-number").style.display = "none";
            document.getElementById ("action-message").innerText = "Please refresh the Browser and try again";
        }
    }
})