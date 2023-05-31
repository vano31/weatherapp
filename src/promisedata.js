function asyncWeather (searchlocation) {

    return new Promise (function (resolve, reject) {

        //let searchlocation = 'abuja';

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

        .catch(function(error) {

            console.log(error)

        })


        

    })



};

/////////

//https://www.planetware.com/world/top-cities-in-the-world-to-visit-eng-1-39.htm
//https://www.travelandleisure.com/worlds-best/cities


let randomCities = [

'Paris',
'New York City',
'London',
'Bangkok',
'Hong Kong',
'Dubai',
'Singapore',
'Rome',
'Macau',
'Istanbul',
'Kuala Lumpur',
'Delhi',
'Tokyo',
'Antayla',
'Mexico City',
'Porto',
'San Francisco',
'Beijing',
'Los Angeles',
'Chicago',
'Barcelona',
'Abu Dhabi',
'Amsterdam',
'Madrid',
'Sydney',
'San Miguel de Allende',
'Lisbon',
'Vienna',
'Udaipur',
'Ubud',
'Kyoto',
'Florence',
'Oaxaca',
'Chiang Mai',
'Bangkok',
'Taipei',
'Krakow',
'Luang Prabang',
'San Sebastian',
'Bodrum',
'Jaipur',
'Charleston',
'Cape Town',
'Trieste',
'Ljubljana',
'Seoul',
'Antigua Guatemala',
'Porto',
'Accra',
'Benguerra Island',
'Cairo',
'Lagos',
'Abuja',
'Marrakesh',
'Stone Town',
'Johannesburg',
'Kigali',
'Essaouira',
'Windhoek',
'Durban',
'Nairobi',
'Algiers',
'Luxor',
'Dar es Salaam',
'Fes'


]


export {asyncWeather, randomCities}









