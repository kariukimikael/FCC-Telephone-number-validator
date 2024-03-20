/* Valid formats for US phone numbers

*/
const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const validRegex = [
    // 1 555-555-5555
    /^1 \d{3}-\d{3}-\d{4}$/,

    // 1 (555)555-5555
    /^1 \(\d{3}\)\d{3}-\d{4}$/,

    // 1(555)555-5555
    /^1\(\d{3}\)\d{3}-\d{4}$/,

    // 1 555 555 5555
    /^1 \d{3} \d{3} \d{4}$/,

    // 5555555555
    /^\d{10}$/,

    // 555-555-5555
    /^\d{3}-\d{3}-\d{4}$/,

    // (555)555-5555
    /^\(\d{3}\)\d{3}-\d{4}$/,

    // 1 (555) 555-5555
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
];

const isValidFormat = (str) => validRegex.some((regex) => regex.test(str));

checkButton.addEventListener('click', () => {
    if (userInput.value === '') {
        alert('Please provide a phone number');
        return;
    }
    resultsDiv.textContent = isValidFormat(userInput.value)
        ? `Valid US number: ${userInput.value}`
        : `Invalid US number: ${userInput.value}`;
    userInput.value = '';
});

clearButton.addEventListener('click', () => {
    resultsDiv.textContent = '';
});
