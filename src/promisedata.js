function asyncWeather () {

    return new Promise (function (resolve, reject) {

        let searchlocation = 'abuja';

        let attemptedLocation = fetch(`http://api.weatherapi.com/v1/current.json?key=8a9310029e7f43e2b6a40658230205&q=${searchlocation}&aqi=no`, {mode: 'cors'});

        attemptedLocation.then(function(response) {
            //console.log(response)
            return response.json();
        })
        .then(function(response) {
            //console.log(response)
            return response;
        })
        .then(function(response) {
            resolve(response)

        })


        

    })



};

export {asyncWeather}









