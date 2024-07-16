let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.tab-container');

const end = () => {
    isDown = false;
    // slider.classList.remove('active');
    // adding active class is only for appliying cursor : pointer ; on css
}

const start = (e) => {
    isDown = true;
    // slider.classList.add('active');
    // adding active class is only for applying cursor : pointer ; on css
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

const move = (e) => {
    if(!isDown) return;

    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = (x - startX);
    slider.scrollLeft = scrollLeft - dist;
}

(() => {
    slider.addEventListener('mousedown', start);
    slider.addEventListener('touchstart', start);

    slider.addEventListener('mousemove', move);
    slider.addEventListener('touchmove', move);

    slider.addEventListener('mouseleave', end);
    slider.addEventListener('mouseup', end);
    slider.addEventListener('touchend', end);
})();
