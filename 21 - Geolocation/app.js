const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(data => {
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    console.log(data);
}, err => {
    console.error(err);
    alert("Hey!!! You've got to allow that to happen!");
});