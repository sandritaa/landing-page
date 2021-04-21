/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

/*global variable, selects ID by the name of "navbar_list" from HTML document.*/
const navBarMenu = document.getElementById ('navbar__list');

/*global variable, selects all the "sections" in HTML doc*/
const components = document.querySelectorAll ('section');

/*list of item*/
let numberOfItems = components.length;

/*add elements to the navbar*/
for (let i=0; i<numberOfItems; i++) { 
    
    let componentId = components[i].getAttribute('id')
    let componentName = components[i].getAttribute('data-nav')

    let allTogether = document.createElement('li')
    allTogether.innerHTML = `<a class='menu__link' href='#${componentId}'>${componentName}</a>`

    navBarMenu.appendChild(allTogether);
}
