import './style.css';

let hello = document.createElement('h1');

hello.textContent = 'Hello Citizens of Planet Earth';

hello.classList.add('hello');

document.body.appendChild(hello);