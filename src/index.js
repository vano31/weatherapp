import './style.css';
import {extra} from './extra.js'



let hello = document.createElement('h1');

hello.textContent = 'Hello Citizens of Planet Earth';

hello.classList.add('hello');

document.body.appendChild(hello);

extra.textContent = "If you're reading this, I am dead =)"

document.body.appendChild(extra);