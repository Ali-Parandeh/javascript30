const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText));

const mans = document.querySelectorAll('.bod');
console.log(divs);
