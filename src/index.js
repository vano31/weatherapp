import {asyncWeather} from './promisedata.js';
import {fullPage, menuBar, searchSection, buttonSection, dataSection, dataSectionTop, dataSectionBottom, mapSection, searchBar, searchButton, locationHeading, currentTemperature, conditionIcon, lastUpdated, temperatureSwitchButton, conditionInfoHeading, uvBox, humidityBox, windBox, cloudBox} from './structure.js';
import './style.css';


/*
asyncWeather('san diego').then(function(response) {
    console.log(response)
})
*/

let location = {
    
};

document.body.appendChild(fullPage);

searchButton.addEventListener('click', function() {

    location.name = searchBar.value;
    asyncWeather(location.name).then(function(response) {
        console.log(response);
        location.officialName = response.location.name;
        location.region = response.location.region;
        location.country = response.location.country;
        location.lat = response.location.lat;
        location.lon = response.location.lon;
        location.tempF = response.current.temp_f;
        location.tempC = response.current.temp_c;
        location.conditionText = response.current.condition.text;
        location.conditionIcon = response.current.condition.icon;
        location.humidity = response.current.humidity;
        location.wind = response.current.wind_mph;
        location.cloud = response.current.cloud;

        return location

    }).then(function(location) {

        //console.log(location);

        
        for (const property in location  ) {
            console.log(location[property]);
        }
        

    


    })

    


})




