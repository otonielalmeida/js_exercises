const form = document.querySelector('#form');
const result = document.querySelector('#result'); 
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputnum1 = e.target.querySelector('#num1');
    const inputnum2 = e.target.querySelector('#num2');

    const num1 = Number(inputnum1.value);
    const num2 = Number(inputnum2.value);

    const highestnum = getHighest(num1, num2);
    result.innerHTML += `Highest num: ${highestnum} <br>`

    if(num1 > num2 ){
        result.innerHTML += 'Number 1 > num2';
    } else {
        result.innerHTML += 'Number 2 > number 1';
    }
});

function getHighest(num1, num2){
    if (num1 > num2) return num1;
    if (num2 > num1) return num2;
}
