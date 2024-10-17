document.getElementById('inputField').addEventListener('input', function(event) {
    const inputValue = event.target.value; // Get the input value

    // Check if the input is a number
    if (!isNaN(inputValue) && inputValue.trim() !== "") {
        const number = Number(inputValue);
        const binaryValue = number.toString(2); // Convert to binary
        document.getElementById('result').innerHTML = `Number: ${number} | Binary: ${binaryValue}`;

    // Check if the input is a single character
    } else if (inputValue.length === 1) {
        const asciiValue = inputValue.charCodeAt(0); // Convert to ASCII
        document.getElementById('result').innerHTML = `Character: ${inputValue} | ASCII: ${asciiValue}`;

    // Handle invalid input
    } else {
        document.getElementById('result').innerHTML = "Please enter a single character or a number.";
    }
});

// isNaN is a built-in JavaScript function that stands for "is Not a Number."
// The charCodeAt() method returns the Unicode (ASCII) value of a character at a specified index (position) in a string.
// The toString() method converts and returns the value of an object as a string. When used on numbers, it converts the number into a string representation.
