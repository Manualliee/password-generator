//for range input slider
const rangeInput = document.getElementById('character-range');
const rangeValue = document.getElementById('range-value');

rangeValue.innerHTML = rangeInput.value;

rangeInput.oninput = function() {
    rangeValue.innerHTML = this.value;
}

rangeInput.addEventListener("mousemove", function() {
    var x = rangeInput.value;
    var color = 'linear-gradient(90deg, hsl(127, 100%, 82%)' + x * 5 + '%, hsl(248, 15%, 11%)' + x * 5 + '%)';

    rangeInput.style.background = color;
})

//for password generator
const newPassword = document.getElementById('password');
const strengthLevel = document.getElementById('strength-level');
const inputUppercase = document.querySelector('#uppercase');
const inputLowercase = document.querySelector('#lowercase');
const inputNumbers = document.querySelector('#numbers');
const inputSymbols = document.querySelector('#symbols');
const generateButton = document.getElementById('generate-button');
const barOne = document.getElementById('bar-one');
const barTwo = document.getElementById('bar-two');
const barThree = document.getElementById('bar-three');
const barFour = document.getElementById('bar-four');

generateButton.addEventListener('click', function(e) {
    e.preventDefault();

    //reset copied visibility
    copiedPassword.style = "visibility: hidden";

    let mixedCharacters = '';
    let result = '';
    const error = document.getElementById('heading');
    const passwordUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const passwordLowercase = 'abcdefghijklmnopqrstuvwxyz';
    const passwordNumbers = '0123456789';
    const passwordSymbols = '!@#$%^&*()+=?<>{}[]~`_-;';
    let counter = 0;

    switch (true) {
        case inputUppercase.checked || inputLowercase.checked || inputNumbers.checked || inputSymbols.checked :
            error.innerHTML = "Password Generator";
            error.style.color = "hsl(251, 9%, 53%)";

            if (rangeInput.value == 0) {
                error.innerHTML = "Please select at least one option.";
                error.style.color = "hsl(0, 91%, 63%)";
            }

            if (inputUppercase.checked && inputLowercase.checked && inputNumbers.checked && inputSymbols.checked) {
                mixedCharacters += mixedCharacters.concat(passwordUppercase, passwordLowercase, passwordNumbers, passwordSymbols);
            }

            if (inputUppercase.checked && inputLowercase.checked && inputNumbers.checked && !inputSymbols.checked) {
                mixedCharacters += mixedCharacters.concat(passwordUppercase, passwordLowercase, passwordNumbers);
            }

            if (inputUppercase.checked && inputLowercase.checked && !inputNumbers.checked && !inputSymbols.checked) {
                mixedCharacters += mixedCharacters.concat(passwordUppercase, passwordLowercase);
            }

            if (inputUppercase.checked && !inputLowercase.checked && !inputNumbers.checked && !inputSymbols.checked) {
                mixedCharacters += mixedCharacters.concat(passwordUppercase);
            }

            if (!inputUppercase.checked && inputLowercase.checked && !inputNumbers.checked && !inputSymbols.checked) {
                mixedCharacters += mixedCharacters.concat(passwordLowercase);
            }

            if (!inputUppercase.checked && !inputLowercase.checked && inputNumbers.checked && !inputSymbols.checked) {
                mixedCharacters += mixedCharacters.concat(passwordNumbers);
            }

            if (!inputUppercase.checked && !inputLowercase.checked && !inputNumbers.checked && inputSymbols.checked) {
                mixedCharacters += mixedCharacters.concat(passwordSymbols);
            }

            if (!inputUppercase.checked && inputLowercase.checked && inputNumbers.checked && inputSymbols.checked) {
                mixedCharacters += mixedCharacters.concat(passwordLowercase, passwordNumbers, passwordSymbols);
            }

            if (inputUppercase.checked && !inputLowercase.checked && inputNumbers.checked && inputSymbols.checked) {
                mixedCharacters += mixedCharacters.concat(passwordUppercase, passwordNumbers, passwordSymbols);
            }

            if (inputUppercase.checked && inputLowercase.checked && !inputNumbers.checked && inputSymbols.checked) {
                mixedCharacters += mixedCharacters.concat(passwordUppercase, passwordLowercase, passwordSymbols);
            }

            if (inputUppercase.checked && !inputLowercase.checked && inputNumbers.checked && !inputSymbols.checked) {
                mixedCharacters += mixedCharacters.concat(passwordUppercase, passwordNumbers);
            }

            if (inputUppercase.checked && !inputLowercase.checked && !inputNumbers.checked && inputSymbols.checked) {
                mixedCharacters += mixedCharacters.concat(passwordUppercase, passwordSymbols);
            }

            if (!inputUppercase.checked && inputLowercase.checked && inputNumbers.checked && !inputSymbols.checked) {
                mixedCharacters += mixedCharacters.concat(passwordLowercase, passwordNumbers);
            }

            if (!inputUppercase.checked && inputLowercase.checked && !inputNumbers.checked && inputSymbols.checked) {
                mixedCharacters += mixedCharacters.concat(passwordLowercase, passwordSymbols);
            }

            if (!inputUppercase.checked && !inputLowercase.checked && inputNumbers.checked && inputSymbols.checked) {
                mixedCharacters += mixedCharacters.concat(passwordNumbers, passwordSymbols);
            }


            break;
        
        default:
            error.innerHTML = "Please select at least one option.";
            error.style.color = "hsl(0, 91%, 63%)";
            break;
    }

    const charactersLength = mixedCharacters.length;

    while (counter < rangeInput.value) {
      result += mixedCharacters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    
    newPassword.innerHTML = result;
    newPassword.style.color = "hsl(252, 11%, 91%)";

    if (rangeInput.value >= 0 && rangeInput.value <= 5) {
        strengthLevel.innerHTML = "WEAK";

        barOne.style.backgroundColor = "hsl(0, 91%, 63%)";
        barOne.style.border = "1px solid hsl(0, 91%, 63%)";

        barTwo.style.backgroundColor = "transparent";
        barTwo.style.border = "1px solid hsl(252, 11%, 91%)";

        barThree.style.backgroundColor = "transparent";
        barThree.style.border = "1px solid hsl(252, 11%, 91%)";

        barFour.style.backgroundColor = "transparent";
        barFour.style.border = "1px solid hsl(252, 11%, 91%)";


    } 
    
    if (rangeInput.value >= 6 && rangeInput.value <= 10) {
        strengthLevel.innerHTML = "BETTER";

        barOne.style.backgroundColor = "hsl(13, 95%, 66%)";
        barOne.style.border = "1px solid hsl(13, 95%, 66%)";

        barTwo.style.backgroundColor = "hsl(13, 95%, 66%)";
        barTwo.style.border = "1px solid hsl(13, 95%, 66%)";

        barThree.style.backgroundColor = "transparent";
        barThree.style.border = "1px solid hsl(252, 11%, 91%)";

        barFour.style.backgroundColor = "transparent";
        barFour.style.border = "1px solid hsl(252, 11%, 91%)";

    }
    
    if (rangeInput.value >= 11 && rangeInput.value <= 15) {
        strengthLevel.innerHTML = "GOOD";

        barOne.style.backgroundColor = "hsl(42, 91%, 68%)";
        barOne.style.border = "1px solid hsl(42, 91%, 68%)";

        barTwo.style.backgroundColor = "hsl(42, 91%, 68%)";
        barTwo.style.border = "1px solid hsl(42, 91%, 68%)";

        barThree.style.backgroundColor = "hsl(42, 91%, 68%)";
        barThree.style.border = "1px solid hsl(42, 91%, 68%)";

        barFour.style.backgroundColor = "transparent";
        barFour.style.border = "1px solid hsl(252, 11%, 91%)";

    } 
    
    if (rangeInput.value >= 16 && rangeInput.value <= 20) {
        strengthLevel.innerHTML = "STRONG";

        barOne.style.backgroundColor = "hsl(127, 100%, 82%)";
        barOne.style.border = "1px solid hsl(127, 100%, 82%)";

        barTwo.style.backgroundColor = "hsl(127, 100%, 82%)";
        barTwo.style.border = "1px solid hsl(127, 100%, 82%)";

        barThree.style.backgroundColor = "hsl(127, 100%, 82%)";
        barThree.style.border = "1px solid hsl(127, 100%, 82%)";

        barFour.style.backgroundColor = "hsl(127, 100%, 82%)";
        barFour.style.border = "1px solid hsl(127, 100%, 82%)";
    }

});

//copy to clipboard
const copiedPassword = document.getElementById('copied');

function copyPassword() {
    navigator.clipboard.writeText(newPassword.innerHTML);
    copiedPassword.style = "visibility: visible";
}
