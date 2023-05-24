
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

export {fullPage, menuBar, searchSection, buttonSection, dataSection, dataSectionTop, dataSectionBottom, mapSection, searchBar, searchButton}








