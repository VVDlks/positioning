/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const modal = document.getElementsByClassName('modalMain')[0];
const buttonCls = document.getElementsByClassName('closeModal')[0];
const buttonOpn = document.getElementsByClassName('openModal')[0];

buttonOpn.onclick = () => modal.classList.add('open');
buttonCls.onclick = () => modal.classList.remove('open');
