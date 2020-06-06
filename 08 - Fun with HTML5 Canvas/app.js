const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let hue = 0;

context.strokeStyle = "#BADA55";
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 50;

let isDrawingFlag = false;
let lastX = 0;
let lastY = 0;
let direction = true;

function draw(e) {
    if (!isDrawingFlag) return; // stops the function from running when user doesn't have mouse down.
    console.log(e);
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    context.beginPath();
    // start from
    context.moveTo(lastX, lastY);
    // go to
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY] // destructring
    hue++;
    if (hue % 360 == 0) {
        hue = 0;
    }

    // Flip the direction if line width gets to 100 and when it gets to 1.
    if (context.lineWidth >= 100 || context.lineWidth <= 1) {
        direction = !direction
    }

    if (direction) {
        context.lineWidth++;
    } else {
        context.lineWidth--;
    }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawingFlag = true;
    [lastX, lastY] = [e.offsetX, e.offsetY] // destructring
});
canvas.addEventListener('mouseup', () => isDrawingFlag = false);
canvas.addEventListener('mouseout', () => isDrawingFlag = false);