import {asyncWeather} from './promisedata.js';
//import {answer} from './promisedata.js';
import './style.css';
import {food} from './structure.js'



let hello = document.createElement('h1');

hello.textContent = 'Hello Citizens of Planet Earth';

hello.classList.add('hello');

document.body.appendChild(hello);

//extra.textContent = "If you're reading this, I am dead =)"

//document.body.appendChild(extra);


asyncWeather().then(function(response) {
    console.log(response)
})

food.textContent = 'FOOD!'
document.body.appendChild(food);

