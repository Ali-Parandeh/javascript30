const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const clearButton = document.querySelector('.clear');
const removeButton = document.querySelector('.remove');

function addItem(e){
    e.preventDefault();
    
    // looking for name attribute of the form
    text = (this.querySelector('[name=item]')).value; 
    const item = {
        text,
        done: false
    }

    items.push(item);

    populateList(items, itemsList);

    localStorage.setItem('items', JSON.stringify(items));
    
    // clear the form input
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `<li>
            <input type="checkbox" data-index= ${i} 
            ${plate.done ? 'checked' : ''} id="item${i}"/>
            <label for="item${i}">${plate.text}</label>  
        </li>`
    }).join('');
}

function toggleDone(e) {
    // skip any events that are not on an input
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function clearChecks() {
    items.forEach(item => item.done = false)
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function removeItems() {
    while (items.length) {
        items.pop()
    }
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);  
}

populateList(items, itemsList);

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
clearButton.addEventListener('click', clearChecks);
removeButton.addEventListener('click', removeItems);