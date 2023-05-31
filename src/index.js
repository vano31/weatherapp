import {asyncWeather, randomCities} from './promisedata.js';
import {fullPage, menuBar, searchSection, buttonSection, dataSection, dataSectionTop, dataSectionBottom, mapSection, searchBar, searchButton, locationHeading, currentTemperature, conditionIcon, lastUpdated, temperatureSwitchButton, conditionInfoHeading, uvBox, humidityBox, windBox, cloudBox, randomButton, refreshButton, mapHolder} from './structure.js';
import './style.css';
//const cities = window.require('all-the-cities');


/*
asyncWeather('san diego').then(function(response) {
    console.log(response)
})
*/

let currentWeather = {
    
};



///////////////////////////////////////////Global Functions

let loadLastSearchToDom = function() {

    let lastWeatherJson = localStorage.getItem('currentWeather');
    let lastWeather = JSON.parse(lastWeatherJson);
    currentWeather = lastWeather;
    asyncWeather(currentWeather.name).then(function(response) {
        //console.log(response);
        currentWeather.officialName = response.location.name;
        currentWeather.region = response.location.region;
        currentWeather.country = response.location.country;
        currentWeather.lat = response.location.lat;
        currentWeather.lon = response.location.lon;
        currentWeather.tempF = response.current.temp_f;
        currentWeather.tempC = response.current.temp_c;
        currentWeather.conditionText = response.current.condition.text;
        currentWeather.conditionIcon = 'https://' + ((response.current.condition.icon).split('//'))[1];
        currentWeather.humidity = response.current.humidity;
        currentWeather.wind = response.current.wind_mph;
        currentWeather.cloud = response.current.cloud;
        currentWeather.uv = response.current.uv;
        currentWeather.lastUpdated = new Date();

        return currentWeather

    }).then(function(currentWeather) {

        console.log(`Just Checking`);
        displayCurrentWeatherToDom();
        saveLastSearched();

        /*

        for (const property in currentWeather  ) {
            console.log(currentWeather[property]);
        }
        */
        //return currentWeather

    })

    
    console.log(currentWeather);
    return currentWeather;




}


let displayCurrentWeatherToDom = function() {

    locationHeading.textContent = `${currentWeather.officialName}, ${currentWeather.region}, ${currentWeather.country}`;
    currentTemperature.textContent = `${currentWeather.tempF} degrees F`;

    conditionIcon.src = `${currentWeather.conditionIcon}`;
    conditionInfoHeading.textContent = `${currentWeather.conditionText} in ${currentWeather.officialName}`;

    lastUpdated.textContent = `Last Updated on ${currentWeather.lastUpdated}`;

    uvBox.textContent = `${currentWeather.uv}`;
    humidityBox.textContent = `${currentWeather.humidity}`;
    windBox.textContent = `${currentWeather.wind}`;
    cloudBox.textContent = `${currentWeather.cloud}`;




}

let saveLastSearched = function() {

    let currentWeatherJson = JSON.stringify(currentWeather);
    localStorage.setItem('currentWeather', currentWeatherJson);


}




//////////////////////////////////////////////



document.body.appendChild(fullPage);


if (localStorage.getItem('currentWeather')) {
    loadLastSearchToDom();

}

searchButton.addEventListener('click', function() {

    currentWeather.name = searchBar.value;
    asyncWeather(currentWeather.name).then(function(response) {
        //console.log(response);
        currentWeather.officialName = response.location.name;
        currentWeather.region = response.location.region;
        currentWeather.country = response.location.country;
        currentWeather.lat = response.location.lat;
        currentWeather.lon = response.location.lon;
        currentWeather.tempF = response.current.temp_f;
        currentWeather.tempC = response.current.temp_c;
        currentWeather.conditionText = response.current.condition.text;
        currentWeather.conditionIcon = 'https://' + ((response.current.condition.icon).split('//'))[1];
        currentWeather.humidity = response.current.humidity;
        currentWeather.wind = response.current.wind_mph;
        currentWeather.cloud = response.current.cloud;
        currentWeather.uv = response.current.uv;
        currentWeather.lastUpdated = new Date();

        return currentWeather

    }).then(function(currentWeather) {

        console.log(`Just Checking`);
        displayCurrentWeatherToDom();
        saveLastSearched();

        /*

        for (const property in currentWeather  ) {
            console.log(currentWeather[property]);
        }
        */
        
        //return currentWeather

    })

    
    console.log(currentWeather);
    return currentWeather;

    //displayCurrentWeatherToDom();

})

temperatureSwitchButton.addEventListener('click', function() {

    if (currentTemperature.textContent === `${currentWeather.tempF} degrees F`) {

        currentTemperature.textContent = `${currentWeather.tempC} degrees C`;

    }   else if (currentTemperature.textContent === `${currentWeather.tempC} degrees C`) {

        currentTemperature.textContent = `${currentWeather.tempF} degrees F`

    }

})

refreshButton.addEventListener('click', function() {

    asyncWeather(currentWeather.name).then(function(response) {
        //console.log(response);
        currentWeather.officialName = response.location.name;
        currentWeather.region = response.location.region;
        currentWeather.country = response.location.country;
        currentWeather.lat = response.location.lat;
        currentWeather.lon = response.location.lon;
        currentWeather.tempF = response.current.temp_f;
        currentWeather.tempC = response.current.temp_c;
        currentWeather.conditionText = response.current.condition.text;
        currentWeather.conditionIcon = 'https://' + ((response.current.condition.icon).split('//'))[1];
        currentWeather.humidity = response.current.humidity;
        currentWeather.wind = response.current.wind_mph;
        currentWeather.cloud = response.current.cloud;
        currentWeather.uv = response.current.uv;
        currentWeather.lastUpdated = new Date();

        return currentWeather

    }).then(function(currentWeather) {

        console.log(`Just Checking`);
        displayCurrentWeatherToDom();
        saveLastSearched();

        /*

        for (const property in currentWeather  ) {
            console.log(currentWeather[property]);
        }
        */
        
        //return currentWeather

    })

    
    console.log(currentWeather);
    return currentWeather;

    //displayCurrentWeatherToDom();



})

randomButton.addEventListener('click', function() {

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

    let randomNumber = getRandomIntInclusive(0, randomCities.length);

    currentWeather.name = randomCities[randomNumber];

    asyncWeather(currentWeather.name).then(function(response) {
        //console.log(response);
        currentWeather.officialName = response.location.name;
        currentWeather.region = response.location.region;
        currentWeather.country = response.location.country;
        currentWeather.lat = response.location.lat;
        currentWeather.lon = response.location.lon;
        currentWeather.tempF = response.current.temp_f;
        currentWeather.tempC = response.current.temp_c;
        currentWeather.conditionText = response.current.condition.text;
        currentWeather.conditionIcon = 'https://' + ((response.current.condition.icon).split('//'))[1];
        currentWeather.humidity = response.current.humidity;
        currentWeather.wind = response.current.wind_mph;
        currentWeather.cloud = response.current.cloud;
        currentWeather.uv = response.current.uv;
        currentWeather.lastUpdated = new Date();

        return currentWeather

    }).then(function(currentWeather) {

        console.log(`Just Checking`);
        displayCurrentWeatherToDom();
        saveLastSearched();

        /*

        for (const property in currentWeather  ) {
            console.log(currentWeather[property]);
        }
        */
        
        //return currentWeather

    })

    
    console.log(currentWeather);
    return currentWeather;

    //displayCurrentWeatherToDom();



})


