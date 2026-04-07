/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const modal = document.getElementsByClassName('modalMain')[0];
const buttonCls = document.getElementsByClassName('closeModal')[0];
const buttonOpn = document.getElementsByClassName('openModal')[0];
const fillElement = document.querySelector('.fill');
const framesCount = 120;
const frameDuration = 3000 / framesCount;

buttonOpn.onclick = () => {
    modal.classList.add('open');
    let frame = 0;
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
};
buttonCls.onclick = () => modal.classList.remove('open');
