const inputs = document.querySelectorAll('.controls input'); // returns a NodeList of inputs
console.log(inputs);

function handleUpdate() {
    // || will ensure we don't return undefined if we do not have data-sizing attribute on the input element
    const suffix = this.dataset.sizing || ""; 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));