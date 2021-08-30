'use strict';

let block = document.querySelector('.text');

document.querySelector('.btn1').addEventListener('click', () => {
    block.textContent = block.textContent.replace(/'/g, '"');
});

document.querySelector('.btn2').addEventListener('click', () => {
    block.textContent = block.textContent.replace(/\s'|'\s/g, '"');
});