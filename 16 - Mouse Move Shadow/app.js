const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    // Destructuring - Same as 
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    let { offsetX: x, offsetY: y } = e;
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop
    }
    const xwalk = Math.round((x / width * walk) - (walk / 2));
    const ywalk = Math.round((y / height * walk) - (walk / 2));
    const xmove = 3;
    const ymove = 3;

    text.style.textShadow = `
        ${xwalk / xmove}px ${ywalk /ymove }px 0 rgba(255, 0, 255, 0.7),
        ${-xwalk/xmove}px ${ywalk/ ymove}px 0 rgba(0, 255, 255, 0.7),
        ${xwalk/xmove}px ${-ywalk/ymove}px 0 rgba(0, 255, 0, 0.7),
        ${-xwalk/xmove}px ${ywalk/ymove}px 0 rgba(0, 0, 255, 0.7)
    `;

    console.log(x, y, xwalk, ywalk);
}

hero.addEventListener('mousemove', shadow);