const timeNodes = document.querySelectorAll('[data-time]');
const totalTime = Array.from(timeNodes)
    .reduce((acc, curr) => {
        const [min, sec] = curr.dataset.time
            .split(':')
            .map(parseFloat);
        
        curr = min*60 + sec
        return acc + curr;
    }, 0);

const hour = Math.floor(totalTime / 3600);
const min = Math.floor((totalTime % 3600) / 60);
const sec = (totalTime % 60);

console.log(`${hour}:${min}:${sec}`);
