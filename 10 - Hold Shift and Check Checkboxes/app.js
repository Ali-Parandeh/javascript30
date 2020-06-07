const checkboxes = document.querySelectorAll('.inbox input[type= "checkbox"]');

function handleCheckbox(e) {
    // check if shift key is held down
    // and check that the input is being checked
    let inBetweenFlag = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
            if (checkbox === this || checkbox === lastChecked) {
                console.log('got it')
                inBetweenFlag = !inBetweenFlag;
            }

            if (inBetweenFlag) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

// if we're going to use shift to check the rest, we need to know the last checked box
let lastChecked;

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheckbox)
})