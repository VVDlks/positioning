/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const fillElement = document.querySelector('.fill');
let frame = 0;
const framesCount = 120;
const frameDuration = 3000 / framesCount;

const interval = setInterval(() => {
    frame++;
    const progress = (frame / framesCount * 100);
    fillElement.style.width = progress + '%';
    document.querySelector('.text-white').style.clipPath = `polygon(0 0, ${progress}% 0, ${progress}% 100%, 0 100%)`;
    document.querySelector('.text-black').style.clipPath = `polygon(${progress}% 0, 100% 0, 100% 100%, ${progress}% 100%)`;
    if (frame >= framesCount) {
        clearInterval(interval);
    }
}, frameDuration);
