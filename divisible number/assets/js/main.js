const form = document.querySelector('#form');
const result = document.querySelector('#result');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputnum = e.target.querySelector('#num1');

    const num = Number(inputnum.value);

    const divisible = getDivisible(num);

    result.innerHTML += divisible;
})
function getDivisible(num) {
    if (num % 5 === 0 & num % 3 === 0)
        return `${num} is divisible by 3 and 5`;
    if (num % 3 === 0)
        return `${num} is divisible by 3`;
    if (num % 5 === 0)
        return `${num} is divisible by 5`;
};
