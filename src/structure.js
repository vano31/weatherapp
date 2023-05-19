
let elementCreator = function(type) {


    return function(className) {

        let element = document.createElement(type);
        element.classList.add(className);
        
        return element;

    }


}

let divmaker = elementCreator('div');
let food = divmaker('food');


export {food}




/*
let elementCreator = function(type) {

    return function(name) {



        name = document.createElement(type);

        let nameString = Object.keys({name})[0]

        name.classList.add(`${nameString}`);
    }

}


let divmaker = elementCreator('div');
let fullPage = divmaker()

export {elementCreator}

*/
