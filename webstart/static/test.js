let text = document.getElementById('text');
let case2 = document.getElementById('case2');
let case1 = document.getElementById('case');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    case1.style.left = value * -1.5 + 'px';
    case2.style.left = value * 1.5 + 'px';
})