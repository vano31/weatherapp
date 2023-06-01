
/////////////////////////////////////////////////////
let elementCreator = function(type) {

    return function(className) {

        let element = document.createElement(type);
        element.classList.add(className);
        
        return element;

    }

}

let divmaker = elementCreator('div');

////////////////////////////////////////////////////////

let fullPage = divmaker('fullPage');

////////////////////////////////////////////////////////
////Start of Making Main Sections

let menuBar = divmaker('menuBar');///////////

let searchSection = divmaker('searchSection');
menuBar.appendChild(searchSection);

let buttonSection = divmaker('buttonSection');
menuBar.appendChild(buttonSection);


fullPage.appendChild(menuBar);


//////////////////////////////////////////////////////////

let dataSection = divmaker('data');///////////


let dataSectionTop = divmaker('dataSectionTop');
dataSection.appendChild(dataSectionTop);

let dataSectionBottom = divmaker('dataSectionBottom');
dataSection.appendChild(dataSectionBottom);


fullPage.appendChild(dataSection);

//////////////////////////////////////////////////////////

let mapSection = divmaker('mapSection');/////////////

let mapHolder = divmaker('map');
mapHolder.id = 'map';

mapSection.appendChild(mapHolder);


fullPage.appendChild(mapSection);


/////////////////////////////////////////////////////////

let formMaker = elementCreator('form');

let searchForm = formMaker('searchForm');

/////////////////////////////////////

let searchBarMaker = elementCreator('input');

let searchBar = searchBarMaker('searchBar');

/////////////////////////////////////////////

searchBar.type = 'text';
searchBar.id = 'searchBar';
searchBar.name = 'searchBar';

///////////////////////////////////////////

let searchButton = document.createElement('button');
searchButton.classList.add('searchButton');
searchButton.type = 'button';
searchButton.textContent = 'Search';

////////////////////////////////////////

searchForm.appendChild(searchBar);
searchForm.appendChild(searchButton);

searchSection.appendChild(searchForm);


////////////////////////////////////////////////////////

//// Start of Making Units Within Main Sections

let locationHeading = divmaker('locationHeading');
locationHeading.classList.add('borderCheck');
let currentTemperature = divmaker('currentTemperature');
currentTemperature.classList.add('borderCheck');

let conditionIcon = document.createElement('img');
conditionIcon.classList.add('conditionIcon');
conditionIcon.classList.add('borderCheck');


let conditionInfoHeading = divmaker('conditionInfoHeading');
conditionInfoHeading.classList.add('borderCheck');
let lastUpdated = divmaker('lastUpdated');
lastUpdated.classList.add('borderCheck');
let temperatureSwitchButton = document.createElement('button');
temperatureSwitchButton.classList.add('temperatureSwitchButton');
temperatureSwitchButton.classList.add('borderCheck');
temperatureSwitchButton.textContent = `Switch Temperature Unit`

dataSectionTop.appendChild(locationHeading);
dataSectionTop.appendChild(currentTemperature);
dataSectionTop.appendChild(conditionIcon);
dataSectionTop.appendChild(conditionInfoHeading);
dataSectionTop.appendChild(lastUpdated);
dataSectionTop.appendChild(temperatureSwitchButton);


////////////////////////////////////////////////////

let uvBox = divmaker('uvBox');
uvBox.classList.add('borderCheck');
let humidityBox = divmaker('humidityBox');
humidityBox.classList.add('borderCheck');
let windBox = divmaker('windBox');
windBox.classList.add('borderCheck');
let cloudBox = divmaker('cloudBox');
cloudBox.classList.add('borderCheck');

dataSectionBottom.appendChild(uvBox);
dataSectionBottom.appendChild(humidityBox);
dataSectionBottom.appendChild(windBox);
dataSectionBottom.appendChild(cloudBox);

/////////////////////////////////////////////////////

let refreshButton = document.createElement('button');
refreshButton.classList.add('refreshButton');
refreshButton.textContent = 'Refresh';

let randomButton = document.createElement('button');
randomButton.classList.add('randomButton');
randomButton.textContent = 'Random';

buttonSection.appendChild(refreshButton);
buttonSection.appendChild(randomButton);




////////////////////////////////////////////////////////////


export {fullPage, menuBar, searchSection, buttonSection, dataSection, dataSectionTop, dataSectionBottom, mapSection, searchBar, searchButton, locationHeading, currentTemperature, conditionIcon, conditionInfoHeading, lastUpdated, temperatureSwitchButton, uvBox, humidityBox, windBox, cloudBox, randomButton, refreshButton, mapHolder}








