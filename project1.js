// for the record ik snap dat dit moeilijk doen is maar ik heb geprobeerd zo veel mogelijk van de onderwerpen die we kregen terug te laten komen als demonstratie.
let shipClr = document.querySelector("#shipColorImage");                            //points at img ID
let colorText = document.querySelector("#colorDisplay");                            //points at the H5 that displays the color name
let buttonWrapper = document.querySelector('#btnGroup');                            //the WHOLE button div
let indexNumber = "";                                                               //random var for later
const images = [                                                                    //aray of objects with the name of the color with coresponding image
    {
        name: "Citron",
        source: "300i-pics/300i-Citron.jpg"
    },
    {
        name: "Electric Blue",
        source: "300i-pics/300i-Electric_Blue.jpg",
    },
    {
        name: "Monarch",
        source: "300i-pics/300i-Monarch.jpg",
    },
    {
        name: "Moonlight",
        source: "300i-pics/300i-Moonlight.jpg",
    },
    {
        name: "Obsidian",
        source: "300i-pics/300i-Obsidian.jpg",
    },
    {
        name: "Scarlet",
        source: "300i-pics/300i-Scarlet.jpg",
    },
    {
        name: "Sterling",
        source: "300i-pics/300i-Sterling.jpg",
    },
    {
        name: "Ultramarine",
        source: "300i-pics/300i-Ultramarine.jpg"
    }
];

buttonWrapper.addEventListener('click', (x) => {                                    //checks the whole div for clicks
    let isButton = x.target.nodeName === 'BUTTON';                                  //makes sure only button clicks trigger our function not the div as a whole                        
    if (!isButton) {
        return;
    }
    indexNumber = parseInt(`${x.target.id}`.slice(-1))-1;                           //gets the ID of the button, puts it in a string, slices the last number off, change the string to an integer and does -1 so it matches the array index
    shipClr.src = images[indexNumber].source;                                       //replaces the src from the original img with the src coresponding to the button
    colorText.textContent = images[indexNumber].name;                               //replaces teh text from teh h5 with the text from the array
})