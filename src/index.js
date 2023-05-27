import {asyncWeather} from './promisedata.js';
import {fullPage, menuBar, searchSection, buttonSection, dataSection, dataSectionTop, dataSectionBottom, mapSection, searchBar, searchButton, locationHeading, currentTemperature, conditionIcon, lastUpdated, temperatureSwitchButton, conditionInfoHeading, uvBox, humidityBox, windBox, cloudBox} from './structure.js';
import './style.css';


/*
asyncWeather('san diego').then(function(response) {
    console.log(response)
})
*/

let currentWeather = {
    
};

//////////////////////////////////////////////

let displayCurrentWeatherToDom = function() {

    locationHeading.textContent = `${currentWeather.officialName}, ${currentWeather.region}, ${currentWeather.country}`;
    currentTemperature.textContent = `${currentWeather.tempF}`;

    conditionIcon.src = `${currentWeather.conditionIcon}`;
    conditionInfoHeading.textContent = `${currentWeather.conditionText} in ${currentWeather.officialName}`;

    uvBox.textContent = `${currentWeather.uv}`;
    humidityBox.textContent = `${currentWeather.humidity}`;
    windBox.textContent = `${currentWeather.wind}`;
    cloudBox.textContent = `${currentWeather.cloud}`;


}



//////////////////////////////////////////////

document.body.appendChild(fullPage);

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

        return currentWeather

    }).then(function(currentWeather) {

        console.log(`Just Checking`);
        displayCurrentWeatherToDom();

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





