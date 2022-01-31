const form = document.querySelector("#form");
const result = document.querySelector("#result");
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputnum1 = e.target.querySelector('#num1');
    const inputnum2 = e.target.querySelector('#num2');

    const vertical = Number(inputnum1.value);
    const horizontal = Number(inputnum2.value);

    const orientation = getOrientation(vertical, horizontal);

    result.innerHTML += `Orientation: ${orientation}`;
}); 

function getOrientation(vertical, horizontal){
    return vertical > horizontal ? "vertical" : "horizontal";
}